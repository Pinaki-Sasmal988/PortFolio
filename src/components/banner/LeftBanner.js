import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaLaravel, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

export const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer.", "React Developer."],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 30,
    delaySpeed: 3000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WelcomeMy Blog</h4>
        <h1 className="text-3xl lgl:text-5xl font-bold text-white">
          Hi, I'm{" "}
          <span className=" text-3xl lgl:text-5xl text-designColor capitalize">Pinaki Samal</span>
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
        Hi, My name is pinaki sasmal.I am full Stack developer.I have
        done Diploma on 2020 from APC ROY polytechnic(Jadavpur) and B.Tech from
        Techno International Batanagar on 2023 in Computer Science Department.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">Find Me</h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href="https://www.facebook.com/pinaki.sasmal.1?mibextid=ZbWKwL" target="_blank"><FaFacebookF /></a>
            </span>
            <span className="bannerIcon">
             <a href="https://linkedin.com/in/pinaki-sasmal-b33a23235" target="_blank"> <FaLinkedinIn /></a>
            </span>
            <span className="bannerIcon">
              <a href="https://github.com/Pinaki-Sasmal988" target="_blank"><FaGithub /></a>
            </span>
          </div>
        </div>
        <div>
            <div className="flex mt-12">
              <span className="cvIcon">
                <h6 className="p-2"><a href="https://drive.google.com/file/d/1E0yQYyZbyxFhRnKzk9xTLzU0N2ed5YrN/view?usp=drive_link" target="_blank">Download CV</a></h6>
              </span>
            </div>
          
        </div>
        </div>
      </div>
  );
};
