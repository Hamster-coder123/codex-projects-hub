# Codex Projects Hub

A modern, searchable portfolio site for projects built with Codex.

Live site:

```text
https://Hamster-coder123.github.io/codex-projects-hub/
```

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Updating Projects

Project data lives in:

```text
src/data/projects.js
```

Add a new project object, commit the change, push to GitHub, then rebuild and publish the `dist` folder to the `gh-pages` branch.

GitHub Actions deployment can be added later after the GitHub CLI token is refreshed with the `workflow` scope.
