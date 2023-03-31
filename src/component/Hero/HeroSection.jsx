import React from "react";
import BackgroundAnimation from "../backgroundanimation/BackgroundAnimation";

const HeroSection = () => {
  return (
    <>
      <div className="flex max-w-[1240px] mx-auto lg:h-50">
        <div className="grid grid-cols-2 items-center justify-between">
          <div className="flex lg:flex-col lg:justify-evenly lg:items-start h-[80%]">
            <div>
              <h1 className="lg:text-7xl font-bold text-white">
                Hi I'm <br />
                <span className="text-7xl text-blue-300">Binod Khatri</span>
              </h1>
            </div>

            <div className="max-w-[520px] text-slate-600 ">
              <p className="text-lg text-slate-500 leading-8 ">
                The purpose of JavaScript Mastery is to help aspiring and
                established developers to take their development skills to the
                next level and build awesome apps.
              </p>
            </div>
            <div>
              <button className="bg-gradient-to-r from-[#8e62ce] via-[#6f73d0] to-[#20a4c8] border-none text-white text-[1em] font-light rounded-3xl px-6 py-2">
                Learn More
              </button>
            </div>
          </div>
          <div className="">
            <BackgroundAnimation />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
