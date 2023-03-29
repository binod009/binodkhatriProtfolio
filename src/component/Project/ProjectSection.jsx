import React from "react";

const ProjectSection = () => {
  return (
    <>
      <div className="text-white max-w-[1020px] mx-auto">
        <span className="text-white font-bold text-5xl">Projects</span>

        <div className="grid grid-cols-2 items-center px-3 gap-4 mt-8 p-8">
          <div className="text-center bg-[#0e1623] rounded boxshadow">
            <div className="flex h-64">
              <img
                src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/30/posts/33893/final_image/app.png"
                className="w-full object-fill"
                alt="weatherapp"
              />
            </div>
            <div className="mt-5">
              <p className="text-center text-[1.8rem] text-slate-500 font-normal">
                Weather App
              </p>
              <div className="mx-auto max-w-[80px] h-[2px] bg-white rounded-full mt-5 mb-5"></div>
              <p className="px-5 text-justify mb-2">
                Introducing my latest project - A weather app that provides
                users with up-to-date weather details for the next 5 days! With
                a simple and user-friendly interface, this app allows users to
                easily search for weather information in any city they desire.
                Stay informed and prepared for any weather event with my weather
                app.
              </p>
              <span className="text-center text-[1.2rem] text-slate-500 font-normal border-b-2 border-white">
                Stack
              </span>
              <div className="flex items-center justify-evenly py-5">
                <span className="text-slate-400">Reactjs</span>
              </div>
            </div>
          </div>

          <div className="text-center bg-[#0e1623] rounded boxshadow ">
            <div className="flex h-64">
              <img
                className="w-full object-fill"
                src="https://www.smartvault.com/wp-content/uploads/2020/11/AdobeStock_243232821.jpeg"
                alt="weatherapp-image"
              />
            </div>
            <div className="mt-5">
              <p className="text-center text-[1.8rem] text-slate-500 font-normal">
                Document Management System
              </p>
              <div className="mx-auto max-w-[80px] h-[2px] bg-white rounded-full mt-5 mb-5"></div>
              <p className="px-5 text-justify mb-2">
                A web app designed for efficient user management! With ReactJS
                and MUI components, this app allows admins to easily create and
                manage user accounts, as well as upload and retrieve important
                documents and images. Say goodbye to tedious user management and
                hello to streamlined efficiency with my web app.
              </p>
              <span className="text-center text-[1.2rem] text-slate-500 font-normal border-b-2 border-white">
                Stack
              </span>
              <div className="lg:flex lg:flex-row flex-col items-center justify-evenly py-5">
                <span className="text-slate-400">Reactjs</span>
                <span className="text-slate-400">MUI Component</span>
                <span className="text-slate-400">Redux</span>
                <span className="text-slate-400">Firebase</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;
