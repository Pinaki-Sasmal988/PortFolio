import React from 'react'
import{AiFillAppstore} from "react-icons/ai";
import{FaMobile,FaBars} from "react-icons/fa";
import{SiProgress,SiAntdesign} from "react-icons/si";

import { Tittle } from '../layout/Tittle';
import { Card } from './Card';
export const Features = () => {
  return (
    <section id="features" 
    className='w-full  py-20 items-centre border-b-[1px] border-b-black'>
      <Tittle Tittle="Features" des="What I Do"/>
     {/* <div className='w-1/3 h-70 py-10 rounded-lg shadow-shawOne items-centre bg-gradient-to-r from-bodyColors to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#le2024] transition-colors duration-100 flex bg-red-200'> */}
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-7 xl:gap-15'>
        <Card
          title="Web Development"
          des="Now I am working with web development,And also developed 2-3 projects"
          icon={<FaMobile/>}
        />
        <Card
         title="Web Development"
         des="Now I am working with web development,And also developed 2-3 projects"
         icon={<FaBars/>}
        />
        <Card
          title="Web Development"
          des="Now I am working with web development,And also developed 2-3 projects" 
          icon={<AiFillAppstore/>}
        />
     </div>
   </section>
  )
}
