import React, { useEffect } from "react";
import "./home.css";
import VanillaTilt from "vanilla-tilt";
import { motion } from "motion/react";
import { assests } from "../../public/assets/assests";
import { FaLinkedinIn, FaLaptopCode, FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { IoSchool } from "react-icons/io5";
import { PiReadCvLogoDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import SplashCursor from "../blocks/TailwindAnimations/SplashCursor/SplashCursor";
import HomeNav from "../components/HomeNav";

const Home = () => {



  return (
    <>
    <SplashCursor/>
    <HomeNav/>
      <div className="2xl:container mx-auto relative back">
        
        <div
          className="w-[80%] h-[100vh]  mx-auto flex justify-center items-center relative profile"
        >
          
        </div>
{/*         
        <div className="absolute right-10 top-0 flex flex-col items-center justify-center">

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

        </div> */}
       
      </div>
    </>
  );
};

export default Home;
