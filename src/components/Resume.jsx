import React from "react";
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
      <div className="w-[100%] grid grid-cols-1 mx-auto z-10 pb-16 md:pb-5">
        <div className="flex flex-col justify-center items-center">
          <h1
            className="text-white text-[55px] lg:text-[80px] font-[700] leading-none"
            data-aos="zoom-out"
            data-aos-easing="ease-in-cubic"
            data-aos-duration="500"
          >
            RESUME
          </h1>
          <p
            className="text-[#9611f5] text-[14px] lg:text-[20px] font-[700] tracking-[.4em] leading-none "
            data-aos="zoom-out"
            data-aos-easing="ease-in-cubic"
            data-aos-duration="600"
          >
            CHECK MY RESUME
          </p>
        </div>
        <div className="w-[90%] mx-auto mt-8 md:mt-4">
          <Link
            to={
              "https://drive.google.com/file/d/1l3YIH6_vYHKZhIgzQDUJSpgsXyYxu_wM/view?usp=sharing"
            }
            target="_blank"
            className="py-4"
          >
            <button
              className="text-white text-[14px] md:text-[17px] font-['Poppins'] font-[600] bg-gray-900 bg-opacity-50 backdrop:blur-md px-3 py-3 rounded-lg btn flex justify-center items-center gap-3"
              data-aos="fade"
              data-aos-easing="ease-in-cubic"
              data-aos-duration="500"
            >
              <FaEye className="text-[17px] md:text-[20px] text-[#9611f5] eye-icon" />{" "}
              View Resume
            </button>
          </Link>
          <div className="mt-8">
            <h1
              className="text-white text-[20px] md:text-[28px] font-['Poppins'] font-[700] flex justify-start items-center gap-3"
              data-aos="fade-right"
              data-aos-easing="ease-out-sine"
              data-aos-duration="500"
            >
              <span
                className="bg-gray-900 bg-opacity-50 backdrop:blur-md p-3 rounded-lg head-icon"
                data-aos="fade"
                data-aos-easing="ease-in-cubic"
                data-aos-duration="500"
              >
                <IoSchool className="text-[#9611f5] text-[17px] md:text-[22px]" />
              </span>{" "}
              SKILLS
            </h1>
            <div
              className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mt-8
             md:mt-4"
            >
              <div
                className="relative bg-gray-900 bg-opacity-50 backdrop:blur-md px-3 py-5 rounded-[20px] flex justify-center items-center gap-3 head-icon"
                data-aos="fade-right"
                data-aos-easing="ease-out-sine"
                data-aos-duration="700"
              >
                <div
                  className="flex justify-center items-center gap-2 absolute right-14 top-[-22px] bg-[#8600E4] font-['Poppins'] rounded-[20px] font-[700] px-4 py-2"
                  data-aos="fade"
                  data-aos-easing="ease-in-cubic"
                  data-aos-duration="700"
                >
                  <FaLaptopCode className="text-[15px] md:text-[19px] text-[#ffffff]" />
                  <p className="text-[#ffffff] text-[13px] md:text-[17px]">
                    LANGUAGE
                  </p>
                </div>
                <div className="flex justify-center items-center flex-wrap gap-14 py-4 px-4 md:py-6">
                  {skills.map((items, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col justify-center items-center gap-1"
                      >
                        <img
                          src={items.image}
                          alt={items.name}
                          className="w-6 md:w-10"
                          data-aos="flip-left"
                          data-aos-easing="ease-in-cubic"
                          data-aos-duration="900"
                        />
                        <p
                          className="font-['Poppins'] font-[500] text-white text-[8px] md:text-[12px]"
                          data-aos="fade"
                          data-aos-easing="ease-in-cubic"
                          data-aos-duration="900"
                        >
                          {items.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div
                className="relative bg-gray-900 bg-opacity-50 backdrop:blur-md px-3 py-5 rounded-[20px] flex justify-center items-center gap-3 head-icon mt-4 md:mt-0"
                data-aos="fade-left"
                data-aos-easing="ease-out-sine"
                data-aos-duration="700"
              >
                <div
                  className="flex justify-center items-center gap-2 absolute left-14 top-[-22px] bg-[#8600E4] font-['Poppins'] rounded-[20px] font-[700] px-4 py-2"
                  data-aos="fade"
                  data-aos-easing="ease-in-cubic"
                  data-aos-duration="700"
                >
                  <CgToolbox className="text-[15px] md:text-[19px] text-white" />
                  <p className="text-white text-[13px] md:text-[17px]">
                    SOFTWARE
                  </p>
                </div>
                <div className="flex justify-center items-center flex-wrap gap-14 md:py-6 px-4 py-4">
                  {tools.map((items, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col justify-center items-center gap-1"
                      >
                        <img
                          src={items.image}
                          alt={items.name}
                          className="w-6 md:w-10"
                          data-aos="flip-left"
                          data-aos-easing="ease-in-cubic"
                          data-aos-duration="900"
                        />
                        <p
                          className="font-['Poppins'] font-[500] text-white text-[8px] md:text-[12px]"
                          data-aos="fade"
                          data-aos-easing="ease-in-cubic"
                          data-aos-duration="900"
                        >
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
            <h1
              className="text-white text-[18px] md:text-[28px] font-['Poppins'] font-[700] flex justify-start items-center gap-3"
              data-aos="fade-right"
              data-aos-easing="ease-out-sine"
              data-aos-duration="900"
            >
              <span className="bg-gray-900 bg-opacity-50 backdrop:blur-md p-3 rounded-lg head-icon">
                <LiaSchoolSolid className="text-[#9611f5] text-[18px] md:text-[22px]" />
              </span>{" "}
              EDUCATION
            </h1>

            <div className="bg-gray-900 relative bg-opacity-50 backdrop:blur-md px-3 py-10 rounded-[20px] mt-4 flex flex-col justify-center gap-8 head-icon">
              <div className="font-['Poppins'] text-white px-14 md:px-24 flex md:flex-row flex-col md:justify-between gap-2 md:gap-20 relative">
                <div className="flex flex-col items-start gap-1.5">
                  <h1 className="font-[700] text-[14px] md:text-[22px] md:leading-6 leading-4"
                  data-aos="fade"
                  data-aos-easing="ease-out-sine"
                  data-aos-duration="500">
                    B.TECH INFORMATION TECHNOLOGY
                  </h1>
                  <p className="text-[8px] md:text-[12px] font-[500]"
                  data-aos="fade"
                  data-aos-easing="ease-out-sine"
                  data-aos-duration="600">
                    The Kavery Engineering College, Salem
                  </p>
                  <p className="text-[8px] md:text-[12px] font-[500] text-[#9611f5]"
                  data-aos="fade"
                  data-aos-easing="ease-out-sine"
                  data-aos-duration="700">
                    <span className="font-[700]">CGPA</span> 8.1/10{" "}
                  </p>
                </div>
                <div>
                  <p className="text-[8px] md:text-[14px] flex justify-center items-center font-[500] bg-gray-900 rounded-[5px] px-2 md:px-3 py-1"
                  data-aos="fade"
                  data-aos-easing="ease-out-sine"
                  data-aos-duration="800">
                    2020 - 2024
                  </p>
                </div>
                <div className="absolute left-[15px] md:left-[34px] w-5 h-5 rounded-[50%] shadow-[#8600E4] shadow-[0px_0px_10px] bg-[#9611f5] z-20"
                data-aos="fade"
                data-aos-easing="ease-out-sine"
                data-aos-duration="450"></div>
              </div>

              <div className="font-['Poppins'] text-white px-14 md:px-24 flex md:flex-row flex-col md:justify-between gap-2 md:gap-20 relative">
                <div className="flex flex-col items-start gap-1.5">
                  <h1 className="font-[700] text-[14px] md:text-[22px] md:leading-6 leading-6"
                  data-aos="fade"
                  data-aos-easing="ease-out-sine"
                  data-aos-duration="500">
                    HSC (+2)
                  </h1>
                  <p className="text-[8px] md:text-[12px] font-[500]"
                  data-aos="fade"
                  data-aos-easing="ease-out-sine"
                  data-aos-duration="600">
                    Bharathi Matric Higher Secondary School, Kallakurichi
                  </p>
                  <p className="text-[8px] md:text-[12px] font-[500] text-[#9611f5]"
                  data-aos="fade"
                  data-aos-easing="ease-out-sine"
                  data-aos-duration="700">
                    <span className="font-[700]">PERCENTAGE</span> 75%{" "}
                  </p>
                </div>
                <div>
                  <p className="text-[8px] md:text-[14px] font-[500] flex justify-center items-center bg-gray-900 rounded-[5px] px-3 py-1"
                  data-aos="fade"
                  data-aos-easing="ease-out-sine"
                  data-aos-duration="800">
                    2019 - 2020
                  </p>
                </div>
                <div className="absolute left-[15px] md:left-[34px] w-5 h-5 rounded-[50%] shadow-[#8600E4] shadow-[0px_0px_10px] bg-[#9611f5] z-20"
                data-aos="fade"
                data-aos-easing="ease-out-sine"
                data-aos-duration="500"></div>
              </div>

              <div className="font-['Poppins'] text-white px-14 md:px-24 flex  md:flex-row flex-col md:justify-between gap-2 md:gap-20 relative">
                <div className="flex flex-col items-start gap-1.5">
                  <h1 className="font-[700] text-[14px] md:text-[22px] md:leading-6 leading-6"
                  data-aos="fade"
                  data-aos-easing="ease-out-sine"
                  data-aos-duration="500">
                    SSLC
                  </h1>
                  <p className="text-[8px] md:text-[12px] font-[500]"
                  data-aos="fade"
                  data-aos-easing="ease-out-sine"
                  data-aos-duration="600">
                    Bharathi Matric Higher Secondary School, Kallakurichi
                  </p>
                  <p className="text-[8px] md:text-[12px] font-[500] text-[#9611f5]"
                  data-aos="fade"
                  data-aos-easing="ease-out-sine"
                  data-aos-duration="700">
                    <span className="font-[700]">PERCENTAGE</span> 93%{" "}
                  </p>
                </div>
                <div>
                  <p className="text-[8px] md:text-[14px] flex justify-center items-center font-[500] bg-gray-900 rounded-[5px] px-3 py-1"
                  data-aos="fade"
                  data-aos-easing="ease-out-sine"
                  data-aos-duration="800">
                    2017 - 2018
                  </p>
                </div>
                <div className="absolute left-[15px] md:left-[34px] w-5 h-5 rounded-[50%] shadow-[#8600E4] shadow-[0px_0px_10px] bg-[#9611f5] z-20"
                data-aos="fade"
                data-aos-easing="ease-out-sine"
                data-aos-duration="550"></div>
              </div>

              <div className="absolute left-[36px] md:left-14 bg-white w-[1px] h-[75%] z-10"
              data-aos="fade"
              data-aos-easing="ease-out-sine"
              data-aos-duration="400"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
