export default function LoadingIntro() {
  return (
    <div className="loading-screen" aria-hidden="true">
      <div className="loading-stage">
        <div className="loading-title-shell">
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
