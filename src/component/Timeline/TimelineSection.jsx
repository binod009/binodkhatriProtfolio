import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Tabs } from "antd";
import Education from "../eduction/Education";
import Skills from "../Skill/Skills";
import Resume from "../CV/Resume";
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
];
const TimelineSection = () => {
  return (
    <>
      <div id="aboutme" className="max-w-[1240px] mx-auto py-10">
        <h2 className="text-5xl text-white font-bold">About Me</h2>
        <Tabs
          centered={true}
          defaultActiveKey="1"
          tabBarGutter={40}
          size="large"
          tabBarStyle={{
            fontWeight: "bold",
          }}
          className="my_tabs"
          items={[
            {
              label: `Education`,
              key: "1",
              children: <Education />,
            },
            {
              label: `Professional Skills`,
              key: "2",
              children: <Skills />,
            },
            {
              label: `CV`,
              key: "3",
              children: <Resume />,
            },
          ]}
        />
      </div>
    </>
  );
};

export default TimelineSection;

{
  /* <h2 className="text-white font-bold text-5xl">About Me</h2>
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
  className="flex lg:justify-between gap-1 mt-7  overflow-hidden p-5"
>
  <motion.div
    drag="x"
    dragConstraints={{ right: 0, left: -width }}
    className="flex"
  >
    {timeline.map((item, ind) => (
      <>
        <div className="p-1">
          <div
            key={ind}
            className="flex flex-col rounded max-h-32 max-w-2xl"
          >
            <h2 className="bg-gradient-to-r from-white to-slate-700 inline-block text-transparent bg-clip-text text-[1.5em] font-normal">
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
</motion.div> */
}
