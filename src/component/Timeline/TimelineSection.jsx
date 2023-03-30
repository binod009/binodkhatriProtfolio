import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
const timeline = [
  {
    year: "2016",
    description: "Started My Journey as a IT students",
  },
  {
    year: "2021",
    description:
      "Build Some Collage project through which i developed My Skill ",
  },
  {
    year: "2022",
    description:
      "Started Learning Reactjs and build some project as weather app and document management system",
  },
  {
    year: "2023",
    description:
      "DoneInternship In Stars Compnany Pvt ltd. as FrontEnd developer",
  },
  {
    year: "2024",
    description:
      "DoneInternship In Stars Compnany Pvt ltd. as FrontEnd developer",
  },
  {
    year: "2025",
    description:
      "DoneInternship In Stars Compnany Pvt ltd. as FrontEnd developer",
  },
];
const TimelineSection = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      <div className="max-w-[1020px] mx-auto pt-[58px]">
        <h2 className="text-white font-bold text-5xl">About Me</h2>
        <p className="text-slate-500 text-[1rem] text-justify mt-2">
          I am a web developer with a passion for both front-end and back-end
          development. With my knowledge in both areas, I am able to create
          beautiful, functional, and responsive websites. My expertise includes
          HTML, CSS, JavaScript, React, Node.js, and SQL, among other
          technologies. I am always looking for new and exciting challenges in
          the field of web development."
        </p>

        <motion.div
          ref={carousel}
          className="flex lg:justify-between gap-1 mt-7 bg-orange-300 overflow-hidden"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="bg-blue-500 flex"
          >
            {timeline.map((item, ind) => (
              <>
                <div className="p-1">
                  <div
                    key={ind}
                    className="bg-red-500 flex flex-col px-5 rounded max-h-32 max-w-2xl"
                  >
                    <h2 className="bg-gradient-to-r from-white to-slate-800 inline-block text-transparent bg-clip-text text-[1.5em] font-normal">
                      {item.year}
                    </h2>
                    <p className="text-slate-400 text-[0.9em] font-normal text-start -tracking-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default TimelineSection;
