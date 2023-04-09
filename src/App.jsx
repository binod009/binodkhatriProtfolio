import HeroSection from "./component/Hero/HeroSection";
import ProjectSection from "./component/Project/ProjectSection";
import TimelineSection from "./component/Timeline/TimelineSection";
import Contactus from "./component/contact/Contactus";
import Navbar from "./component/navbar/Navbar";

function App() {
  return (
    <>
      <div className="antialiased">
        <Navbar />
        <HeroSection />
        <ProjectSection />
        <TimelineSection />
        <Contactus />
      </div>
    </>
  );
}

export default App;
