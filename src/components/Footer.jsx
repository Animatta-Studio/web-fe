import React from 'react';
import { BsFacebook, BsYoutube } from 'react-icons/bs';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import GoToTop from './GoToTop';

const Footer = () => {
  return (
    <footer className='w-full bg-[#0087E0] shadow-lg z-[50]'>
      <div className='lg:w-4/5 w-11/12 m-auto p-6 flex justify-between'>
        <div className='flex flex-col space-y-2'>
          <h1 className='sm:text-xl text-[14px] font-bold'>Get in touch</h1>
          <a className='text-xs text-gray-600' href="/">address line 1</a>
          <a className='text-xs text-gray-600' href="/">address line 2</a>
          <a className='text-xs text-gray-600' href="/">phone</a>
          <a className='text-xs text-gray-600' href="/">email</a>
        </div>
        <div className='flex flex-col space-y-2'>
          <h1 className='sm:text-xl text-[14px] font-bold'>Connect</h1>
          <a className='text-xs text-gray-600' href="/">social</a>
          <a className='text-xs text-gray-600' href="/">media</a>
          <a className='text-xs text-gray-600' href="/">icons</a>
          <a className='text-xs text-gray-600' href="/">facebook</a>
          <a className='text-xs text-gray-600' href="/">insta etc</a>
        </div>
        <div className='flex flex-col space-y-2'>
          <h1 className='sm:text-xl text-[14px] font-bold'>Services</h1>
          <a className='text-xs text-gray-600' href="/">courses</a>
          <a className='text-xs text-gray-600' href="/">that</a>
          <a className='text-xs text-gray-600' href="/">they</a>
          <a className='text-xs text-gray-600' href="/">can</a>
          <a className='text-xs text-gray-600' href="/">provide.</a>
        </div>
        <div className='flex flex-col space-y-2'>
          <h1 className='sm:text-xl text-[14px] font-bold'>Ventures</h1>
          <a className='text-xs text-gray-600' href="/">need</a>
          <a className='text-xs text-gray-600' href="/">to</a>
          <a className='text-xs text-gray-600' href="/">think</a>
          <a className='text-xs text-gray-600' href="/">about</a>
          <a className='text-xs text-gray-600' href="/">this column</a>
        </div>
      </div>
      <div className='flex'>
        <div className='w-1/2 m-auto sm:p-5 p-1 flex justify-center sm:space-x-10 space-x-5 text-gray-700'>
          <BsFacebook size={'20px'}/>
          <BsYoutube size={'20px'}/>
          <AiFillInstagram size={'20px'}/>
          <AiFillTwitterCircle size={'20px'}/>
        </div>
        <GoToTop />
      </div>
      <div className='flex items-center justify-center'>
        <p className='font-poppins font-normal text-gray-600 sm:text-[12px] text-[10px] leading-[15.8px]'>© 2023 Mirai International Education. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;