import React from "react";
import { delay, motion } from "motion/react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { assests } from "../../public/assets/assests";

const Navbar = () => {
  return (
    <>
      <motion.div className="w-[280px] h-[90%] my-[1%] hidden lg:block fixed top-5 left-7 mx-auto navbar"
      variants={{
        hidden: { opacity: 0},
        show: { opacity: 1, transition: { staggerChildren: 0.3 } },
      }}
      initial="hidden"
      animate="show"
      transition={{
        duration: 2,
        ease: "easeOut",
        smooth: true,
      }}>
        <div
          className="w-[90%] h-full grid grid-cols-1 mx-auto py-3"
          
        >
          <div className="flex flex-col justify-evenly items-center">
            <div className="flex flex-col justify-center items-center">
              <motion.img
                src={assests.portfolio}
                alt="image"
                className="w-[200px] py-3 image"
                initial={{ opacity: 0, rotateZ: 720 ,scale: 0}}
                animate={{ opacity: 1, rotateZ: 0 , scale: 1}}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              />
              <Link to={"/"}>
                <motion.h1 className="text-white font-['Poppins'] text-xl font-[700] tracking-wider"
                initial={{ opacity: 0, y: -100, rotateX: 45}}
                animate={{ opacity: 1, y: 0 , rotateX: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 0.4,
                }}>
                  SARANKUMAR
                </motion.h1>
              </Link>
            </div>
            <div>
              <ul className="flex flex-col justify-center items-center text-white text-[16px] font-[500] font-['Poppins']">
                <motion.li className="py-3 side-items"
                initial= {{opacity: 0, y: -60}}
                animate= {{opacity: 1, y: 0}}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 0.3,
                }}>
                  <Link to={"/"}>Home</Link>
                </motion.li>
                <motion.li className="py-3 side-items"
                initial= {{opacity: 0, y: -60}}
                animate= {{opacity: 1, y: 0}}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 0.4,
                }}>
                  <Link to={"/about"}>About</Link>
                </motion.li>
                <motion.li className="py-3 side-items"
                initial= {{opacity: 0, y: -60}}
                animate= {{opacity: 1, y: 0}}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 0.5,
                }}>
                  <Link to={"/resume"}>Resume</Link>
                </motion.li>
                <motion.li className="py-3 side-items"
                initial= {{opacity: 0, y: -60}}
                animate= {{opacity: 1, y: 0}}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 0.6,
                }}>
                  <Link to={"/projects"}>Projects</Link>
                </motion.li>
                <motion.li className="py-3 side-items"
                initial= {{opacity: 0, y: -60}}
                animate= {{opacity: 1, y: 0}}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 0.7,
                }}>
                  <Link to={"/contact"}>Contact</Link>
                </motion.li>
              </ul>
            </div>
            <motion.p className="text-[12px] text-[#2e020f] font-['Poppins']"
            initial= {{opacity: 0, y: -60}}
            animate= {{opacity: 1, y: 0}}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.8,
            }}>
              Designed by Sarankumar
            </motion.p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
