import React from "react";
import Navbar from "./Navbar";
import { MdDoubleArrow } from "react-icons/md";
import { TbDeviceImacCode } from "react-icons/tb";
import { assests } from "../../public/assets/assests";

const roles = [
  {
    title: "FrontEnd Development",
    image: assests.frontend,
  },
  {
    title: "Web Development",
    image: assests.webdevelop,
  },
  {
    title: "Web Design",
    image: assests.webdesign,
  },
  {
    title: "Graphic Design",
    image: assests.graphicdesign,
  },
];

const About = () => {
  return (
    <>
      <Navbar />
      <div className="w-[calc(100%-300px)] h-screen mx-auto py-4 pt-8 ml-[300px] relative back">
        <video muted autoPlay loop className="video">
          <source
            src="https://videos.pexels.com/video-files/2611250/2611250-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="w-[95%] grid grid-cols-1 mx-auto z-10">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-white text-[100px] font-[700] leading-none">
                ABOUT
              </h1>
              <p className="text-[#b7667e] text-[20px] font-[700] tracking-[.3em] leading-none ">
                KNOW MORE ABOUT ME
              </p>
            </div>
          </div>
          <div className='flex flex-col items-start font-["Poppins"] px-3 py-4 mt-6'>
            <p className="text-white text-[15px] leading-7 indent-4">
              I am a passionate{" "}
              <span className="font-[700]">Frontend Developer</span> with a
              strong foundation in building responsive and interactive web
              applications. Recently graduated with a{" "}
              <span className="font-[700]">
                B.Tech in Information Technology
              </span>
              , I am eager to apply my skills in HTML, CSS, JavaScript, and
              modern frameworks like React. As a fresher, I am enthusiastic
              about learning and contributing to innovative projects.
            </p>
          </div>
          <div className="grid grid-cols-2 mt-4">
            <div className='flex flex-col justify-center items-start text-white text-[18px] font-["Poppins"] gap-8 pl-7'>
              <p className="flex justify-center items-center gap-3 tracking-wider">
                <MdDoubleArrow className="text-[22px] text-[#b7667e] font-extrabold" />
                <span className="font-[700] ">Full Name :</span> SARANKUMAR M
              </p>
              <p className="flex justify-center items-center gap-3 tracking-wider">
                <MdDoubleArrow className="text-[22px] text-[#b7667e] font-extrabold" />
                <span className="font-[700]">Experience :</span> Fresher
              </p>
              <p className="flex justify-center items-center gap-3 tracking-wider">
                <MdDoubleArrow className="text-[22px] text-[#b7667e] font-extrabold" />
                <span className="font-[700] ">City :</span> Chennai, Tamil Nadu
              </p>
            </div>

            <div className='flex flex-col justify-center items-start text-white text-[18px] font-["Poppins"] gap-8 pl-7'>
              <p className="flex justify-center items-center gap-3 tracking-wider">
                <MdDoubleArrow className="text-[22px] text-[#b7667e] font-extrabold" />
                <span className="font-[700] ">Degree :</span> B. Tech, IT
              </p>
              <p className="flex justify-center items-center gap-3 tracking-wider">
                <MdDoubleArrow className="text-[22px] text-[#b7667e] font-extrabold" />
                <span className="font-[700] ">Language :</span> Tamil, English
              </p>
              <p className="flex justify-center items-center gap-3 tracking-wider">
                <MdDoubleArrow className="text-[22px] text-[#b7667e] font-extrabold" />
                <span className="font-[700]">Email :</span>{" "}
                saransk3103@gmail.com
              </p>
            </div>
          </div>

          <div className="mt-8 px-4">
            <h1 className="font-['Poppins'] font-[700] text-[22px] text-[#b7667e]">
              Roles
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 py-4 gap-3">
              {roles.map((items, i) => {
                return (
                  <div
                    key={i}
                    className="w-[90%] h-[80px] bg-gray-900 bg-opacity-50 backdrop:blur-md rounded-lg head-icon hover:bg-gray-800 transition-all duration-300 px-8 py-4 flex justify-start items-center gap-4"
                  >
                    <img src={items.image} alt={items.title} className="w-10" />
                    <p className="text-white text-[16px] font-[600] font-['Poppins'] tracking-wide">
                      {items.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
