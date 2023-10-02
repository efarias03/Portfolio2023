import { Suspense } from "react";
import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/Sections/Hero";

import { ProjectsSection } from "./components/Sections/Projects";
import { Loader } from "@react-three/drei";
import { LoadingDavid } from "./components/LoadingDavid";

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
    <Suspense fallback={null} >
      <Background />
      <Overlay />
      {/* <Cursor /> */}
    </Suspense>
      <Loader />
    </>
  );
};