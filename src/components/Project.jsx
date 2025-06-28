import React from "react";
import Navbar from "./Navbar";
import { motion } from "motion/react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { assests } from "../../public/assets/assests";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "SK DSIGN WEBSITE",
    image: assests.wpweb,
    tech_1: "Wordpress",
    tech_2: "Elementor",
    link: "http://skdsign.netlify.app",
  },
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
      <motion.div
        className="w-[95%] grid grid-cols-1 mx-auto z-10 pb-[72px]"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
        initial="hidden"
        animate="show"
      >
        <div className="flex flex-col justify-center items-center">
          <h1
            className="text-white text-[50px] lg:text-[80px] font-[700] leading-none"
            data-aos="zoom-out"
            data-aos-easing="ease-in-cubic"
            data-aos-duration="500"
          >
            PROJECTS
          </h1>
          <p
            className="text-[#9611f5] text-[13px] lg:text-[20px] font-[700] tracking-[.16em] leading-none"
            data-aos="zoom-out"
            data-aos-easing="ease-in-cubic"
            data-aos-duration="600"
          >
            EXPLORE MY PROJECT WORKS
          </p>
        </div>
        <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-8 md:gap-14 mt-5">
          {projects.map((items, i) => {
            return (
              <div key={i} className="flex flex-col justify-center items-center  gap-1.5 project-box">
                <div className="w-[280px] h-[200px] lg:w-[340px] lg:h-[230px] overflow-hidden rounded-[20px] bg-gray-800 flex justify-center items-center relative "
                data-aos="flip-right"
                data-aos-easing="ease-out-sine"
                data-aos-duration="700">
                  <img
                    src={items.image}
                    alt={items.title}
                    className="w-[280px] h-[200px] lg:w-[340px] lg:h-[230px] object-cover"
                  />
                  <div className="tech-box">
                    <div className="px-3 py-1 font-['Poppins'] text-white rounded-[20px] font-[600] text-[8px] bg-[#8600E4]">
                      {items.tech_1}
                    </div>
                    <div className="px-3 py-1 font-['Poppins'] rounded-[20px] font-[600] text-[8px] bg-sky-500">
                      {items.tech_2}
                    </div>
                  </div>
                  <div className="link-box">
                    <Link to={items.link} target="_blank">
                      <motion.div
                        className="w-[40px] h-[40px] rounded-[50%] flex justify-center items-center bg-green-700"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <HiOutlineExternalLink className="text-[20px] text-white" />
                      </motion.div>
                    </Link>
                  </div>
                </div>
                <div className="font-['Poppins'] text-white flex flex-col justify-center items-start pl-4 project-text">
                  <h2 className="text-[12px] lg:text-[16px] font-[700] project-text-h1"
                  data-aos="fade-down"
                  data-aos-easing="ease-out-sine"
                  data-aos-duration="400">
                    {items.title}
                  </h2>
                  <p className="text-[10px] font-[400]"></p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Project;
