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
    apply: {
      scale: [1, 1.1, 1],
      opacity: 1,
      padding: [4, 3.5, 4],
      backgroundColor: ['#ff0000', '#00ff00', '#0000ff'],
      transition: {
        repeat: Infinity,
        ease: 'easeInOut',
        duration: 0.5,
      }
    }
  };

  return (
    <nav className='fixed sm:flex w-full text-white justify-center items-center text-center bg-[#64C0FF] z-[40] sm:p-1'>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          <Link to='/events' className="text-white">
            <motion.li variants={linkVariants} initial="initial" whileInView="visible" key='linkbar-1' className='font-poppins cursor-pointer text-[14px] text-white mr-10 font-bold rounded-[17px] p-2' >
                News & Events
            </motion.li>
          </Link>
          <Link to='/apply' className='text-white'>
            <motion.li initial={{scale: 1,backgroundColor: '#000000' }} whileHover={{scale:1.1, backgroundColor: '#00aa00'}} key='linkbar-2' className='font-poppins cursor-pointer text-[14px] font-bold rounded-[17px] p-2' >
                Online Application
            </motion.li>
          </Link>
      </ul>
      <Link to='/apply' className='text-white font-extrabold sm:hidden'>
        <motion.div variants={linkVariants} initial="initial" whileInView="apply" className="sm:hidden w-full h-full p-1 cursor-pointer">
          Apply Now
        </motion.div>
      </Link>
    </nav>
  );
}

export default LinkBar;
