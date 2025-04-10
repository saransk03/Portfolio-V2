import React from "react";
import { delay, motion } from "motion/react";
import { MdDoubleArrow } from "react-icons/md";
import { assests } from "../../public/assets/assests";
import HomeNav from "./HomeNav";

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
      <motion.div
        className="w-[95%] grid grid-cols-1 mx-auto z-10 py-4"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
        initial="hidden"
        animate="show"
      >
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center">
            <h1
              className="text-white text-[70px] lg:text-[100px] font-[700] leading-none"
              data-aos="zoom-out"
              data-aos-easing="ease-in-cubic"
              data-aos-duration="500"
            >
              ABOUT
            </h1>
            <p
              className="text-[#9611f5] text-[14px] lg:text-[20px] font-[700] tracking-[.3em] leading-none"
              data-aos="zoom-out"
              data-aos-easing="ease-in-cubic"
              data-aos-duration="600"
            >
              KNOW MORE ABOUT ME
            </p>
          </div>
        </div>
        <div className='flex flex-wrap font-["Poppins"] text-white text-[15px] leading-7 px-3 py-4 mt-6 overflow-hidden'>
          {text.map((el, i) => {
            return (
              <motion.p
                className="text-white text-[10px] md:text-[15px] leading-5 md:leading-7 md:text-center tracking-tight md:tracking-wide pr-2"
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
        <div className="grid grid-cols-1 md:grid-cols-2 mt-4">
          <div className='flex flex-col justify-center items-start text-white text-[12px] lg:text-[18px] font-["Poppins"] gap-3 lg:gap-8 pl-7'>
            <motion.p
              className="flex justify-center items-center gap-3 tracking-wider"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
            >
              <MdDoubleArrow className="text-[15px] lg:text-[22px] text-[#9611f5] font-extrabold" />
              <span className="font-[700] ">Full Name :</span> SARANKUMAR M
            </motion.p>
            <motion.p
              className="flex justify-center items-center gap-3 tracking-wider"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
            >
              <MdDoubleArrow className="text-[15px] lg:text-[22px] text-[#9611f5] font-extrabold" />
              <span className="font-[700]">Experience :</span> Fresher
            </motion.p>
            <motion.p
              className="flex justify-center items-center gap-3 tracking-wider"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
            >
              <MdDoubleArrow className="text-[15px] lg:text-[22px] text-[#9611f5] font-extrabold" />
              <span className="font-[700] ">City :</span> Chennai, Tamil Nadu
            </motion.p>
          </div>

          <div className='flex flex-col justify-center items-start text-white text-[12px] lg:text-[18px] font-["Poppins"] gap-3 lg:gap-8 pl-7 mt-3 md:mt-0'>
            <motion.p
              className="flex justify-center items-center gap-3 tracking-wider"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.6 }}
            >
              <MdDoubleArrow className="text-[15px] lg:text-[22px] text-[#9611f5] font-extrabold" />
              <span className="font-[700] ">Degree :</span> B. Tech, IT
            </motion.p>
            <motion.p
              className="flex justify-center items-center gap-3 tracking-wider"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.7 }}
            >
              <MdDoubleArrow className="text-[15px] lg:text-[22px] text-[#9611f5] font-extrabold" />
              <span className="font-[700] ">Language :</span> Tamil, English
            </motion.p>
            <motion.p
              className="flex justify-center items-center gap-3 tracking-wider"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.8 }}
            >
              <MdDoubleArrow className="text-[15px] lg:text-[22px] text-[#9611f5] font-extrabold" />
              <span className="font-[700]">Email :</span> saransk753@gmail.com
            </motion.p>
          </div>
        </div>

        <div className="mt-8 px-4">
          <h1 className="font-['Poppins'] font-[700] text-[16px] md:text-[22px] text-[#9611f5]"
          data-aos="fade-right"
          data-aos-easing="ease-out-sine"
          data-aos-duration="500">
            Roles
          </h1>
          <div className="grid grid-cols-1 mx-auto md:grid-cols-2 py-4 gap-3">
            {roles.map((items, i) => {
              return (
                <div
                  key={i}
                  className="w-[90%] md:h-[80px] bg-gray-900 bg-opacity-50 backdrop:blur-md rounded-lg head-icon hover:bg-gray-800 transition-all duration-300 px-8 py-4 flex justify-start items-center gap-4"
                  data-aos="fade"
                  data-aos-easing="ease-out-sine"
                  data-aos-duration="500"
                >
                  <motion.img
                    src={items.image}
                    alt={items.title}
                    className="w-9 md:w-10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.2,
                      ease: "linear",
                      delay: 0.3,
                    }}
                  />
                  <p className="text-white text-[14px] md:text-[16px] font-[600] font-['Poppins'] tracking-wide">
                    {items.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
