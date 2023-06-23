import React, { useState } from "react";
import { Tittle } from "../layout/Tittle";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { Experience } from "./Experience";

export const Resume = () => {
  const[educationData,setEducationData]=useState(true);
  const[skillData,setSkillData]=useState(false);
  const[experienceData,setExperienceData]=useState(false);

  return (
    <section
      id="resume"
      className="w-full h-auto py-20 items-centre border-b-[1px] border-b-gray-600"
    >
      <div className="flex justify-center items-center text-center">
        <Tittle Tittle="" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <li onClick={()=>setEducationData(true) &
           setExperienceData(false) &
            setSkillData(false)
          } 
          className={`${educationData ?"border-designColor rounded-lg":"border-transparent"} resume`}>
            Education
            </li>
          <li onClick={()=>setEducationData(false) &
             setSkillData(true)&
             setExperienceData(false)
             } 
             className={`${skillData ?"border-designColor rounded-lg":"border-transparent"} resume`}>
              Programming Skilled
              </li>
          <li onClick={()=>setEducationData(false) & 
            setSkillData(false) & 
            setExperienceData(true)}
             className={`${experienceData ?"border-designColor rounded-lg":"border-transparent"} resume`}>
              Experience
              </li>
        </ul>
      </div>
      {
        educationData ? <Education/>:""
      }
      {
        skillData ? <Skills/>:""
      }
      {
        experienceData && <Experience/>
      }
      {/* <Education/> */}
      {/* <Skills/> */}
    </section>
  );
};
