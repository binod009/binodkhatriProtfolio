import React from "react";

const Skills = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-10 ">
      <div className="text-5xl text-white ">
        <h2>My Skills</h2>
      </div>
      <div className="flex justify-between px-10 py-5">
        <div className="flex items-center justify-center bg-[#0f1624] bg-no-repeat object-cover px-20 py-10 skillshadow text-white rounded-md">
          <img className="w-[8rem] " src="./assets/skill/react.webp" />
        </div>
        <div className="flex items-center justify-center  bg-no-repeat object-cover bg-[#0f1624] px-24 py-10 skillshadow  text-white rounded-md">
          <img
            className="w-[3rem]"
            src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-512x307-1v56l8ed.png"
          />
        </div>
        <div className="flex justify-items-center bg-cover  bg-no-repeat object-cover bg-[#0f1624] px-24 py-10 skillshadow text-white rounded-md">
          <img
            className="w-[3rem]"
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          />
        </div>
        <div className="bg-[#0f1624] bg-no-repeat bg-cover object-cover px-24 py-10 skillshadow text-white rounded-md">
          <img
            className="w-[5rem]"
            src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
