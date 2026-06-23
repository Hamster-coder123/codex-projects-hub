import { useEffect, useRef } from "react";

export default function LoadingIntro() {
  const shellRef = useRef(null);

  useEffect(() => {
    let measureFrame = 0;
    let animationFrame = 0;

    const syncTitlePath = () => {
      const shell = shellRef.current;
      const heroTitle = document.querySelector(".hero-title");

      window.cancelAnimationFrame(animationFrame);

      if (!shell || !heroTitle) {
        return;
      }

      const heroRect = heroTitle.getBoundingClientRect();
      const startX = Math.round((window.innerWidth - heroRect.width) / 2);
      const startY = Math.round((window.innerHeight - heroRect.height) / 2);
      const endX = Math.round(heroRect.left);
      const endY = Math.round(heroRect.top);
      const startTransform = `translate3d(${startX}px, ${startY}px, 0) scale(1.02)`;
      const endTransform = `translate3d(${endX}px, ${endY}px, 0) scale(1)`;

      shell.style.setProperty("--intro-start-x", `${startX}px`);
      shell.style.setProperty("--intro-start-y", `${startY}px`);
      shell.style.setProperty("--intro-end-x", `${endX}px`);
      shell.style.setProperty("--intro-end-y", `${endY}px`);
      shell.style.setProperty("--intro-title-width", `${Math.round(heroRect.width)}px`);
      shell.style.setProperty("--intro-title-height", `${Math.round(heroRect.height)}px`);
      shell.style.transform = startTransform;
      shell.classList.add("intro-ready");

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        shell.style.transform = endTransform;
        return;
      }

      const holdDuration = 1200;
      const travelDuration = 1300;
      let startTime = 0;

      const easeOutCubic = (value) => 1 - Math.pow(1 - value, 3);

      const tick = (now) => {
        if (startTime === 0) {
          startTime = now;
        }

        const elapsed = now - startTime;

        if (elapsed <= holdDuration) {
          shell.style.transform = startTransform;
          animationFrame = window.requestAnimationFrame(tick);
          return;
        }

        const travelProgress = Math.min((elapsed - holdDuration) / travelDuration, 1);
        const easedProgress = easeOutCubic(travelProgress);
        const currentX = Math.round(startX + (endX - startX) * easedProgress);
        const currentY = Math.round(startY + (endY - startY) * easedProgress);
        const currentScale = 1.02 - 0.02 * easedProgress;

        shell.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) scale(${currentScale})`;

        if (travelProgress < 1) {
          animationFrame = window.requestAnimationFrame(tick);
        }
      };

      animationFrame = window.requestAnimationFrame(tick);
    };

    measureFrame = window.requestAnimationFrame(syncTitlePath);
    window.addEventListener("resize", syncTitlePath);

    return () => {
      window.cancelAnimationFrame(measureFrame);
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", syncTitlePath);
    };
  }, []);

  return (
    <div className="loading-screen" aria-hidden="true">
      <div className="loading-stage">
        <div className="loading-title-shell" ref={shellRef}>
          <div className="loading-title title-stack" role="presentation">
            <span className="loading-title-line loading-line-1">Codex</span>
            <span className="loading-title-line loading-line-2">Projects</span>
            <span className="loading-title-line loading-line-3">Hub</span>
          </div>
        </div>
      </div>
    </div>
  );
}
