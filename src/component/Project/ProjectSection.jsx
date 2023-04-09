import React from "react";
import { project } from "../comon/common";
const ProjectSection = () => {
  return (
    <>
      <div
        id="project"
        className="text-white max-w-[1240px] mx-auto h-full py-10"
      >
        <span className="text-5xl text-white mt-28 font-bold">Projects</span>
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5 px-5">
          {project.map((item) => (
            <>
              <div className="bg-slate-900 rounded-lg p-5 shadow-md text-center max-w-80 border-[0.1rem] border-slate-800 mt-5">
                <div className="bg-white overflow-hidden bg-no-repeat bg-cover rounded-lg lg:h-64 cursor-pointer ">
                  <img
                    className="h-[100%] object-cover rounded-lg transition duration-180 ease-linear border-2-white hover:scale-125"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="text-slate-500 text-lg font-semibold mt-2 underline">
                  {item.title}
                </div>
                <div className="py-2 px-2">
                  <p className="text-justify text-[13px] text-slate-500">
                    {item.desc}
                  </p>
                </div>
                <div className="flex justify-around items-center py-2">
                  <div className="bg-blue-400 px-5 py-2 rounded transition ease-in-out hover:scale-110 cursor-pointer">
                    <a href={item.source} target="_blank">
                      Source code
                    </a>
                  </div>
                  <div className="bg-red-400 px-8 py-2 rounded transition ease-in-out hover:scale-110 cursor-pointer">
                    <a href={item.live} target="_blank">
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
