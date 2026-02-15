# 🚀 COMPLETE CODE PACKAGE - PART 1: SETUP FILES

Copy these files exactly as shown. Create each file in your project directory.

---

## 📄 `package.json`

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

---

## 📄 `tsconfig.json`

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
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

---

## 📄 `vite.config.ts`

```typescript
import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
```

---

## 📄 `vercel.json`

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

## 📄 `postcss.config.mjs`

```javascript
export default {}
```

---

## 📄 `index.html`

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

## 📄 `README.md`

```markdown
# HealthGuardHQ Pitch Deck

Investment-grade pitch deck for the Morgan DeBaun Health Equity Investment Initiative.

## 🚀 Quick Start

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
\`\`\`

## 🌐 Deploy to Vercel

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
\`\`\`

## ✨ Features

- 11-slide investment deck
- Premium animations with Motion (Framer Motion)
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
- Lucide React (icons)
- jsPDF (PDF export)
- html-to-image (PNG export)

---

**HealthGuard<span style="color: #16A34A">hq</span>.tech**  
AI Governance for Healthcare That Actually Works
```

---

✅ **PART 1 COMPLETE** - Setup files done!

📝 **NEXT:** See PART 2 for React component files (App.tsx, routes.tsx, main.tsx)
