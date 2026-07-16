import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Contact = lazy(() => import("./components/Contact"));
const StarsCanvas = lazy(() => import("./components/canvas/StarsCanvas"));

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Suspense fallback={null}>
          <About />
          <Experience />
          <Tech />
          <Works />
        </Suspense>
        <div className="relative z-0">
          <Suspense fallback={null}>
            <Contact />
            <StarsCanvas />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
