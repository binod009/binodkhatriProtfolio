import React from "react";
import { DiCssdeck } from "react-icons/di";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      {/* <div className="bg-slate-500"> */}
      <div className="lg:max-w-7xl mx-auto flex justify-around p-2">
        <div className="lg:flex items-center justify-self-start">
          <DiCssdeck color="white" size="1.5rem" />
          <span className="text-white">Portfolio</span>
        </div>
        <div>
          <ul className="text-white text-sm lg:flex items-center gap-[4rem]">
            <li>Project</li>
            <li>Technologies</li>
            <li>About</li>
          </ul>
        </div>
        <div>
          <ul className="text-white lg:inline-flex lg:gap-5">
            <li>
              <AiFillGithub color="white" size="1.5rem" />
            </li>
            <li>
              <AiFillLinkedin color="white" size="1.5rem" />
            </li>
            <li>
              <AiFillInstagram color="white" size="1.5rem" />
            </li>
          </ul>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Navbar;
