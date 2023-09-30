import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/Sections/Hero";

import { ProjectsSection } from "./components/Sections/Projects";

const Background = ({ top = "0%" }) => (
  <div className={`background`} style={{ top: top }}></div>
);


const Overlay = () => {
  return (
    <div id="overlay">
      <NavBar />
      <HeroSection />
      <ProjectsSection />
      {/* <HeroSection /> */}
    </div>
  );
};

export const App = () => {
  return (
    <>
      <Background />
      <Overlay />
      {/* <Cursor /> */}
    </>
  );
};