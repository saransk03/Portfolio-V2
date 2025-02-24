import React from 'react'
import { SiReaddotcv } from "react-icons/si";
import { IoIosContact } from 'react-icons/io';
import { RiAppsFill } from "react-icons/ri";
import { PiPhoneIncomingFill } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const HomeNav = () => {
  return (
    <>
        <div className='2xl:container mx-auto my-4'>
            <div className='w-[35%] mx-auto rounded-[50px] bg-[#564147] px-2 py-2'>
                <ul className='flex justify-around items-center'>
                    <Link to={"/about"}>
                        <li>
                        <IoIosContact className='text-white text-[26px]'/>
                        </li>
                    </Link>
                    <Link to={"/resume"}>
                        <li>
                        <SiReaddotcv className='text-white text-[24px]'/>
                        </li>
                    </Link>
                    <Link to={"/projects"}>
                        <li>
                        <RiAppsFill className='text-white text-[24px]'/>
                        </li>
                    </Link>
                    <Link to={"/contact"}>
                        <li>
                        <PiPhoneIncomingFill className='text-white text-[24px]'/>
                        </li>
                    </Link>
                  
                </ul>
            </div>
        </div>
    </>
  )
}

export default HomeNav