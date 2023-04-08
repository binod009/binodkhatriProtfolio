import React from "react";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import { skills } from "../comon/common.js";
import Skill from "../Skill/skill.jsx";
import skill from "../Skill/skill.jsx";

const Skills = () => {
  return (
    <div className="h-screen mt-28">
      {/* <div className="grid md:grid-cols-8 lg:gap-5 place-content-center">
        <div className="lg:col-start-3 lg:col-span-2 flex items-center justify-center bg-[white] bg-no-repeat object-cover px-20 py-10 skillshadow text-white rounded-md">
          <img className="h-8" src="./assets/skill/react.webp" />
        </div>
        <div className="lg:col-start-5 lg:col-span-2 flex items-center justify-center bg-gray-500 bg-no-repeat object-cover px-20 py-10 skillshadow rounded-md">
          <img className="h-8" src="./assets/skill/react.webp" />
        </div>
        <div className="lg:col-start-3 lg:col-span-2 flex justify-items-center bg-cover  bg-no-repeat object-cover bg-[#0f1624] px-24 py-10 skillshadow text-white rounded-md">
          <img className="h-8" src="./assets/skill/react.webp" />
        </div>
        <div className="lg:col-start-5 lg:col-span-2 flex justify-items-center bg-cover  bg-no-repeat object-cover bg-[#0f1624] px-24 py-10 skillshadow text-white rounded-md">
          <img className="h-8" src="./assets/skill/react.webp" />
        </div>
      </div> */}

      <motion.div
        initial={{ opacity: 0.9 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row justify-center items-center max-w-[100%] "
      >
        <div className="grid grid-cols-3 gap-x-5 gap-y-6  lg:gap-x-6">
          {skills?.slice(0, skills.length / 2).map((item) => (
            <Skill directionLeft={true} src={item.img} />
          ))}
          {skills?.slice(skills.length / 2, skills.length).map((item) => (
            <Skill directionLeft={false} src={item.img} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;

// {skills?.slice(0, skills.length / 2).map((item) => (
//   <motion.div
//     initial={{ x: -400, opacity: 0 }}
//     transition={{ duration: 1 }}
//     whileInView={{ opacity: 1, x: 0 }}
//     className="lg:col-start-3 lg:col-span-2 flex items-center justify-center bg-[white] bg-no-repeat object-cover px-20 py-10 skillshadow text-white rounded-md"
//   >
//     <img className="w-[8rem] " src={item.img} />
//   </motion.div>
// ))}
// {skills?.slice(skills.length / 2, skills.length).map((item) => (
//   <motion.div
//     initial={{ x: 400, opacity: 0 }}
//     transition={{ duration: 1 }}
//     whileInView={{ opacity: 1, x: 0 }}
//     className="lg:col-start-3 lg:col-span-2 flex justify-items-center bg-cover  bg-no-repeat object-cover bg-[#0f1624] px-24 py-10 skillshadow text-white rounded-md"
//   >
//     <img className="w-[3rem]" src={item.img} />
//   </motion.div>
// ))}
