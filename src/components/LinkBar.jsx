import React from 'react';
import { Link } from 'react-router-dom';

const LinkBar = () => {
  return (
    <nav className='fixed sm:flex hidden w-full text-white justify-center items-center text-center bg-[#64C0FF] z-[40] p-1'>
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
          <li key='linkbar-1' className='font-poppins cursor-pointer text-[14px] text-white mr-10 font-bold rounded-lg' >
            <Link to='/events' className="group text-white hover:text-gray-800">
              News & Events
            </Link>
          </li>
          <div className='group rounded-3xl bg-black p-2 hover:bg-gray-200 transition duration-500'>
            <li key='linkbar-2' className='font-poppins cursor-pointer text-[14px] font-bold rounded' >
              <Link to='/apply' className='text-white group-hover:text-black transition duration-50'>
                Online Application
              </Link>
            </li>
          </div>
      </ul>
    </nav>
  );
}

export default LinkBar;
