# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm install --legacy-peer-deps  # Install (legacy-peer-deps required)
npm run dev                      # Start dev server
npm run build                    # Build static site
npm run preview                  # Preview production build
npm run lint                     # ESLint
npm run format                   # Prettier
```

## Architecture

Static blog built with SvelteKit documenting cases of harmful AI/ML deployment. Deploys to GitHub Pages on push to `main` via `adapter-static`.

### Content Structure
- `demons/` - Markdown files for each entry
- Frontmatter spec defined in `SPEC.md` (required: title, date, source.url, summary)

### Tech Stack
- SvelteKit with mdsvex for markdown processing
- Tailwind CSS for styling
- GitHub Actions for deployment
