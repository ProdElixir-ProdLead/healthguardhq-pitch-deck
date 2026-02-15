# 🎯 COMPLETE CODE - COPY & PASTE READY

## 📋 TABLE OF CONTENTS

1. [Project Setup](#project-setup)
2. [Configuration Files](#configuration-files)
3. [Entry Points](#entry-points)
4. [Styles](#styles)
5. [Main Components](#main-components)
6. [Slide Components](#slide-components)
7. [Deployment](#deployment)

---

## 1. PROJECT SETUP

### Create Project Structure
```bash
mkdir healthguardhq-pitch-deck
cd healthguardhq-pitch-deck
mkdir -p src/app/components/slides src/app/components/figma src/styles
```

---

## 2. CONFIGURATION FILES

### `package.json`
```json
{
  "name": "healthguardhq-pitch-deck",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "html-to-image": "^1.11.13",
    "jspdf": "^2.5.2",
    "lucide-react": "^0.487.0",
    "motion": "^12.23.24",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router": "^7.13.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.1.12",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react": "^4.7.0",
    "tailwindcss": "^4.1.12",
    "typescript": "^5.8.3",
    "vite": "^6.3.5"
  }
}
```

After creating this file, run: `npm install`

### `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": false,
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

### `vite.config.ts`
```typescript
import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
```

### `vercel.json`
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### `postcss.config.mjs`
```javascript
export default {}
```

### `index.html`
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HealthGuardHQ Pitch Deck</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## 3. ENTRY POINTS

### `src/main.tsx`
```typescript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './app/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

### `src/app/App.tsx`
```typescript
import { RouterProvider } from 'react-router';
import { router } from './routes';

export default function App() {
  return <RouterProvider router={router} />;
}
```

### `src/app/routes.tsx`
```typescript
import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import TitleSlide from "./components/slides/TitleSlide";
import ProblemSlide from "./components/slides/ProblemSlide";
import HealthEquitySlide from "./components/slides/HealthEquitySlide";
import SolutionSlide from "./components/slides/SolutionSlide";
import DifferentiatorSlide from "./components/slides/DifferentiatorSlide";
import RegulatorySlide from "./components/slides/RegulatorySlide";
import MarketSlide from "./components/slides/MarketSlide";
import CompetitiveSlide from "./components/slides/CompetitiveSlide";
import BusinessModelSlide from "./components/slides/BusinessModelSlide";
import TeamSlide from "./components/slides/TeamSlide";
import AskSlide from "./components/slides/AskSlide";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: TitleSlide },
      { path: "problem", Component: ProblemSlide },
      { path: "health-equity", Component: HealthEquitySlide },
      { path: "solution", Component: SolutionSlide },
      { path: "differentiator", Component: DifferentiatorSlide },
      { path: "regulatory", Component: RegulatorySlide },
      { path: "market", Component: MarketSlide },
      { path: "competitive", Component: CompetitiveSlide },
      { path: "business-model", Component: BusinessModelSlide },
      { path: "team", Component: TeamSlide },
      { path: "ask", Component: AskSlide },
    ],
  },
]);
```

---

## 4. STYLES

### `src/styles/fonts.css`
```css
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap');
```

### `src/styles/tailwind.css`
```css
@import 'tailwindcss';
```

### `src/styles/index.css`
```css
@import './fonts.css';
@import './tailwind.css';
@import './theme.css';

body {
  font-family: 'DM Sans', sans-serif;
  overflow: hidden;
}

.font-headline { font-family: 'Sora', sans-serif; }
.font-body { font-family: 'DM Sans', sans-serif; }
.font-mono { font-family: 'JetBrains Mono', monospace; }

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #f1f1f1; }
::-webkit-scrollbar-thumb { background: #0D9488; border-radius: 4px; }

.glass-card {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.glow-teal { box-shadow: 0 0 20px rgba(13, 148, 136, 0.3); }
.glow-green { box-shadow: 0 0 20px rgba(22, 163, 74, 0.3); }
```

### `src/styles/theme.css`
Copy the theme.css from your current project (it's long - contains Tailwind v4 theme tokens)

---

## 5. MAIN COMPONENTS

### `src/app/components/figma/ImageWithFallback.tsx`
```typescript
import { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallback?: string;
}

export function ImageWithFallback({ src, alt, fallback, ...props }: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      if (fallback) {
        setImgSrc(fallback);
      }
    }
  };

  return (
    <img 
      src={imgSrc} 
      alt={alt} 
      onError={handleError}
      {...props}
    />
  );
}
```

### `src/app/components/Root.tsx`
This is a LARGE file (620 lines). It contains:
- Navigation controls
- PDF/PNG export functionality
- Keyboard shortcuts
- Fullscreen toggle
- Deploy modal

**See your current /src/app/components/Root.tsx file** - Copy it exactly as is.

---

## 6. SLIDE COMPONENTS

All 11 slide files are in your project at `/src/app/components/slides/`

Copy these files exactly:
- TitleSlide.tsx
- ProblemSlide.tsx
- HealthEquitySlide.tsx
- SolutionSlide.tsx
- DifferentiatorSlide.tsx
- RegulatorySlide.tsx
- MarketSlide.tsx
- CompetitiveSlide.tsx
- BusinessModelSlide.tsx
- TeamSlide.tsx
- AskSlide.tsx

---

## 7. DEPLOYMENT

```bash
# Run locally
npm install
npm run dev

# Deploy to Vercel
npm i -g vercel
vercel login
vercel --prod
```

---

## 🎯 EASIEST METHOD TO GET ALL FILES:

### Click the "Publish" button in Figma Make!

This will:
1. Deploy your app to a live URL
2. You can then download/clone the source
3. Or just use the live URL to share with investors

### OR: Copy files from Figma Make

I can provide each individual slide component. Would you like me to paste all 11 slides here?

**Reply with: "Yes, give me all slides"** and I'll paste each one.
