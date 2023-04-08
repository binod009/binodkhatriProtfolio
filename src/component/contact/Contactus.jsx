import React from "react";
import { AiFillFacebook, AiOutlineMail } from "react-icons/ai";

const Contactus = () => {
  return (
    <div className="h-screen bg-[#242424] flex items-center justify-center">
      <div className="max-w-[1240px] lg:max-h-[80rem] mx-auto lg:mt-40 p-5 py-20">
        <span className="text-white font-bold text-5xl">Get In Touch</span>
        <div className="p-4 ">
          <div className="md:max-w-md py-15 bg-gray-800 p-5 rounded-md skillshadow">
            <div className=" lg:text-2xl block font-semibold ">
              Binod khatri
            </div>
            <p className="font-thin">Front-end Developer---Reactjs</p>
            <div className="mt-3">
              I am available for work. Contact Me through Email.
            </div>
            <span className="flex items-center gap-1 ">
              <AiOutlineMail size={20} />
              <address>
                <strong>devsbinod@gmail.com</strong>
              </address>
            </span>
            <div className="block items-center mt-2 space-y-2">
              <text className="font-thin">FIND WITH ME</text>
              <div className="flex gap-2">
                <div className="bg-[#0f1624] p-3 rounded-md object-cover">
                  <a href="">
                    <AiFillFacebook color="blue" size={28} />
                  </a>
                </div>
                <div className="bg-[#0f1624] p-3 rounded-md">
                  <a href="">
                    <AiFillFacebook color="blue" size={28} />
                  </a>
                </div>
                <div className="bg-[#0f1624] p-3 rounded-md">
                  <a href="">
                    <AiFillFacebook color="blue" size={28} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
