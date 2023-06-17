import React from 'react'
import { useTypewriter,Cursor } from "react-simple-typewriter";
import{FaFacebookF,FaLaravel,FaLinkedinIn,FaReact} from 'react-icons/fa';
import{SiTailwindcss,SiFigma,SiNextdotjs} from 'react-icons/si';

export const LeftBanner = () => {
    const [text]=useTypewriter({
        words:["Full Stack Developer.","React Developer."],
        loop:true,
        typeSpeed:30,
        deleteSpeed:30,
        delaySpeed:3000,
    })
  return (
    <div className="w-1/2 flex flex-col gap-20">
         <div className="flex flex-col gap-3">
          <h4 className="text-lg font-normal">WelcomeMy Blog</h4>
          <h1 className="text-4xl font-bold text-white">
            Hi, I'm{" "}
            <span className="text-designColor capitalize">Pinaki Samal</span>
          </h1>
          <h2 className="text-3xl font-bold text-white">
            a <span>{text}</span>
            <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
            />
            
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
            I used animation for whole design jgasjygd jgDSGduygd jhSDYGudyg jgDYGudygD JHGdjygsduygSD JHsdygSDJYGSD Jsdjygasdygs 
          </p>
         </div>
         <div className="flex justify-between items-center"> 
            <div>
            <h2 className="text-base  font-titleFont mb-4">Find Me</h2>
            <div className="flex gap-5">
                <span className="bannerIcon"><FaFacebookF /></span>
                <span className="bannerIcon"><FaLinkedinIn /></span>
                <span className="bannerIcon"><FaReact /></span>
            </div>
            </div>
            <div>
            <h2 className="text-base  font-titleFont mb-5 ml-0">Skilled</h2>
            <div className="flex gap-4">
                <span className="bannerIcon"><SiTailwindcss /></span>
                <span className="bannerIcon"><SiFigma /></span>
                <span className="bannerIcon"><SiNextdotjs /></span>
                <span className="bannerIcon"><FaLaravel /></span>

            </div>
            </div>
         </div>
          
      </div>
  )
}
