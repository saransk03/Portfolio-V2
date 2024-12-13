import React from "react";
import Navbar from "./Navbar";

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
          <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5">
                <div className="w-[450px] h-[250px] rounded-t-[20px] bg-gray-800 flex justify-center items-center">
                    
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
