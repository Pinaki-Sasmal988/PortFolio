import React from "react";
import { ResumeCard } from "./ResumeCard";
import { motion } from "framer-motion";
export const Education = () => {
  return (
    <motion.div initial={{ opacity:0 }} animate={{ opacity:1, transition:{duration:.8 }}}>
      <div>
        <div className="py-12 form-titleFont ">
          <p className="text-sm text-designColor tracking[4px]">2006-2012</p>
          <h2 className="text-2xl font-bold">Education Quality</h2>
        </div>
        <div className="w-2/2 h-[600px] border-l-[5px] border-l-white border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B Tech In Computer Science"
            subTitle="University of MAKAUT[2020-2023]"
            result="82/100"
            des="Passed From some thing"
          />
          <ResumeCard
            title="Diploma In Computer Science"
            subTitle="University of WBSCVE&SD[2018-2020]"
            result="79/100"
            des="Same here"
          />
          <ResumeCard
            title="Hiegher Secondery In Computer & Application"
            subTitle="University of WBSCVE&SD[2016-2018]"
            result="60/100"
            des="Passed hs .."
          />
        </div>
      </div>
    </motion.div>
  );
};
