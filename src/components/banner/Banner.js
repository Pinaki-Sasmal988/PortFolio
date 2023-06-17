import React from "react";
import { LeftBanner } from "./LeftBanner";
import { RightBanner } from "./RightBanner";

// import { useTypewriter,Cursor } from "react-simple-typewriter";
// import{FaFacebookF,FaLinkedinIn,FaReact} from 'react-icons/fa';
import { bannerImage } from "../../assets/index";
export const Banner = () => {

    // const [text]=useTypewriter({
    //     words:["Full Stack Developer.","React Developer."],
    //     loop:true,
    //     typeSpeed:30,
    //     deleteSpeed:30,
    //     delaySpeed:3000,
    // })
  return (
    <section
      id="home"
      className="w-full py-10 pb-20 flex items-centre border-b-[1px] font-titleFont border-b-black "
    >
      <LeftBanner/>
      <RightBanner/>
    </section>
  )
}