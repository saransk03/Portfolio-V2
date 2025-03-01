import React, { useRef } from "react";
import Navbar from "./Navbar";
import { ToastContainer, toast } from 'react-toastify';
import { IoLocationSharp } from "react-icons/io5";
import { HiPhone } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { LuSend } from "react-icons/lu";
import { motion } from "motion/react";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  const formRef = useRef(null)
    
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "55147d81-3f83-44d2-b862-e3bcbcd4c499");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Hooray! Your form has been submitted 🎉", {
        position: "top-right",
        autoClose: 3000, // Auto close after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      })

      formRef.current.reset();
      // console.log("Success", res); 
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-[90%] lg:w-[calc(100%-300px)] h-screen mx-auto py-4 pt-8 ml-[300px] relative back">
        <video muted autoPlay loop className="video">
          <source
            src="https://videos.pexels.com/video-files/2611250/2611250-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
        <motion.div
          className="w-[95%] grid grid-cols-1 mx-auto z-10 pb-8"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
          initial="hidden"
          animate="show"
        >
          <div className="flex flex-col justify-center items-center">
            <motion.h1
              className="text-white text-[80px] font-[700] leading-none"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: "easeIn",
                type: "spring",
                stiffness: 400,
                damping: 10,
                delay: 0.2,
              }}
            >
              CONTACT
            </motion.h1>
            <motion.p
              className="text-[#9611f5] text-[20px] font-[700] tracking-[.9em] leading-none "
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: "easeIn",
                type: "spring",
                stiffness: 400,
                damping: 10,
                delay: 0.2,
              }}
            >
              GET IN TOUCH
            </motion.p>
          </div>
          <div className="w-[70%] mx-auto flex justify-center items-center gap-10 mt-12">
            <div className="flex font-['Poppins'] flex-col justify-center items-center gap-3">
              <h1 className="text-[20px] shadow-[#8600E4]  drop-shadow-[0px_0px_10px] font-[700] flex gap-2 justify-center items-center text-[#9611f5]">
                <HiPhone className="text-[23px]" /> Phone No
              </h1>
              <p className="text-[15px] font-[600] text-white">
                +91 9514053103
              </p>
            </div>
            <div className="bg-[#8600E4] w-0.5 h-24 shadow-[#8600E4] shadow-[0px_0px_10px]"></div>
            <div className="flex font-['Poppins'] flex-col justify-center items-center gap-3">
              <h1 className="text-[20px] shadow-[#8600E4]  drop-shadow-[0px_0px_10px] font-[700] flex gap-2 justify-center items-center text-[#9611f5]">
                <IoLocationSharp className="text-[23px]" /> Address
              </h1>
              <p className="text-[15px] font-[600] text-white">
                Chennai, Tamil Nadu
              </p>
            </div>
            <div className="bg-[#8600E4] w-0.5 h-24 shadow-[#8600E4] shadow-[0px_0px_10px]"></div>
            <div className="flex font-['Poppins'] flex-col justify-center items-center gap-3">
              <h1 className="text-[20px] shadow-[#8600E4]  drop-shadow-[0px_0px_10px] font-[700] flex gap-2 justify-center items-center text-[#9611f5]">
                <MdEmail className="text-[23px]" /> Email
              </h1>
              <p className="text-[15px] font-[600] text-white">
                saransk753@gmail.com
              </p>
            </div>
          </div>
          <div className="w-[60%] mx-auto mt-10">
            <div className="bg-gray-900 bg-opacity-50 backdrop:blur-md py-6 px-6 rounded-[20px] head-icon font-['Poppins']">
              <h1 className="text-[24px] shadow-[#8600E4] py-2 drop-shadow-[0px_0px_10px] font-[700] flex gap-2 justify-center items-center text-[#9611f5]">
                Send a Message
              </h1>
              <form ref={formRef} className="flex flex-col items-center gap-5" onSubmit={onSubmit}>
                <div className="w-full grid grid-col-1 lg:grid-cols-2 gap-5 mt-4">
                  <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    className="w-full text-[14px] p-2 rounded-xl capitalize bg-transparent border outline-none text-white"
                    required
                  />
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name (Optional)"
                    className="w-full text-[14px] p-2 rounded-xl bg-transparent border outline-none text-white"
                  />
                </div>
                <div className="w-full grid grid-col-1 lg:grid-cols-2 gap-5 ">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full text-[14px] p-2 rounded-xl bg-transparent border outline-none text-white"
                    required
                  />
                  <input
                    type="text"
                    name="Phone number"
                    placeholder="Phone Number"
                    className="w-full text-[14px] p-2 rounded-xl bg-transparent border outline-none text-white"
                  />
                </div>
                <textarea
                  name="message"
                  type="text"
                  placeholder="Message"
                  className="w-full text-[14px] capitalize p-2 min-h-28 rounded-xl bg-transparent border outline-none text-white"
                  required
                ></textarea>
                <motion.button
                  className="px-3 py-1.5 bg-green-800 flex justify-center items-center gap-1 text-white text-[15px] rounded-[20px] font-semibold
                    hover:shadow-green-800 hover:shadow-[0px_0px_15px]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <LuSend className="text-[15px] font-bold" />
                  Submit
                </motion.button>
              </form>
              <ToastContainer />
            </div>
          </div>
          <div className="w-[70%] mx-auto grid grid-cols-1 mt-6">
            <h1 className="text-[24px] shadow-[#8600E4] py-2 drop-shadow-[0px_0px_10px] font-[700] flex gap-2 justify-center items-center text-[#9611f5]">
              Connect With Me
            </h1>
            <div className="flex justify-center items-center gap-6 mt-5">
              <Link to={"mailto:saransk753@gmail.com"} target="_blank">
                <motion.d
                  iv
                  className="bg-gray-900 bg-opacity-50 backdrop:blur-md rounded-[50%] w-[50px] h-[50px] flex justify-center items-center head-icon group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <MdEmail className="text-[22px] text-white group-hover:text-[#8600E4] shadow-white drop-shadow-[0px_0px_10px]" />
                </motion.d>
              </Link>

              <Link
                to={"https://www.linkedin.com/in/sarankumar-m/"}
                target="_blank"
              >
                <motion.div
                  className="bg-gray-900 bg-opacity-50 backdrop:blur-md rounded-[50%] w-[50px] h-[50px] flex justify-center items-center head-icon group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <FaLinkedinIn className="text-[22px] text-white group-hover:text-[#8600E4] shadow-white drop-shadow-[0px_0px_10px]" />
                </motion.div>
              </Link>

              <Link to={"https://github.com/saransk03"} target="_blank">
                <motion.div
                  className="bg-gray-900 bg-opacity-50 backdrop:blur-md rounded-[50%] w-[50px] h-[50px] flex justify-center items-center head-icon group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <FaGithub className="text-[22px] text-white group-hover:text-[#8600E4] shadow-white drop-shadow-[0px_0px_10px]" />
                </motion.div>
              </Link>

              <Link
                to={"https://www.instagram.com/saran_krish_03/"}
                target="_blank"
              >
                <motion.div
                  className="bg-gray-900 bg-opacity-50 backdrop:blur-md rounded-[50%] w-[50px] h-[50px] flex justify-center items-center head-icon group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <AiFillInstagram className="text-[22px] text-white group-hover:text-[#8600E4] shadow-white drop-shadow-[0px_0px_10px]" />
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
