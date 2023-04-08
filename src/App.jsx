import { useState } from "react";
import AccomSection from "./component/Acomplishment/AccomSection";
import BackgroundAnimation from "./component/backgroundanimation/BackgroundAnimation";
import Education from "./component/eduction/Education";
import { FooterSection } from "./component/Footer/FooterSection";
import HeroSection from "./component/Hero/HeroSection";
import Navbar from "./component/navbar/Navbar";
import ProjectSection from "./component/Project/ProjectSection";
import Skills from "./component/Skill/Skills";
import Technology from "./component/Technologies/Technology";
import TimelineSection from "./component/Timeline/TimelineSection";
import Contactus from "./component/contact/Contactus";
import Test from "./component/test";
import Test2 from "./component/Test2";

function App() {
  return (
    <>
      <div className="snap-y snap-mandatory h-screen z-0 overflow-y-scroll overflow-x-hidden">
        <Navbar />
        <section className="snap-center">
          <HeroSection />
        </section>
        <section className="snap-start">
          <ProjectSection />
        </section>
        <section className="snap-center">
          <TimelineSection />
        </section>
        <section className="snap-start">
          <Contactus />
        </section>
      </div>
    </>
  );
}

export default App;
