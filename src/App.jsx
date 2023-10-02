import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/Sections/Hero";

import { ProjectsSection } from "./components/Sections/Projects";

console.log("3D Model By: https://sketchfab.com/3d-models/head-of-michelangelos-david-optimised-d29af50360624e5e9b1855666475380d")

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