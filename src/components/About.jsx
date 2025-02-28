import React from "react";
import Navbar from "./Navbar";
import { delay, motion } from "motion/react";
import { MdDoubleArrow } from "react-icons/md";
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
  const text =
    "         I am a passionate Frontend Developer with a strong foundation in building responsive and interactive web applications. Recently graduated with a B.Tech in Information Technology, I am eager to apply my skills in HTML, CSS, JavaScript, and modern frameworks like React. As a fresher, I am enthusiastic about learning and contributing to innovative projects.".split(
      " "
    );

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
        <motion.div
          className="w-[95%] grid grid-cols-1 mx-auto z-10"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
          initial="hidden"
          animate="show"
        >
          <div className="flex flex-col items-center justify-center">
            <motion.div
              className="flex flex-col justify-center items-center"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: "easeIn",
                type: "spring",
                stiffness: 200,
                damping: 8,
                delay: 0.2,
              }}
            >
              <h1 className="text-white text-[100px] font-[700] leading-none">
                ABOUT
              </h1>
              <motion.p
                className="text-[#9611f5] text-[20px] font-[700] tracking-[.3em] leading-none"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeIn", delay: 0.3 }}
              >
                KNOW MORE ABOUT ME
              </motion.p>
            </motion.div>
          </div>
          <div className='flex flex-wrap font-["Poppins"] text-white text-[15px] leading-7 px-3 py-4 mt-6 overflow-hidden'>
            {text.map((el, i) => {
              return (
                <motion.p
                  className="text-white text-[15px] leading-7  text-center tracking-wide pr-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: i / 70,
                  }}
                  key={i}
                >
                  {el}
                  {""}
                </motion.p>
              );
            })}
          </div>
          <div className="grid grid-cols-2 mt-4">
            <div className='flex flex-col justify-center items-start text-white text-[18px] font-["Poppins"] gap-8 pl-7'>
              <motion.p
                className="flex justify-center items-center gap-3 tracking-wider"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
              >
                <MdDoubleArrow className="text-[22px] text-[#9611f5] font-extrabold" />
                <span className="font-[700] ">Full Name :</span> SARANKUMAR M
              </motion.p>
              <motion.p
                className="flex justify-center items-center gap-3 tracking-wider"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
              >
                <MdDoubleArrow className="text-[22px] text-[#9611f5] font-extrabold" />
                <span className="font-[700]">Experience :</span> Fresher
              </motion.p>
              <motion.p
                className="flex justify-center items-center gap-3 tracking-wider"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
              >
                <MdDoubleArrow className="text-[22px] text-[#9611f5] font-extrabold" />
                <span className="font-[700] ">City :</span> Chennai, Tamil Nadu
              </motion.p>
            </div>

            <div className='flex flex-col justify-center items-start text-white text-[18px] font-["Poppins"] gap-8 pl-7'>
              <motion.p
                className="flex justify-center items-center gap-3 tracking-wider"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.6 }}
              >
                <MdDoubleArrow className="text-[22px] text-[#9611f5] font-extrabold" />
                <span className="font-[700] ">Degree :</span> B. Tech, IT
              </motion.p>
              <motion.p
                className="flex justify-center items-center gap-3 tracking-wider"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.7 }}
              >
                <MdDoubleArrow className="text-[22px] text-[#9611f5] font-extrabold" />
                <span className="font-[700] ">Language :</span> Tamil, English
              </motion.p>
              <motion.p
                className="flex justify-center items-center gap-3 tracking-wider"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.8 }}
              >
                <MdDoubleArrow className="text-[22px] text-[#9611f5] font-extrabold" />
                <span className="font-[700]">Email :</span> saransk753@gmail.com
              </motion.p>
            </div>
          </div>

          <div className="mt-8 px-4">
            <motion.h1
              className="font-['Poppins'] font-[700] text-[22px] text-[#9611f5]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
            >
              Roles
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 py-4 gap-3">
              {roles.map((items, i) => {
                return (
                  <motion.div
                    key={i}
                    className="w-[90%] h-[80px] bg-gray-900 bg-opacity-50 backdrop:blur-md rounded-lg head-icon hover:bg-gray-800 transition-all duration-300 px-8 py-4 flex justify-start items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: "linear",
                      delay: 0.2,
                    }}
                  >
                    <motion.img src={items.image} alt={items.title} className="w-10" 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.2,
                      ease: "linear",
                      delay: 0.3,
                    }}/>
                    <motion.p className="text-white text-[16px] font-[600] font-['Poppins'] tracking-wide"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.2,
                      ease: "linear",
                      delay: 0.3,
                    }}>
                      {items.title}
                    </motion.p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
