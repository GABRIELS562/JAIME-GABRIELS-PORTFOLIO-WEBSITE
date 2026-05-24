# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Start development server on localhost:3000
npm run build      # Create production build in /build
npm test           # Run tests
```

## Architecture

This is a React 18 portfolio website using Create React App (react-scripts 5.x).

### Component Structure

Each component follows a consistent pattern:
- `src/components/[Name]/[Name].jsx` - Component logic
- `src/components/[Name]/[Name].module.css` - Component-scoped styles (CSS Modules)

Main components rendered in order (see `src/pages/App.jsx`):
- ThemeToggle - Dark/light mode switcher
- Navigation - Fixed nav with smooth scrolling
- Header - Hero section with ParticleBackground
- About, Skills, Certifications, Projects, Resume, Technologies - Main content sections
- Contact - Contact info with social links
- Footer
- Terminal - Interactive CLI portfolio (toggle via TerminalToggle)
- ScrollToTop - Floating scroll button

All main content sections are wrapped in ErrorBoundary components.

### Styling System

- **CSS Variables**: Defined in `src/styles/variables.css` (colors, shadows, gradients)
- **Global Styles**: Base styles in `src/styles/globals.css`
- **Component Styles**: CSS Modules (`*.module.css`) for scoped styling
- **Theme Support**: Uses `data-theme="light"` attribute for light mode overrides

Color palette based on ColorHunt warm professional theme:
- Primary: `#213555`, `#3E5879`
- Accent: `#D8C4B6`, `#F5EFE7`, `#C9A96E`

### Static Assets

Located in `/public`:
- `images/logos/` - Technology stack logos
- `images/projects/` - Project architecture diagrams
- `merged-background-video.mp4` - 3D character background video
- `Jaime-Gabriels-DevOps-Resume.pdf` - Downloadable resume
