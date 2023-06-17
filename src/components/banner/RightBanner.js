import React from 'react'
import { bannerImage } from "../../assets/index";

export const RightBanner = () => {
  return (
    <div className="1/2 flex items-centre justify-center"  >
    <img className="w-[400px] h-[450px] z-10 ml-10" src={bannerImage} alt="bannerImage"></img>
    <div className=" absolute bottom-0 w-[500px] h-[500px] bg-gradient-to-r from-[#le2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
 </div>
  )
}
