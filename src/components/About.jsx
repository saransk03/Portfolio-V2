import React from "react";
import Navbar from "./Navbar";
import { MdDoubleArrow } from "react-icons/md";
import { TbDeviceImacCode } from "react-icons/tb";
import { assests } from "../../public/assets/assests";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="w-[calc(100%-300px)] h-screen mx-auto bg-black py-4 pt-8 ml-[300px]">
        <div className="w-[95%] grid grid-cols-1 mx-auto">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-white text-[100px] font-[700] leading-none">
                ABOUT
              </h1>
              <p className="text-[#b7667e] text-[20px] font-[700] tracking-widest leading-none ">
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
                <MdDoubleArrow className="text-[22px] text-[#b7667e] font-extrabold"/>
                <span className="font-[700] ">Full Name :</span> SARANKUMAR M
              </p>
              <p className="flex justify-center items-center gap-3 tracking-wider"> 
                <MdDoubleArrow className="text-[22px] text-[#b7667e] font-extrabold"/>
                <span className="font-[700]">Role :</span> Front-End Developer
              </p>
              <p className="flex justify-center items-center gap-3 tracking-wider"> 
                <MdDoubleArrow className="text-[22px] text-[#b7667e] font-extrabold"/>
                <span className="font-[700] ">City :</span>  Chennai, Tamil Nadu
              </p>
            </div>

            <div className='flex flex-col justify-center items-start text-white text-[18px] font-["Poppins"] gap-8 pl-7'>
              <p className="flex justify-center items-center gap-3 tracking-wider"> 
                <MdDoubleArrow className="text-[22px] text-[#b7667e] font-extrabold"/>
                <span className="font-[700] ">Degree :</span> B. Tech, IT
              </p>
              <p className="flex justify-center items-center gap-3 tracking-wider"> 
                <MdDoubleArrow className="text-[22px] text-[#b7667e] font-extrabold"/>
                <span className="font-[700] ">Phone No :</span> +91 9514053103
              </p>
              <p className="flex justify-center items-center gap-3 tracking-wider"> 
                <MdDoubleArrow className="text-[22px] text-[#b7667e] font-extrabold"/>
                <span className="font-[700]">Email :</span>  saransk3103@gmail.com
              </p>
            </div>
          </div>

          <div className="mt-8 px-4">
            <h1 className="font-['Poppins'] font-[700] text-[22px] text-[#b7667e]">Roles</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 py-4 gap-3">
                <div className="w-[90%] h-[80px] rounded-xl bg-gray-900 hover:bg-gray-800 transition-all duration-300 px-8 py-4 flex justify-start items-center gap-4">
                    <img src={assests.frontend} alt="frontend" className="w-11"/>
                    <p className="text-white text-[16px] font-[600] font-['Poppins'] tracking-wide">FrontEnd Development</p>
                </div>
                
                <div className="w-[90%] h-[80px] rounded-xl bg-gray-900 hover:bg-gray-800 transition-all duration-300 px-8 py-4 flex justify-start items-center gap-4">
                    <img src={assests.webdevelop} alt="frontend" className="w-10"/>
                    <p className="text-white text-[16px] font-[600] font-['Poppins'] tracking-wide">Web Development</p>
                </div>
                
                <div className="w-[90%] h-[80px] rounded-xl bg-gray-900 hover:bg-gray-800 transition-all duration-300 px-8 py-4 flex justify-start items-center gap-4">
                    <img src={assests.webdesign} alt="frontend" className="w-9"/>
                    <p className="text-white text-[16px] font-[600] font-['Poppins'] tracking-wide">Web Design</p>
                </div>

                <div className="w-[90%] h-[80px] rounded-xl bg-gray-900 hover:bg-gray-800 transition-all duration-300 px-8 py-4 flex justify-start items-center gap-4">
                    <img src={assests.graphicdesign} alt="frontend" className="w-10"/>
                    <p className="text-white text-[16px] font-[600] font-['Poppins'] tracking-wide">Graphic Design</p>
                </div>
                
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
