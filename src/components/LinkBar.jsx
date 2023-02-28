import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LinkBar = () => {
  return (
    <nav className='fixed sm:flex w-full text-white justify-center items-center text-center bg-[#64C0FF] z-[40] p-1'>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        <motion.li initial={{}} animate={{}} transition={{}} key='linkbar-1' className='font-poppins cursor-pointer text-[14px] text-white mr-10 font-bold rounded-lg' >
          <Link to='/events' className="group text-white hover:text-gray-800">
            News & Events
          </Link>
        </motion.li>
        <div className='group rounded-3xl bg-black p-2 hover:bg-gray-200 transition duration-500'>
          <li key='linkbar-2' className='font-poppins cursor-pointer text-[14px] font-bold rounded' >
            <Link to='/apply' className='text-white group-hover:text-black transition duration-50'>
              Online Application
            </Link>
          </li>
        </div>
      </ul>
      <span className='sm:hidden inline'>
        <Link to='/apply' className='text-black font-extrabold group-hover:text-black transition duration-50'>
          Apply Now
        </Link>
      </span>
    </nav>
  );
}

export default LinkBar;
