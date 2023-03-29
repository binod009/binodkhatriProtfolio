import React from "react";
import { AiFillDatabase } from "react-icons/ai";
import { RiServerFill } from "react-icons/ri";
import { BsDatabaseCheck } from "react-icons/bs";
import { FaReact } from "react-icons/fa";

const Technology = () => {
  return (
    <>
      <div className="lg:max-w-[1020px] mx-auto pt-[58px]">
        <div className="mt-8">
          <h2 className="text-white font-bold text-5xl">Technologies</h2>
          <span>
            <p className="text-white text-[1em] mt-5 px-2">
              I have worked with a range of technologies in the web development
              world. from back-end to front-end
            </p>
          </span>
          <div className="max-w-[80px] h-[0.3rem] rounded-2xl bg-gradient-to-r from-[#8e62ce] via-[#6f73d0] to-[#20a4c8] mt-8 mb-8"></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="p-5">
            <FaReact color="white" size={24} />
            <span className="text-white text-[1.5em] font-bold">Front-end</span>
            <p className="text-slate-500 text-[1em]">Experience with Reactjs</p>
          </div>
          <div className="p-5">
            <RiServerFill color="white" size={24} />
            <span className="text-white text-[1.5em] font-bold">Back-end</span>
            <p className="text-slate-500 text-[1em]">
              Expericne with Nodejs and Express
            </p>
          </div>
          <div className="p-5">
            <BsDatabaseCheck color="white" size={24} />
            <span className="text-white text-[1.5em] font-bold">Database</span>
            <p className="text-slate-500 text-[1em]">
              Expericne with Mysql and MongoDb
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
