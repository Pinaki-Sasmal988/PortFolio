import React from "react";
import { motion } from "framer-motion";
export const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8 } }}
        >
      <div>
        <div className="py-12 form-titleFont ">
          <h2 className="text-2xl font-bold">Development Skills</h2>
        </div>
        <div className="mt-5 w-full flex flex-col gap-5">
          <div className="overflow-x-hidden">
            <p>PHP(Laravel)</p>
            <motion.span 
             initial={{ x:"-100%",opacity:0 }}
             animate={{ x:0,opacity:1 }}
             transition={{ duration:.5, delay:.5 }}

            
            className="w-full h-2 bgOpacity inline-flex mt-2 rounded-md">
             <span className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"></span>
             <span className=" -mt-5">85%</span>
            </motion.span>
          </div>
          <div className="overflow-x-hidden">
            <p>Java</p>
            <motion.span 
              initial={{ x:"-100%",opacity:0 }}
              animate={{ x:0,opacity:1 }}
              transition={{ duration:.5, delay:.5 }}
            
            className="w-full h-2 bgOpacity inline-flex mt-2 rounded-md">
             <span className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"></span>
             <span className=" -mt-5">70%</span>
            </motion.span>
          </div>
          <div className="overflow-x-hidden">
            <p>React</p>
            <motion.span 
                initial={{ x:"-100%",opacity:0 }}
                animate={{ x:0,opacity:1 }}
                transition={{ duration:.5, delay:.5 }}
            
            className="w-full h-2 bgOpacity inline-flex mt-2 rounded-md">
             <span className="w-[65%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"></span>
             <span className=" -mt-5">65%</span>
            </motion.span>
          </div>
          <div className="overflow-x-hidden">
            <p>Angular</p>
            <motion.span 
             initial={{ x:"-100%",opacity:0 }}
             animate={{ x:0,opacity:1 }}
             transition={{ duration:.5, delay:.5 }}
            
            className="w-full h-2 bgOpacity inline-flex mt-2 rounded-md">
             <span className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"></span>
             <span className=" -mt-5">60%</span>
            </motion.span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
