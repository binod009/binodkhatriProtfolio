import React from "react";
import { AnimatePresence, motion, stagger } from "framer-motion";
const skill = ({ directionLeft, src }) => {
  return (
    <div>
      <motion.img
        initial={{
          x: directionLeft ? 150 : -150,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={src}
        className="shadow-md border border-slate-500 rounded-full h-16 w-16 lg:w-24 lg:h-24 object-scale-down transition duration-300 ease-in-out"
      />
    </div>
  );
};

export default skill;
