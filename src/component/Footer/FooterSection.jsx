import React from "react";

export const FooterSection = () => {
  return (
    <>
      <div className="max-w-[1020px] mx-auto ">
        <div className=" border-t-2 border-slate-600 py-2">
          <div className="flex gap-32">
            <address className="flex flex-col items-start gap-2">
              <span className="text-gray-500 text-[1.2em] font-thin">Call</span>
              <span className="text-slate-500 text-[1em]">+977 9817062771</span>
            </address>
            <address className="flex flex-col gap-2 items-start">
              <span className="text-slate-500 text-[1.2em] font-thin">
                Email
              </span>
              <span className="text-slate-500 text-[1em]">
                devsbinod@gmail.com
              </span>
            </address>
          </div>
        </div>
      </div>
    </>
  );
};
