import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="max-w-[1020px] mx-auto">
        <div className="pt-[58px] pr-[0px] pb-[16px] space-y-4">
          <h1 className="text-5xl font-bold text-white">
            Welcome To <br /> My Personal Portfolio
          </h1>
          <div className="max-w-[520px] text-slate-600">
            <p className="text-md text-slate-500 leading-relaxed ">
              The purpose of JavaScript Mastery is to help aspiring and
              established developers to take their development skills to the
              next level and build awesome apps.
            </p>
          </div>
          <button className="bg-gradient-to-r from-[#8e62ce] via-[#6f73d0] to-[#20a4c8] border-none text-white text-[1em] font-light rounded-3xl px-6 py-1">
            Learn More
          </button>
        </div>
        <div className="max-w-[80px] h-[0.3rem] rounded-2xl bg-gradient-to-r from-[#8e62ce] via-[#6f73d0] to-[#20a4c8] mt-8 mb-8"></div>
      </div>
    </>
  );
};

export default HeroSection;
