import { NavBar } from "./components/NavBar";

import { ProjectsContent } from "./components/Sections/Projects/ProjectsContent";
import { HeroContent } from "./components/Sections/Hero/HeroContent";
import { ContactContent } from "./components/Contact/ContactContent";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <NavBar />
      <div className="texture"></div>
      <HeroContent />
      <ProjectsContent />
      <ContactContent />
      <Footer />
    </>
  );
};