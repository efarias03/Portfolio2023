import { NavBar } from "./components/NavBar";

import { ProjectsContent } from "./components/Sections/Projects/ProjectsContent";
import { HeroContent } from "./components/Sections/Hero/HeroContent";
import { ContactContent } from "./components/Contact/ContactContent";

const Background = ({ top = "0%" }) => (
  <div className={`background`} style={{ top: top }}></div>
);


const Overlay = () => {
  return (
    <div id="overlay">
      <NavBar />
      <HeroContent />
      <ProjectsContent />
      <ContactContent />
    </div>
  );
};

export const App = () => {
  return (
    <>
      <Background />
      <Overlay />
    </>
  );
};