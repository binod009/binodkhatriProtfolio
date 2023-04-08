import HeroSection from "./component/Hero/HeroSection";
import ProjectSection from "./component/Project/ProjectSection";
import TimelineSection from "./component/Timeline/TimelineSection";
import Contactus from "./component/contact/Contactus";
import Navbar from "./component/navbar/Navbar";

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
