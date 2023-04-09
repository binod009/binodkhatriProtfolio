import React, { useState } from "react";
import { DiCssdeck } from "react-icons/di";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineMenu,
  AiOutlineClose,
  AiFillFacebook,
} from "react-icons/ai";
import { Drawer } from "antd";
import { FaFacebook } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="sticky py-3 top-0 bg-[#0f1624] z-30 lg:py-2">
        <div className="lg:max-w-7xl mx-auto flex justify-between items-center p-2">
          <div className="flex items-center justify-self-start cursor-pointer">
            <DiCssdeck color="white" size="1.5rem" />
            <span className="text-white">Portfolio</span>
          </div>
          <div className="hidden lg:block">
            <ul className="text-white text-sm flex jusitfy-between gap-3 items-center lg:gap-[4rem]">
              <a href="#project">
                <li className="cursor-pointer">Project</li>
              </a>
              <a href="#aboutme">
                <li className="cursor-pointer">About me</li>
              </a>
              <a href="#contact">
                <li className="cursor-pointer">Contact</li>
              </a>
            </ul>
          </div>
          <div className="hidden lg:block">
            <ul className="text-white inline-flex gap-2 lg:gap-5">
              <a href="https://www.linkedin.com/in/binodkhatri00">
                <li className="cursor-pointer hover:scale-125 transition ease-in-out">
                  <AiFillLinkedin color="white" size="1.5rem" />
                </li>
              </a>
              <a href="https://www.facebook.com/binodkhatri00">
                <li className="cursor-pointer hover:scale-125 transition ease-in-out">
                  <AiFillFacebook color="white" size="1.5rem" />
                </li>
              </a>
            </ul>
          </div>
          <div className="lg:hidden">
            <AiOutlineMenu size={30} color="#d6e1e1" onClick={openDrawer} />
          </div>
        </div>
      </div>
      <Drawer
        title={
          <div className="flex justify-between items-center">
            <div className="">
              {/* <img src="" alt="logo-binod" /> */}
              <h2 className="text-2xl text-white">Binod Khatri</h2>
            </div>
            <div className="w-[1.8rem] h-[1.8rem] rounded-full flex items-center justify-center bg-white shadow-2xl">
              <AiOutlineClose color="#0f1624" size={24} onClick={openDrawer} />
            </div>
          </div>
        }
        placement={"left"}
        closable={false}
        width={280}
        style={{
          backgroundColor: "#0f1624",
          color: "white",
        }}
        onClose={openDrawer}
        open={isOpen}
        destroyOnClose
      >
        <div className="divide-y divide-blue-500">
          <ul className="list-none space-y-7 mb-6">
            <a href="#project">
              <li>PROJECT</li>
            </a>
            <a href="#aboutme">
              <li>ABOUT ME</li>
            </a>
            <a href="#contact">
              <li>CONTACT</li>
            </a>
          </ul>
        </div>
        <hr />
        <div className="mt-5 py-5">FIND ME WITH</div>
        <div className="flex items-center gap-4">
          <div className="bg-slate-800 p-3 rounded-lg shadow-lg">
            <a
              href="https://www.facebook.com/binodkhatri00"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook size={28} color="white" />
            </a>
          </div>
          <div className="bg-slate-800 p-3 rounded-lg shadow-lg">
            <a
              href="https://github.com/binod009"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin size={28} color="white" />
            </a>
          </div>
          <div className="bg-slate-800 p-3 rounded-lg shadow-lg">
            <a
              href="https://www.linkedin.com/in/binodkhatri00"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub size={28} color="white" />
            </a>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
