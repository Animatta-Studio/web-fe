import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LinkBar = () => {
  const linkVariants = {
    initial: {
      scale: 1,
    },
    visible: {
      scale: [1.2, 0.8, 1.2, 0.8, 1.2],
      opacity: 1,
      x: [0, -5, 0, 5, 0],
      y: [0, 5, 0, -5, 0],
      rotate: [0, 6, -2, 11, 4, -7, 0],
      backgroundColor: ['hsl(0, 100, 50)', 'hsl(-120, 100, 50)'],
      transition: {
        repeat: Infinity,
        ease: 'easeInOut',
        duration: 1
      }
    },
  }
  return (
    <nav className='fixed sm:flex w-full text-white justify-center items-center text-center bg-[#64C0FF] z-[40] p-1'>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        <motion.li variants={linkVariants} initial="initial" whileInView="visible" key='linkbar-1' className='font-poppins cursor-pointer text-[14px] text-white mr-10 font-bold rounded-[17px] p-2' >
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
