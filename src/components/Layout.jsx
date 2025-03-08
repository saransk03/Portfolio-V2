import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import HomeNav from "./HomeNav";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="fixed bottom-0 z-30 left-[50%] flex md:hidden translate-x-[-50%]">
        <HomeNav/>
      </div>
      <div className="w-[90%] md:w-[calc(100%-300px)] h-screen mx-auto py-4 mb-[220px] md:mb-0 lg:pt-8 md:ml-[300px] relative back">
        <video muted autoPlay loop className="video">
          <source
            src="https://videos.pexels.com/video-files/2611250/2611250-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
