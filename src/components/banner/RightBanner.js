import React from 'react'
import { bannerImage } from "../../assets/index";

export const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 rounded-full flex justify-center items-center relative"  >
    <img className="w-[350px] h-[280px] lgl:w-[450px] lgl:h-[350px]  z-10" src={bannerImage} alt="bannerImage1"></img>
 </div>
  )
}
