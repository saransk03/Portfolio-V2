import React, { useEffect } from "react";
import "./home.css";
import VanillaTilt from "vanilla-tilt";
import { assests } from "../../public/assets/assests";
import { FaLinkedinIn,FaLaptopCode, FaPhoneAlt  } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { IoSchool } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";

const Home = () => {
  const word = "SARANKUMAR - FrontEnd Developer -";
  const Letter = word.split("");

  useEffect(()=>{
    VanillaTilt.init(document.querySelectorAll(".profile"), {
      max: 25,
      speed: 200,
      reset: true,
      "mouse-event-element":  null,
      easing: "cubic-bezier(0.455, 0.03, 0.515, 0.955)"
    });
  },[])

  return (
    <>
      <div className="container  mx-auto relative">
        <video muted autoPlay loop className="video">
          <source src="https://videos.pexels.com/video-files/3129902/3129902-uhd_3840_2160_25fps.mp4" type="video/mp4"/>
        </video>
        <div className="absolute top-8 left-10">
          <h1 className="text-blue-600 text-[20px] font-[800]">
            Welcome to My Portfolio
          </h1>
        </div>
        <div data-tilt data-tilt-full-page-listening="true" className="w-[80%] h-[100vh]  mx-auto flex justify-center items-center relative profile">
            <div className=" w-[350px] h-[350px] ">
              <img
                src={assests.portfolio}
                alt=""
                className="w-[350px] h-[350px] rounded-[50%]"
              />
            </div>
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
        <div className="w-[700px] h-[700px] rounded-[50%]  absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
          <div className="w-[50px] h-[50px] rounded-[50%] border-2 border-blue-600 absolute top-[120px] left-10 flex justify-center items-center">
           <IoIosContact className="text-[30px] text-white"/>
          </div>
          <div className="w-[50px] h-[50px] rounded-[50%] border-2 border-blue-600 absolute top-[320px] left-[-25px] flex justify-center items-center">
          <IoSchool className="text-[25px] text-white"/>
          </div>
          <div className="w-[50px] h-[50px] rounded-[50%] border-2 border-blue-600 absolute bottom-[120px] left-10 flex justify-center items-center">
          <GiSkills className="text-[25px] text-white"/>
          </div>
          <div className="w-[50px] h-[50px] rounded-[50%] border-2 border-blue-600 absolute top-[120px] right-10 flex justify-center items-center">
          <FaLaptopCode className="text-[25px] text-white"/>
          </div>
          <div className="w-[50px] h-[50px] rounded-[50%] border-2 border-blue-600 absolute top-[320px] right-[-25px] flex justify-center items-center">
          <IoIosContact className="text-[25px] text-white"/>
          </div>
          <div className="w-[50px] h-[50px] rounded-[50%] border-2 border-blue-600 absolute bottom-[120px] right-10 flex justify-center items-center">
          <FaPhoneAlt className="text-[25px] text-white"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
