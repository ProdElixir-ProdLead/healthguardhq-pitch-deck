# 📦 ALL CODE FILES - PART 1: CONFIGURATION & SETUP

Copy each file below exactly as shown.

---

## FILE 1: `package.json`

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

**After creating this file, run:** `npm install`

---

## FILE 2: `tsconfig.json`

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

---

## FILE 3: `vite.config.ts`

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

---

## FILE 4: `vercel.json`

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

---

## FILE 5: `postcss.config.mjs`

```javascript
export default {}
```

---

## FILE 6: `index.html`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HealthGuardHQ Pitch Deck - Morgan DeBaun Health Equity Investment Initiative</title>
    <meta name="description" content="Investment-grade pitch deck for HealthGuardHQ - AI Governance for Healthcare That Actually Works" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

## FILE 7: `README.md`

```markdown
# HealthGuardHQ Pitch Deck

Investment-grade pitch deck for the Morgan DeBaun Health Equity Investment Initiative.

## 🚀 Quick Start

\`\`\`bash
npm install
npm run dev
\`\`\`

## 🌐 Deploy to Vercel

\`\`\`bash
npm i -g vercel
vercel login
vercel --prod
\`\`\`

## ✨ Features

- 11-slide investment deck
- Premium animations with Motion
- PDF/PNG export functionality
- Responsive 16:9 aspect ratio
- Custom fonts (Sora, DM Sans, JetBrains Mono)
- Brand colors: #0D9488 (primary), #16A34A (approved), #F59E0B (escalated), #EF4444 (blocked)

## ⌨️ Keyboard Shortcuts

- `←` / `→` - Navigate slides
- `Home` / `End` - Jump to first/last slide
- `F` - Toggle fullscreen
- `ESC` - Exit export/fullscreen

## 📦 Tech Stack

- React 18.3
- TypeScript
- Vite 6
- Tailwind CSS v4
- React Router 7
- Motion (Framer Motion)
- Lucide React
- jsPDF & html-to-image

---

**HealthGuard<span style="color: #16A34A">hq</span>.tech**  
AI Governance for Healthcare That Actually Works
```

---

## FILE 8: `.gitignore`

```
# Dependencies
node_modules
.pnpm-store

# Build output
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Environment
.env
.env.local
.env.production

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*
```

---

✅ **PART 1 COMPLETE** - Configuration files done!

📝 **NEXT:** See `ALL_CODE_PART2_ENTRY_POINTS.md` for React entry files
