import React from 'react';
import { BsFacebook, BsYoutube } from 'react-icons/bs';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import GoToTop from './GoToTop';

const Footer = () => {
  return (
    <footer className='w-full bg-[#0087E0] shadow-lg z-[50]'>
      <div className='lg:w-3/5 w-11/12 m-auto p-6 flex justify-between'>
        <div className='flex flex-col space-y-2'>
          <h1 className='sm:text-xl text-[14px] font-bold'>Get in touch</h1>
          <a className='text-xs text-white font-bold hover:text-gray-700' href="/">India</a>
          <a className='text-xs text-white font-bold hover:text-gray-700' href="/">address details</a>
          <a className='text-xs text-white font-bold hover:text-gray-700' href="/">Japan</a>
          <a className='text-xs text-white font-bold hover:text-gray-700' href="/">address details</a>
        </div>
        <div className='flex flex-col space-y-2'>
          <h1 className='sm:text-xl text-[14px] font-bold'>Connect</h1>
          <a className='text-xs text-white font-bold hover:text-gray-700' href="/">Facebook</a>
          <a className='text-xs text-white font-bold hover:text-gray-700' href="/">Instagram</a>
          <a className='text-xs text-white font-bold hover:text-gray-700' href="/">LinkedIn</a>
          <a className='text-xs text-white font-bold hover:text-gray-700' href="/">Youtube</a>
        </div>
        <div className='flex flex-col space-y-2'>
          <h1 className='sm:text-xl text-[14px] font-bold'>Services</h1>
          <a className='text-xs text-white font-bold hover:text-gray-700' href="/">Study Abroad</a>
          <a className='text-xs text-white font-bold hover:text-gray-700' href="/">Document Translation</a>
          <a className='text-xs text-white font-bold hover:text-gray-700' href="/">Work in Japan</a>
          <a className='text-xs text-white font-bold hover:text-gray-700' href="/">Free Consultation</a>
          <a className='text-xs text-white font-bold hover:text-gray-700' href="/">Japanese Language Classes</a>
        </div>
      </div>
      <div className='flex'>
        <div className='w-1/2 m-auto sm:p-5 p-1 flex justify-center sm:space-x-10 space-x-5 text-white cursor-pointer'>
          <div className='bg-none p-1 rounded-full hover:bg-gray-700'>
            <BsFacebook size={'20px'}/>
          </div>
          <div className='bg-none p-1 rounded-full hover:bg-gray-700'>
            <BsYoutube size={'20px'}/>
          </div>
          <div className='bg-none p-1 rounded-full hover:bg-gray-700'>
            <AiFillInstagram size={'20px'}/>
          </div>
          <div className='bg-none p-1 rounded-full hover:bg-gray-700'>
            <AiFillTwitterCircle size={'20px'}/>
          </div>
        </div>
        <GoToTop />
      </div>
      <div className='flex items-center justify-center'>
        <p className='font-poppins font-normal text-white sm:text-[12px] text-[10px] leading-[15.8px]'>© 2023 Mirai International Education. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
