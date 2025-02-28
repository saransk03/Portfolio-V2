import React from "react";
import { delay, motion } from "motion/react";
import Navbar from "./Navbar";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoSchool } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa6";
import { LiaSchoolSolid } from "react-icons/lia";
import { CgToolbox } from "react-icons/cg";
import { assests } from "../../public/assets/assests";

const skills = [
  {
    image: assests.html,
    name: "HTML",
  },
  {
    image: assests.css,
    name: "CSS",
  },
  {
    image: assests.js,
    name: "JAVASCRIPT",
  },
  {
    image: assests.react_js,
    name: "REACT JS",
  },
  {
    image: assests.tailwind,
    name: "TAILWIND CSS",
  },
  {
    image: assests.bootstrap,
    name: "BOOTSTRAP",
  },
  {
    image: assests.redux,
    name: "REDUX",
  },
];

const tools = [
  {
    image: assests.vscode,
    name: "VS CODE",
  },
  {
    image: assests.github,
    name: "GIT & GITHUB",
  },
  {
    image: assests.firebase,
    name: "FIREBASE",
  },
  {
    image: assests.figma,
    name: "FIGMA",
  },
  {
    image: assests.ps,
    name: "PHOTOSHOP",
  },
  {
    image: assests.ai,
    name: "ILLUSTRATOR",
  },
  {
    image: assests.canva,
    name: "CANVA",
  },
];

const Resume = () => {
  return (
    <>
      <Navbar />
      <div className="w-[calc(100%-300px)] h-auto mx-auto py-4 pt-8 ml-[300px] overflow-y-auto relative back">
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
          <motion.div className="flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: "easeIn",
                type: "spring",
                stiffness: 400,
                damping: 10,
                delay: 0.2,
              }}>
            <h1
              className="text-white text-[80px] font-[700] leading-none"
            >
              RESUME
            </h1>
            <motion.p
              className="text-[#9611f5] text-[20px] font-[700] tracking-[.4em] leading-none "
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeIn", delay: 0.3 }}
            >
              CHECK MY RESUME
            </motion.p>
          </motion.div>
          <div className="w-[90%] mx-auto mt-4">
            <Link
              to={
                "https://drive.google.com/file/d/1eYI8fYdvFvpmk1NBrdu_wk8T4UM84laz/view?usp=drive_link"
              }
              target="_blank"
              className="py-4"
            >
              <button className="text-white text-[17px] font-['Poppins'] font-[600] bg-gray-900 bg-opacity-50 backdrop:blur-md px-3 py-3 rounded-lg btn flex justify-center items-center gap-3">
                <FaEye className="text-[20px] text-[#9611f5] eye-icon" /> View
                Resume
              </button>
            </Link>
            <div className="mt-8">
              <h1 className="text-white text-[28px] font-['Poppins'] font-[700] flex justify-start items-center gap-3">
                <span className="bg-gray-900 bg-opacity-50 backdrop:blur-md p-3 rounded-lg head-icon">
                  <IoSchool className="text-[#9611f5] text-[22px]" />
                </span>{" "}
                SKILLS
              </h1>
              <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                <div className="relative bg-gray-900 bg-opacity-50 backdrop:blur-md px-3 py-5 rounded-[20px] flex justify-center items-center gap-3 head-icon">
                  <div className="flex justify-center items-center gap-2 absolute right-14 top-[-22px] bg-[#8600E4] font-['Poppins'] rounded-[20px] font-[700] px-4 py-2">
                    <FaLaptopCode className="text-[19px] text-[#ffffff]" />
                    <p className="text-[#ffffff]">LANGUAGE</p>
                  </div>
                  <div className="flex justify-center items-center flex-wrap gap-14 py-6">
                    {skills.map((items, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-col justify-center items-center gap-1"
                        >
                          <img
                            src={items.image}
                            alt={items.name}
                            className="w-10"
                          />
                          <p className="font-['Poppins'] font-[500] text-white text-[12px]">
                            {items.name}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="relative bg-gray-900 bg-opacity-50 backdrop:blur-md px-3 py-5 rounded-[20px] flex justify-center items-center gap-3 head-icon">
                  <div className="flex justify-center items-center gap-2 absolute left-14 top-[-22px] bg-[#8600E4] font-['Poppins'] rounded-[20px] font-[700] px-4 py-2">
                    <CgToolbox className="text-[19px] text-white" />
                    <p className="text-white">SOFTWARE</p>
                  </div>
                  <div className="flex justify-center items-center flex-wrap gap-14 py-6">
                    {tools.map((items, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-col justify-center items-center gap-1"
                        >
                          <img
                            src={items.image}
                            alt={items.name}
                            className="w-10"
                          />
                          <p className="font-['Poppins'] font-[500] text-white text-[12px]">
                            {items.name}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h1 className="text-white text-[28px] font-['Poppins'] font-[700] flex justify-start items-center gap-3">
                <span className="bg-gray-900 bg-opacity-50 backdrop:blur-md p-3 rounded-lg head-icon">
                  <LiaSchoolSolid className="text-[#9611f5] text-[22px]" />
                </span>{" "}
                EDUCATION
              </h1>

              <div className="bg-gray-900 relative bg-opacity-50 backdrop:blur-md px-3 py-10 rounded-[20px] mt-4 flex flex-col justify-center gap-8 head-icon">
                <div className="font-['Poppins'] text-white px-24 flex justify-between gap-20 relative">
                  <div className="flex flex-col items-start gap-1.5">
                    <h1 className="font-[700] text-[22px] leading-6">
                      B.TECH INFORMATION TECHNOLOGY
                    </h1>
                    <p className="text-[12px] font-[500]">
                      The Kavery Engineering College, Salem
                    </p>
                    <p className="text-[12px] font-[500] text-[#9611f5]">
                      <span className="font-[700]">CGPA</span> 8.1/10{" "}
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] font-[500] bg-gray-900 rounded-[5px] px-3 py-1">
                      2020 - 2024
                    </p>
                  </div>
                  <div className="absolute left-[34px] w-5 h-5 rounded-[50%] shadow-[#8600E4] shadow-[0px_0px_10px] bg-[#9611f5] z-20"></div>
                </div>

                <div className="font-['Poppins'] text-white px-24 flex justify-between gap-20 relative">
                  <div className="flex flex-col items-start gap-1.5">
                    <h1 className="font-[700] text-[22px] leading-6">
                      HSC (+2)
                    </h1>
                    <p className="text-[12px] font-[500]">
                      Bharathi Matric Higher Secondary School, Kallakurichi
                    </p>
                    <p className="text-[12px] font-[500] text-[#9611f5]">
                      <span className="font-[700]">PERCENTAGE</span> 75%{" "}
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] font-[500] bg-gray-900 rounded-[5px] px-3 py-1">
                      2019 - 2020
                    </p>
                  </div>
                  <div className="absolute left-[34px] w-5 h-5 rounded-[50%] shadow-[#8600E4] shadow-[0px_0px_10px] bg-[#9611f5] z-20"></div>
                </div>

                <div className="font-['Poppins'] text-white px-24 flex justify-between items-start gap-20 relative">
                  <div className="flex flex-col items-start gap-1.5">
                    <h1 className="font-[700] text-[22px] leading-6">SSLC</h1>
                    <p className="text-[12px] font-[500]">
                      Bharathi Matric Higher Secondary School, Kallakurichi
                    </p>
                    <p className="text-[12px] font-[500] text-[#9611f5]">
                      <span className="font-[700]">PERCENTAGE</span> 93%{" "}
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] font-[500] bg-gray-900 rounded-[5px] px-3 py-1">
                      2017 - 2018
                    </p>
                  </div>
                  <div className="absolute left-[34px] w-5 h-5 rounded-[50%] shadow-[#8600E4] shadow-[0px_0px_10px] bg-[#9611f5] z-20"></div>
                </div>

                <div className="absolute left-14 bg-white w-[1px] h-[75%] z-10"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Resume;
