import React, { useEffect } from "react";
import "./home.css";
import { motion } from "motion/react";
import { assests } from "../../public/assets/assests";
import { FaLinkedinIn, FaLaptopCode, FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { IoSchool } from "react-icons/io5";
import { PiReadCvLogoDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import HomeNav from "../components/HomeNav";
import Hyperspeed from "../blocks/Backgrounds/Hyperspeed/Hyperspeed";

const Home = () => {
  return (
    <>
      <HomeNav />
      <Hyperspeed
        effectOptions={{
          onSpeedUp: () => {},

          onSlowDown: () => {},

          distortion: "turbulentDistortion",

          length: 500,

          roadWidth: 10,

          islandWidth: 2,

          lanesPerRoad: 4,

          fov: 90,

          fovSpeedUp: 150,

          speedUp: 2,

          carLightsFade: 0.4,

          totalSideLightSticks: 20,

          lightPairsPerRoadWay: 40,

          shoulderLinesWidthPercentage: 0.05,

          brokenLinesWidthPercentage: 0.1,

          brokenLinesLengthPercentage: 0.5,

          lightStickWidth: [0.12, 0.5],

          lightStickHeight: [1.3, 1.7],

          movingAwaySpeed: [60, 80],

          movingCloserSpeed: [-120, -160],

          carLightsLength: [400 * 0.03, 400 * 0.2],

          carLightsRadius: [0.05, 0.14],

          carWidthPercentage: [0.3, 0.5],

          carShiftX: [-0.8, 0.8],

          carFloorSeparation: [0, 5],

          colors: {
            roadColor: 0x080808,

            islandColor: 0x0a0a0a,

            background: 0x000000,

            shoulderLines: 0xffffff,

            brokenLines: 0xffffff,

            leftCars: [0xd856bf, 0x6750a2, 0xc247ac],

            rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],

            sticks: 0x03b3c3,
          },
        }}
      />
      <div className="2xl:container mx-auto relative back">
        <div className="w-[90%] mx-auto relative mt-[45px] ">
          <img
            src={assests.home}
            alt="boy"
            className="absolute w-[450px] home-img"
          />
          <div className="w-[80%] mx-auto flex flex-col justify-center leading-none">
            <p className="text-white text-[20px] ml-[-30px] font-['Poppins'] leading-none">
              Hello, I'm Sarankumar
            </p>
           <div className="flex flex-col justify-center items-center">
              <h1 className="text-white text-center text-[240px] home-head mt-3  leading-[1]">
                Frontend
              </h1>
              <p className="text-white text-center text-[240px] home-text leading-[0.9]">
                Developer
              </p>
           </div>
            <p className="text-white text-[20px] text-right pr-8 font-['Poppins']">
              Based in India
            </p>
          </div>
        </div>
                
        <div className="home-links flex flex-col items-center justify-center gap-8">

          <div className="flex flex-col gap-3 ">
            <a href="https://www.linkedin.com/in/sarankumar-m/" target="_blank">
              <div className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] border-2 border-[#8600E4] group hover:shadow-[0px_0px_20px_rgba(0,0,0,0.7)] hover:shadow-[#8600E4] transition-all duration-300">
                <FaLinkedinIn className="text-[20px] text-white group-hover:text-[22px] transition-all duration-300" />
              </div>
            </a>
            <a href="https://github.com/saransk03" target="_blank">
              <div className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] border-2 border-[#8600E4] group hover:shadow-[0px_0px_20px_rgba(0,0,0,0.7)] hover:shadow-[#8600E4] transition-all duration-300">
                <FaGithub className="text-[20px] text-white group-hover:text-[22px] transition-all duration-300" />
              </div>
            </a>
            <a href="mailto:saransk753@gmail.com" target="_blank">
              <div className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] border-2 border-[#8600E4] group hover:shadow-[0px_0px_20px_rgba(0,0,0,0.7)] hover:shadow-[#8600E4] transition-all duration-300">
                <MdAlternateEmail className="text-[20px] text-white group-hover:text-[22px] transition-all duration-300" />
              </div>
            </a>
          </div>

        </div> 
       
      </div>
    </>
  );
};

export default Home;
