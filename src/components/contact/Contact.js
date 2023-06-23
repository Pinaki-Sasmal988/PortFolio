import React, { useState } from "react";
import { Tittle } from "../layout/Tittle";
import { ContactLeft } from "./ContactLeft";
import { ContactRight } from "./ContactRight";

export const Contact = () => {
  

  // const emailValidation=()=>{
  //   return String(email).toLocaleLowerCase().match(/\w+([-]?\w+)@\w+([-]?\w+)*(\.lw{2,3})+$);
  // }
 
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-gray-600"
    >
      <div className="flex justify-center items-center text-center">
        <Tittle Tittle="" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <ContactRight/>
        </div>
      </div>
    </section>
  );
};
