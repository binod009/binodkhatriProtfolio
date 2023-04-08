import React from "react";

const Test2 = ({ bgcolor, text }) => {
  return (
    <div className={`bg-${bgcolor} h-screen flex items-center justify-center`}>
      <div className="text-center w-full font-bold text-6xl text-white">
        {text}
      </div>
    </div>
  );
};

export default Test2;
