import React from "react";
import './navbar.css'
import { Link } from "react-router-dom";
import { assests } from "../../public/assets/assests";

const Navbar = () => {
  return (
    <>
      <div className="w-[300px] h-full absolute top-0 left-0 mx-auto navbar">
        <div className="w-[90%] h-full grid grid-cols-1 mx-auto py-3">
        <div className="flex flex-col justify-evenly items-center">
          <div className="flex flex-col justify-center items-center">
            <img
              src={assests.portfolio}
              alt="image"
              className="w-[200px] py-3 image"
            />
            <Link to={"/"}>
              <h1 className="text-white font-['Poppins'] text-xl font-[700] tracking-wider">SARANKUMAR</h1>
            </Link>
          </div>
          <div>
            <ul className="flex flex-col justify-center items-center text-white text-[16px] font-[500] font-['Poppins']">
              <li className="py-3 side-items">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="py-3 side-items">
                <Link to={"/services"}>About</Link>
              </li>
              <li className="py-3 side-items">
                <Link to={"/resume"}>Resume</Link>
              </li>
              <li className="py-3 side-items">
                <Link to={"/projects"}>Projects</Link>
              </li>
              <li className="py-3 side-items">
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
            <p className="text-[12px] text-[#2e020f] font-['Poppins']">Designed by Sarankumar</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
