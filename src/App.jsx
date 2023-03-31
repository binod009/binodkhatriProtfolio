import { useState } from "react";
import AccomSection from "./component/Acomplishment/AccomSection";
import BackgroundAnimation from "./component/backgroundanimation/BackgroundAnimation";
import { FooterSection } from "./component/Footer/FooterSection";
import HeroSection from "./component/Hero/HeroSection";
import Navbar from "./component/navbar/Navbar";
import ProjectSection from "./component/Project/ProjectSection";
import Skills from "./component/Skill/Skills";
import Technology from "./component/Technologies/Technology";
import TimelineSection from "./component/Timeline/TimelineSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjectSection />
      <Skills />
    </>
  );
}

export default App;
