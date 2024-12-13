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

const Home = () => {
  const word = "SARANKUMAR - FrontEnd Developer -";
  const Letter = word.split("");

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".profile"), {
      max: 15,
      speed: 200,
      reset: true,
      "mouse-event-element": null,
      easing: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
    });
  }, []);

  return (
    <>
      <div className="2xl:container mx-auto relative back">
        <video muted autoPlay loop className="video">
          <source src="https://videos.pexels.com/video-files/2611250/2611250-uhd_2560_1440_30fps.mp4" type="video/mp4"/>
        </video>
        <div className="absolute top-8 left-10">
          <h1 className="text-blue-600 text-[20px] font-[800] font-['Poppins']">
            Welcome to My Portfolio
          </h1>
        </div>
        <div
          data-tilt
          data-tilt-full-page-listening="true"
          className="w-[80%] h-[100vh]  mx-auto flex justify-center items-center relative profile"
        >
          <div className=" w-[350px] h-[350px] ">
            <img
              src={assests.portfolio}
              alt=""
              className="w-[350px] h-[350px] rounded-[50%] shadow-[0px_0px_20px_rgba(0,0,0,0.7)] shadow-blue-800"
            />
          </div>
          <div className="wording">
            {Letter.map((char, index) => {
              return (
                <span
                  key={index}
                  className="text-white letter font-['Poppins']"
                  style={{
                    transform: `rotate(${index * 10.6}deg)`,
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
          <Link to={"/about"}>
            <motion.div
              className="w-[50px] h-[50px] rounded-[50%] border-2 border-blue-600 absolute top-[120px] left-10 flex justify-center items-center nav-items"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <IoIosContact className="text-[30px] text-white" />
              <p className="items ">About</p>
            </motion.div>
          </Link>

          <motion.div
            className="w-[50px] h-[50px] rounded-[50%] border-2 border-blue-600 absolute bottom-[270px] left-[-20px] flex justify-center items-center nav-items "
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <IoSchool className="text-[25px] text-white" />
            <p className="items ">Skills</p>
          </motion.div>
          
          <motion.div
            className="w-[50px] h-[50px] rounded-[50%] border-2 border-blue-600 absolute top-[120px] right-10 flex justify-center items-center nav-items "
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaLaptopCode className="text-[25px] text-white" />
            <p className="items ">Projects</p>
          </motion.div>
          
          <Link
            to={
              "https://drive.google.com/file/d/1eYI8fYdvFvpmk1NBrdu_wk8T4UM84laz/view?usp=drive_link"
            }
          >
            <motion.div
              target="_blank"
              className="w-[50px] h-[50px] rounded-[50%] border-2 border-blue-600 absolute bottom-[270px] right-[-20px] flex justify-center items-center nav-items"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <PiReadCvLogoDuotone className="text-[25px] text-white" />
              <p className="items ">Resume</p>
            </motion.div>
          </Link>
          
          <motion.div
            className="w-[50px] h-[50px] rounded-[50%] border-2 border-blue-600 absolute bottom-0 right-[50%] left-[50%] flex justify-center items-center nav-items"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <FaPhoneAlt className="text-[25px] text-white" />
            <p className="items ">Contact</p>
          </motion.div>
        
        </div>
      </div>
    </>
  );
};

export default Home;
