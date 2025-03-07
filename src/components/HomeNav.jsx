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
            <div className='w-[35%] mx-auto rounded-[150px] border-[3px] border-[#8600E4] px-2 py-2'>
                <ul className='flex justify-around items-center'>
                    <Link to={"/about"}>
                        <li className='relative items-nav'>
                        <IoIosContact className=' text-[26px]'/>
                        <p className='sub-name'>About</p>
                        </li>
                    </Link>
                    <Link to={"/resume"}>
                        <li className='relative items-nav'>
                        <SiReaddotcv className='text-[24px]'/>
                        <p className='sub-name'>Resume</p>
                        </li>
                    </Link>
                    <Link to={"/projects"}>
                        <li className='relative items-nav'>
                        <RiAppsFill className='text-[24px]'/>
                        <p className='sub-name'>Projects</p>
                        </li>
                    </Link>
                    <Link to={"/contact"}>
                        <li className='relative items-nav'>
                        <PiPhoneIncomingFill className='text-[24px]'/>
                        <p className='sub-name'>Contact</p>
                        </li>
                    </Link>
                  
                </ul>
            </div>
        </div>
    </>
  )
}

export default HomeNav