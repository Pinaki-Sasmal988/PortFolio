import React from "react";
import { useState } from "react";
import { useRef ,useEffect} from "react";
import emailjs from "@emailjs/browser";
export const ContactRight = () => {
  const form = useRef();
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccessMsg] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setSuccessMsg("")
    },7000,);
   });
  const handleValue = (e) => {
    e.preventDefault("");
    emailjs
      .sendForm(
        "service_q0yukat",
        "template_kw0264q",
        form.current,
        "6epP80RFvSys3PO1Z"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("done");
        },
        (error) => {
          console.log(error.text);
        }
      );
    if (userName === "") {
      setErrMsg("User name is required");
    } else if (userPhone === "") {
      setErrMsg("Phone number is required");
    } else if (userEmail === "") {
      setErrMsg("Enter valid email");
    } else if (subject === "") {
      setErrMsg("Gives subject");
    } else if (message === "") {
      setErrMsg("Enter Message");
    } else {
      setSuccessMsg(
        `Thank You Dear ${userName},Your Message Sent Successfully`
      );
     
      setErrMsg("");
      setUserName("");
      setUserPhone("");
      setUserEmail("");
      setSubject("");
      setMessage("");
      console.log(userName, userPhone, userEmail, subject, message);
    }
  };
  return (
    <div className=" w-full lgl:w-[62%] h-auto flex flex-col p-4 lgl:p-6 mt-2 lgl:mt-0 justify-between bg-[#1a1b1b]">
      <div className="mt-0 ml-2 mr-2">
        <form
          ref={form}
          className="w-full  flex flex-col gap-3 lgl:gap-6 py-2 lgl:py-4"
        >
          <div className="w-full flex flex-col lgl:flex-row gap-4">
            <div className="w-full lgl:w-1/2 flex flex-col gap-4 ">
              <p className="text-sm text-gray-400 tracking-wide">Your Name</p>
              <input
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                name="user_name"
                value={userName}
                className="inputText"
                type="text"
              />
            </div>
            <div className="w-full lgl:w-1/2 flex flex-col gap-4 ">
              <p className="text-sm text-gray-400 tracking-wide">
                Phone Number
              </p>
              <input
                onChange={(e) => {
                  setUserPhone(e.target.value);
                }}
                name="user_phone"
                value={userPhone}
                className="inputText"
                type="text"
              />
            </div>
          </div>
          <div>
            <div className="w-full flex flex-col gap-4 ">
              <p className="text-sm text-gray-400 tracking-wide">Email</p>
              <input
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
                name="user_email"
                value={userEmail}
                className="inputText"
                type="email"
              />
            </div>
          </div>
          <div>
            <div className="w-full flex flex-col gap-4 ">
              <p className="text-sm text-gray-400 tracking-wide">Subject</p>
              <input
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                name="user_subject"
                value={subject}
                className="inputText"
                type="text"
              />
            </div>
          </div>
          <div>
            <div className="w-full flex flex-col gap-4 ">
              <p className="text-sm text-gray-400 tracking-wide">Message</p>
              <textarea
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                name="message"
                value={message}
                className="bg-[#0a0a0a] "
                cols="20"
                rows="4"
                type="email"
              ></textarea>
            </div>
          </div>
          <div>
            <button
              onClick={handleValue}
              className="w-full h-10 bg-[#0a0a0a] rounded-lg  text-base text-gray-400 tracking-wide hover:text-white duration-300  hover:border-[1px] hover:border-designColor border-transparent"
            >
              Submit
            </button>
          </div>
          {errMsg && (
            <p
              className=" bg-gradient-to-r from-[#le2024] 
            to-[#23272b] shadow-shawOne text-center text-orange-500 text-base 
            tracking-wide animate-bounce"
            >
              {errMsg}
            </p>
          )}
          {success && (
            <p
              className="bg-gradient-to-r from-[#le2024] 
            to-[#23272b] shadow-shawOne text-center text-green-500 text-base 
            tracking-wide animate-bounce"
            >
              {success}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
