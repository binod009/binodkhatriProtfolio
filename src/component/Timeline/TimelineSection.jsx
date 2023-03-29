import React from "react";

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

        <div className="flex justify-between mt-5 gap-1 ">
          {timeline.map((item, ind) => (
            <>
              <div key={ind} className="flex flex-col w-64">
                <h2 className="bg-gradient-to-r from-white to-slate-800 inline-block text-transparent bg-clip-text text-[1.5em] font-normal">
                  {item.year}
                </h2>
                <p className="text-slate-400 text-[0.9em] font-normal text-start tracking-tighter">
                  {item.description}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default TimelineSection;
