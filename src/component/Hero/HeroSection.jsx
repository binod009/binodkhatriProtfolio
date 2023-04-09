import React from "react";
import BackgroundAnimation from "../backgroundanimation/BackgroundAnimation";

const HeroSection = () => {
  return (
    <>
      <div className=" flex max-w-[1240px] mx-auto h-full lg:py-16">
        <div className="grid items-start sm:grid-col-1 grid-col-1 md:grid-cols-2 md:items-center lg:w-full ">
          <div className="flex justify-center gap-5 py-10  flex-col md:flex-col md:justify-around lg:justify-between lg:gap-5 md:items-start md:h-[100%]">
            <div className="lg:flex py-3 lg:flex-col lg:justify-around lg:gap-1">
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-gray-600 lg:mb-5">
                Hi, I'm <br />
              </h1>
              <h2 className="text-4xl md:text-4xl lg:text-5xl text-white leading-normal lg:mb-2">
                Binod Khatri ,
                <br />
              </h2>
              <h3 className="text-4xl md:text-4xl lg:text-6xl leading-tight bg-gradient font-bold bg-clip-text inline-block text-transparent animate-bounce transition ease-in-out mt-5">
                A Front-End Developer
              </h3>
            </div>
            {/* bg-gradient-to-r from-[#0fffff] from-15% via-[#00e4ff] via-35% via-[#1f96ff] via-40% via-[#7345ff] via-45% to-[#3482ff] to-100% inline-block text-transparent bg-clip-text */}
            <div className="max-w-[400px] lg:max-w-[520px] text-slate-600 py-4">
              <p className="md:text-[18px] lg:text-lg text-slate-500 leading-7">
                "I craft beautiful and intuitive websites that exceed client
                expectations. With a focus on responsive design and user
                experience, I bring clients' visions to life through modern and
                clean web design."
              </p>
            </div>

            <div>
              <button className="bg-gradient-to-r from-[#8e62ce] via-[#6f73d0] to-[#20a4c8] border-none text-white text-[1em] font-light rounded-3xl px-6 py-2">
                Learn More
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <BackgroundAnimation />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
