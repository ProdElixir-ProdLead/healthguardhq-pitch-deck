# 📦 ALL CODE FILES - PART 2: ENTRY POINTS & ROUTES

---

## FILE 9: `src/main.tsx`

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

---

## FILE 10: `src/app/App.tsx`

```typescript
import { RouterProvider } from 'react-router';
import { router } from './routes';

export default function App() {
  return <RouterProvider router={router} />;
}
```

---

## FILE 11: `src/app/routes.tsx`

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

## FILE 12: `src/app/components/figma/ImageWithFallback.tsx`

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

---

✅ **PART 2 COMPLETE** - Entry points done!

📝 **NEXT:** See `ALL_CODE_PART3_STYLES.md` for CSS files
