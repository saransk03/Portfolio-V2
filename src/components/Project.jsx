import React from "react";
import Navbar from "./Navbar";
import { motion } from "motion/react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { assests } from "../../public/assets/assests";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "YOUTUBE CLONE WEBSITE",
    image: assests.youtube,
    tech_1: "React Js",
    tech_2: "Tailwind CSS",
    link: "https://youtube-clone-frontend-three.vercel.app/",
  },
  {
    title: "WATCH STORE WEBSITE",
    image: assests.watchweb,
    tech_1: "React Js",
    tech_2: "Tailwind CSS",
    link: "https://watch-ecom-website-sk.vercel.app/",
  },
  {
    title: "WEATHER WEBSITE",
    image: assests.weather,
    tech_1: "Javascript",
    tech_2: "CSS",
    link: "https://saransk03.github.io/Weather-Web/",
  },
  {
    title: "FOOD RESTAURANT WEBSITE",
    image: assests.foodspot,
    tech_1: "Javascript",
    tech_2: "Tailwind CSS",
    link: "https://foodspot-restaurant-web.vercel.app/",
  },
  {
    title: "PORTFOLIO VERSION 1",
    image: assests.portfoliov1,
    tech_1: "Javascript",
    tech_2: "Tailwind CSS",
    link: "https://sk-portfolio-03.web.app/",
  },
  {
    title: "KARUPATTI COFFEE WEBSITE",
    image: assests.karupatti,
    tech_1: "Javascript",
    tech_2: "Tailwind CSS",
    link: "https://karupatti-coffee.web.app/",
  },
  {
    title: "FRESH VEG ONLINE WEBDESIGN",
    image: assests.freshveg,
    tech_1: "HTML",
    tech_2: "Bootstrap",
    link: "https://fresh-veg-online.web.app/",
  },
];

const Project = () => {
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
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-white text-[80px] font-[700] leading-none">
              PROJECTS
            </h1>
            <p className="text-[#b7667e] text-[20px] font-[700] tracking-[.16em] leading-none ">
              EXPLORE MY PROJECT WORKS
            </p>
          </div>
          <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-14 mt-5">
            {projects.map((items, i) => {
              return (
                <div className="flex flex-col gap-1.5 project-box">
                  <div className="w-[340px] h-[230px] overflow-hidden rounded-[20px] bg-gray-800 flex justify-center items-center relative ">
                    <img
                      src={items.image}
                      alt={items.title}
                      className="w-[340px] h-[230px] object-cover"
                    />
                    <div className="tech-box">
                      <div className="px-3 py-1 font-['Poppins'] rounded-[20px] font-[600] text-[8px] bg-[#b7667e]">
                        {items.tech_1}
                      </div>
                      <div className="px-3 py-1 font-['Poppins'] rounded-[20px] font-[600] text-[8px] bg-sky-500">
                        {items.tech_2}
                      </div>
                    </div>
                    <div className="link-box">
                      <Link to={items.link} target="_blank">
                        <motion.div
                          className="w-[50px] h-[50px] rounded-[50%] flex justify-center items-center bg-green-700"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <HiOutlineExternalLink className="text-[26px] text-white" />
                        </motion.div>
                      </Link>
                    </div>
                  </div>
                  <div className="font-['Poppins'] text-white flex flex-col justify-center items-start pl-4 project-text">
                    <h2 className="text-[16px] font-[700] project-text-h1">
                      {items.title}
                    </h2>
                    <p className="text-[10px] font-[400]"></p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
