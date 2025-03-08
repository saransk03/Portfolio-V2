import React from "react";
import { SiReaddotcv } from "react-icons/si";
import { IoIosContact } from "react-icons/io";
import { RiAppsFill } from "react-icons/ri";
import { PiPhoneIncomingFill } from "react-icons/pi";
import { GoHomeFill } from "react-icons/go";
import { Link } from "react-router-dom";

const HomeNav = () => {
  return (
    <>
      <div
        className="2xl:container hidden md:flex mx-auto my-4"
        data-aos="flip-down"
        data-aos-easing="ease-out-sine"
        data-aos-duration="1000"
      >
        <div className="w-[35%] mx-auto rounded-[150px] border-[3px] z-10 border-[#8600E4] shadow-[0px_0px_20px] shadow-[#8600E4] px-2 py-2">
          <ul className="flex justify-around items-center">
            <Link to={"/about"}>
              <li className="relative items-nav">
                <IoIosContact className=" text-[26px]" />
                <p className="sub-name">About</p>
              </li>
            </Link>
            <Link to={"/resume"}>
              <li className="relative items-nav">
                <SiReaddotcv className="text-[24px]" />
                <p className="sub-name">Resume</p>
              </li>
            </Link>
            <Link to={"/projects"}>
              <li className="relative items-nav">
                <RiAppsFill className="text-[24px]" />
                <p className="sub-name">Projects</p>
              </li>
            </Link>
            <Link to={"/contact"}>
              <li className="relative items-nav">
                <PiPhoneIncomingFill className="text-[24px]" />
                <p className="sub-name">Contact</p>
              </li>
            </Link>
          </ul>
        </div>
      </div>

      
      <div
        className="2xl:container mx-auto fixed"
        data-aos="flip-up"
        data-aos-easing="ease-out-sine"
        data-aos-duration="1200"
      >
        <div className="absolute bottom-6 left-[50%] translate-x-[-50%]">
          <div className="bg-[#8600E4] w-[300px] rounded-[20px_20px_40px_40px] relative h-[42px] px-5 py-1 mx-auto shadow-[0px_0px_20px] shadow-[#8600E4]">
            <ul className="flex justify-around items-center gap-4 absolute top-[-15px] left-[50%] translate-x-[-50%]">
              <Link to={"/"}>
                <li className="relative mob-nav">
                  <GoHomeFill className=" text-[23px]" />
                  <p className="sub-name">Home</p>
                </li>
              </Link>
              <Link to={"/about"}>
                <li className="relative mob-nav">
                  <IoIosContact className=" text-[23px]" />
                  <p className="sub-name">About</p>
                </li>
              </Link>
              <Link to={"/resume"}>
                <li className="relative mob-nav">
                  <SiReaddotcv className="text-[23px]" />
                  <p className="sub-name">Resume</p>
                </li>
              </Link>
              <Link to={"/projects"}>
                <li className="relative mob-nav">
                  <RiAppsFill className="text-[23px]" />
                  <p className="sub-name">Projects</p>
                </li>
              </Link>
              <Link to={"/contact"}>
                <li className="relative mob-nav">
                  <PiPhoneIncomingFill className="text-[24px]" />
                  <p className="sub-name">Contact</p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeNav;
