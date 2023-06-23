import React, { useState } from "react";
 import { Link } from "react-scroll";
// import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { logo } from "../../assets/index";
import { navLinksdata } from "../constent/index";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="-full h-24 sticky top-0 z-50 bg-bodyColors mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className="text-lg w-15 h-20 rounded-full  inline-flex  items-center text-gray-400  cursor-pointer">
        <img className="w-16  h-13  ml-5 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer" src={logo} alt="logo"></img>
        <p className=" text-3xl font-titleFont text-gray ml-4">Portfo<span className="text-red-600">lio</span></p>
      </div>
      <div>
        <ul className=" hidden mdl:inline-flex items-center gap-6 lgl:gap-10 lg:gap-8 text-lightText mt-8">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className=" text-xl mdl:hidden  w-10 h-10 inline-flex items-center justify-center rounded-full 
            hover:text-designColor duration-300 
             cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 -left-2 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div className="w-35 h-15 inline-flex  items-center">
                <img  className=" w-17 h-12 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer" 
                src={logo} />
                <p className="ml-4">Portfo<span className="text-red-600">lio</span></p>
                </div>
                <div>
                <p className="text-sm text-gray-400 mt-2">
                  Hi, My name is pinaki sasmal.I am full Stack developer.I have
                  done Diploma on 2020 from APC ROY polytechnic(Jadavpur) and B.Tech from
                  Techno International Batanagar on 2023 in Computer Science Department.
                </p>
              </div>
               
              
              <ul className="flex flex-col gap-4">
                {
                  navLinksdata.map((item)=>(
                    <li key={item._id} className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
                      <Link 
                         activeClass="active"
                         to={item.link}
                         spy={true}
                         smooth={true}
                         offset={-70}
                         duration={500}
                      >
                      {item.title}
                      </Link>
                      
                      </li>
                  ))
                }
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <span className="bannerIcon">
                     <FaFacebookF />
                  </span>
                  <span className="bannerIcon">
                    <a href="https://www.youtube.com/watch?v=zo0sb-nNp4s&t=2230s" target="_blank">
                    <FaGithub />
                    </a>
                  </span>
                  <span className="bannerIcon">
                    <FaLinkedinIn />
                  </span>
                </div>
              </div>
            </div>

            <span
              onClick={() => setShowMenu(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-500 text-2xl cursor-pointer"
            >
              <MdClose />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
