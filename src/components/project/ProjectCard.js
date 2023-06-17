import React from "react";
import { BsGithub } from "react-icons/bs";
export const ProjectCard = ({ tittle, des, img }) => {
  return (
    <div
      className="w-full h-auto px-12 py-10 rounded-lg 
     shadow-shadowOne items-centre flex-col bg-gradient-to-r
      from-bodyColors to-[#2b2a2a] group hover:bg-gradient-to-b 
      hover:from-black hover:to-[#le2024] transition-colors duration-100 bg-gray-800
      flex group"
      >
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-40 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={img}
        />
      </div>
      <div className="w-full mt-4 flex flex-col gap-2">
        <div>
        <div className="flex items-center justify-between">
          <h3 className="text-base text-designColor font-normal">{tittle}</h3>
          <div className="flex ml-10">
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
              {<BsGithub/>}
            </span>
          </div>
        </div>
        <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300"> {des}</p>

        </div>
      </div>
    </div>
  );
};
