import React from "react";
import "./home.css"
import { assests } from "../../public/assets/assests";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

const Home = () => {
  const word = "SARANKUMAR - FrontEnd Developer -";
  const Letter = word.split("");

  return (
    <>
      <div className="container mx-auto bg-black relative">
        <div className="absolute top-8 left-10">
          <h1 className="text-blue-600 text-[20px] font-[800]">
            Welcome to My Portfolio
          </h1>
        </div>
        <div className="w-[80%] h-[100vh] mx-auto flex justify-center items-center relative">
          <img
            src={assests.portfolio}
            alt=""
            className="w-[350px] h-[350px] rounded-[50%]"
          />
          <div className="wording">
            {Letter.map((char, index) => {
              return (
                <span
                  key={index}
                  className="text-white letter"
                  style={{
                    transform: `rotate(${index * 10.6}deg)`
                  }}
                >
                  {char}
                </span>
              );
            })}
          </div>
        </div>
        <div className="absolute right-10 top-0 flex flex-col items-center justify-center">
          <div className="bg-blue-600 w-[2px] h-[40vh]"></div>
          <div className="flex flex-col gap-3 ">
            <a href="https://www.linkedin.com/in/sarankumar-m/" target="_blank">
                <div className="w-[40px] h-[40px] flex justify-center items-center rounded-md border-2 border-blue-600 group hover:shadow-[0px_0px_20px_rgba(0,0,0,0.7)] hover:shadow-sky-500 transition-all duration-300">
                  <FaLinkedinIn className="text-[20px] text-white group-hover:text-[22px] transition-all duration-300" />
                </div>
            </a>
            <a href="https://github.com/saransk03" target="_blank">
                <div className="w-[40px] h-[40px] flex justify-center items-center rounded-md border-2 border-blue-600 group hover:shadow-[0px_0px_20px_rgba(0,0,0,0.7)] hover:shadow-sky-500 transition-all duration-300">
                  <FaGithub className="text-[20px] text-white group-hover:text-[22px] transition-all duration-300" />
                </div>
            </a>
            <a href="mailto:saransk753@gmail.com" target="_blank">
                <div className="w-[40px] h-[40px] flex justify-center items-center rounded-md border-2 border-blue-600 group hover:shadow-[0px_0px_20px_rgba(0,0,0,0.7)] hover:shadow-sky-500 transition-all duration-300">
                  <MdAlternateEmail className="text-[20px] text-white group-hover:text-[22px] transition-all duration-300" />
                </div>
            </a>
          </div>
          <div className="bg-blue-600 w-[2px] h-[40vh]"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
