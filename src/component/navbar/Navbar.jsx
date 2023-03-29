import React from "react";
import { DiCssdeck } from "react-icons/di";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className="sticky top-0 bg-[#0f1624] z-20">
        <div className="lg:max-w-7xl mx-auto flex justify-between items-center p-2">
          <div className="lg:flex items-center justify-self-start cursor-pointer">
            <DiCssdeck color="white" size="1.5rem" />
            <span className="text-white">Portfolio</span>
          </div>
          <div>
            <ul className="text-white text-sm lg:flex items-center gap-[4rem]">
              <li className="cursor-pointer">Project</li>
              <li className="cursor-pointer">Technologies</li>
              <li className="cursor-pointer">About</li>
            </ul>
          </div>
          <div>
            <ul className="text-white lg:inline-flex lg:gap-5">
              <li className="cursor-pointer hover:scale-125 transition ease-in-out">
                <AiFillGithub color="white" size="1.5rem" />
              </li>
              <li className="cursor-pointer hover:scale-125 transition ease-in-out">
                <AiFillLinkedin color="white" size="1.5rem" />
              </li>
              <li className="cursor-pointer hover:scale-125 transition ease-in-out">
                <AiFillInstagram color="white" size="1.5rem" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
