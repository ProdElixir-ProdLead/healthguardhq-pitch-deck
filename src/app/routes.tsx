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