import React from 'react'
import { bannerImage } from "../../assets/index";

export const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative"  >
    <img className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10" src={bannerImage} alt="bannerImage1"></img>
    <div className=" absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
 </div>
  )
}
