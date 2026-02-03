# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Aether Studio** (以太工作室) is a bilingual (Chinese/English) single-page application portfolio website for a high-end technical studio. The project emphasizes visual impact through heavy use of animations, modern web technologies, and a cyberpunk/space aesthetic.

**Tech Stack:**
- React 18.2.0 with JSX (no TypeScript in source, only @types for dev)
- Vite 5.0.8 for build tooling
- Framer Motion 12.29.2 for all animations
- Tailwind CSS 3.4.1 for styling
- Lucide React for icons

**Brand Identity:**
- Primary color: `#0066FF` (electric blue)
- Background: Black (`#000000`)
- Tone: Professional, technical, forward-thinking
- Keywords: "高性能" (high performance), "工业级" (industrial-grade), "架构" (architecture)

## Development Commands

```bash
# Start development server (runs on 127.0.0.1:3005)
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview production build
npm run preview
```

**Note:** The dev server is configured with `strictPort: true` on port 3005. If port 3005 is unavailable, the server will fail instead of trying another port.

## Architecture

### View-Based Routing

This project uses **state-based view routing** instead of React Router or traditional URL-based routing. Navigation is handled through the `currentView` state in `App.jsx`:

```javascript
const [currentView, setCurrentView] = useState('home');

// Views: 'home' | 'solutions' | 'tech' | 'about' | 'team'
```

- Page transitions are animated with Framer Motion's `AnimatePresence`
- Team page is lazy-loaded with `React.lazy()` for code splitting
- Each view receives a unique `key` prop to ensure proper exit animations

### Component Structure

```
src/
├── components/
│   ├── layout/         # Navbar, Footer (barrel exports via index.js)
│   ├── sections/       # Reusable page sections (Hero, Features, etc.)
│   └── ui/             # UI primitives (Button, Card, ScrollProgress, etc.)
├── pages/              # Top-level page components (Home, Solutions, Tech, About, Team)
├── hooks/              # Custom React hooks
├── utils/              # Constants, animation variants, utilities
├── App.jsx             # Main app with view routing
└── main.jsx            # React entry point
```

**Key Patterns:**
- **Barrel exports**: Each component directory has an `index.js` for clean imports
- **Composition**: Pages are composed of section components from `components/sections/`
- **Separation**: Layout components (Navbar, Footer) vs UI components vs sections

### Animation System

All animations use **Framer Motion** with centralized variant definitions in `src/utils/animations.js`:

```javascript
import { fadeIn, fadeInUp, scaleIn, stagger } from '@/utils/animations';
```

**Common variants:**
- `fadeIn`, `fadeInUp`, `fadeInDown`, `fadeInLeft`, `fadeInRight`
- `scaleIn`, `rotateIn`
- `stagger` for list animations
- `pageTransition` for view changes

**Animation patterns:**
- Import variants from `@/utils/animations` (don't redefine inline)
- Use `motion.*` components from Framer Motion
- View transitions wrapped in `AnimatePresence mode="wait"`
- Viewport-triggered animations with `viewport={{ once: true, margin: "-100px" }}`

### Styling System

**Tailwind CSS** with custom theme extensions:

```javascript
// Primary color
className="text-[#0066FF]" or className="text-blue-600"

// CSS custom properties are defined in index.css for theme colors
// Import colors from utils/constants.js:
import { COLORS } from '@/utils/constants';
```

**Styling conventions:**
- Use Tailwind utility classes for 95% of styling
- Use inline styles only for dynamic values (motion components)
- Responsive design: Mobile-first with `sm:`, `lg:`, `xl:` breakpoints
- Dark theme only (no light mode)

### Data Management

Static data is centralized in `src/utils/constants.js`:
- `TEAM_MEMBERS` - Team member profiles
- `PROJECTS` - Portfolio projects
- `SERVICES` - Service offerings
- `TECH_STACK` - Technology categories
- `NAV_LINKS` - Navigation configuration

**Pattern:** Import and use constants directly - no state management library needed.

### Custom Hooks

Located in `src/hooks/`:
- `useScrollProgress` - Tracks page scroll progress for progress bar
- `useScrollPosition` - Detects scroll position
- `useInView` - Intersection Observer wrapper
- `useLocalStorage` - Local storage persistence

## Build Configuration

**Vite configuration highlights:**
- Path alias: `@` → `./src`
- Source maps enabled for debugging
- Manual chunk splitting for `framer-motion` and `lucide-react`
- Dev server: `127.0.0.1:3005` (strict port)

**Output:**
- Production builds to `dist/`
- Vendor chunks separated for better caching
- Sourcemaps included

## Code Conventions

### File Naming
- Components: `PascalCase.jsx` (e.g., `Navbar.jsx`, `HomeHero.jsx`)
- Utilities: `camelCase.js` (e.g., `animations.js`, `constants.js`)
- Hooks: `camelCase.js` with `use` prefix (e.g., `useScrollProgress.js`)

### Component Patterns
- Functional components with hooks only (no class components)
- Default exports for pages and main components
- Named exports for reusable components (via barrel index.js files)
- Destructure props consistently

### Import Order
```javascript
// 1. React imports
import React, { useState } from 'react';

// 2. Third-party libraries
import { motion } from 'framer-motion';

// 3. Absolute imports (using @ alias)
import { COLORS } from '@/utils/constants';
import { Button } from '@/components/ui';

// 4. Relative imports
import { LocalComponent } from './components';
```

### Language & Content
- Primary language: Chinese with English subtitles
- Navigation and UI in Chinese
- Technical terms may remain in English
- Tone: Professional, innovative, technical

## Common Tasks

### Adding a New Page Section

1. Create section component in `src/components/sections/YourSection.jsx`
2. Export from `src/components/sections/index.js`
3. Import and use in page component
4. Use animation variants from `@/utils/animations`

### Adding Animation

```javascript
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';

<motion.div
  variants={fadeInUp}
  initial="initial"
  animate="animate"
  viewport={{ once: true }}
>
  Content
</motion.div>
```

### Updating Navigation Links

Edit `NAV_LINKS` in `src/utils/constants.js` and update the switch statement in `App.jsx`.

### Adding Team Members/Projects/Services

Update the respective arrays in `src/utils/constants.js` following existing patterns.

## Important Notes

- **No URL routing**: Navigation is state-based, not URL-based
- **Bilingual content**: Chinese primary, English secondary
- **Animation-first**: Heavy use of Framer Motion throughout
- **Performance**: Team page lazy-loaded, vendor chunks split
- **Visual aesthetic**: Dark theme with blue accents, space/cyberpunk elements
- **Image paths**: Currently using placeholder paths (e.g., `/team-2.jpg`) - these need real assets
