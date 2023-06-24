import React from "react";
import { ResumeCard } from "./ResumeCard";
import { motion } from "framer-motion";
export const Education = () => {
  return (
    <motion.div initial={{ opacity:0 }} animate={{ opacity:1, transition:{duration:.8 }}}>
      <div>
        <div className=" py-6 lgl:py-12 form-titleFont ">
          <h2 className="text-2xl md:text-3xl font-bold">Education Quality</h2>
        </div>
        <div className=" mt-6 lgl:mt-7 w-2/2 h-auto border-l-[5px] border-l-white border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B Tech In Computer Science"
            subTitle="University of MAKAUT[2020-2023]"
            result="80%"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Diploma In Computer Science"
            subTitle="University of WBSCVE&SD[2018-2020]"
            result="79%"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Hiegher Secondery In Computer & Application"
            subTitle="Board of WBSCVE&SD[2016-2018]"
            result="79%"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
           title="Secondery Education"
           subTitle="Board of WBBSE[2016]"
           result="61%"
           des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
    </motion.div>
  );
};
