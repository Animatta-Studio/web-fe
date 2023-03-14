import React from 'react';
import { BsFacebook, BsYoutube } from 'react-icons/bs';
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import { GetStarted } from '../components';
import { contact, location } from '../assets';

const Footer = () => {
  return (
    <footer className='w-full bg-[#0087E0] sm:p-2 shadow-lg z-[50] pt-2'>
      <div className='m-auto sm:p-2 flex justify-between'>
        <div className='lg:w-3/5 w-11/12 m-auto sm:p-5 pr-0 md:mr-[130px] flex justify-between'>
          <div className='flex flex-col cursor-pointer'>
            <h1 className='sm:text-xl text-[15px] font-bold ml-2'>Get in touch</h1>
            <div className='flex items-center'>
              <img src={location} loading="lazy" className='flex h-[30px] w-[30px] justify-center'/>
              <span className='sm:text-[12px] text-[10px] text-white font-bold' >Dehradun, India</span>
            </div>
            <div className='flex items-center'>
              <img src={contact} loading="lazy" className='flex h-[30px] w-[30px] justify-center'/>
              <span className='sm:text-[12px] text-[10px] text-white font-bold' >+91-7037972600</span>
            </div>
            <br className='sm:mt-2 mt-1 sm:mb-2 mb-1'/>
            <div className='flex items-center'>
              <img src={location} loading="lazy" className='flex h-[30px] w-[30px] justify-center'/>
              <span className='sm:text-[12px] text-[10px] text-white font-bold' >Osaka, Japan</span>
            </div>
            <div className='flex items-center'>
              <img src={contact} loading="lazy" className='flex h-[30px] w-[30px] justify-center'/>
              <span className='sm:text-[12px] text-[10px] text-white font-bold' >+81-7084488810</span>
            </div>
          </div>
          <div className='sm:flex hidden flex-col space-y-2'>
            <h1 className='sm:text-xl text-[15px] font-bold'>Connect</h1>
            <a className='sm:text-xs text-[10px] text-white font-bold hover:text-gray-700 pl-1' href="https://www.facebook.com/profile.php?id=100090497542897" target="_blank">Facebook</a>
            <a className='sm:text-xs text-[10px] text-white font-bold hover:text-gray-700 pl-1' href="https://www.instagram.com/miraiinternationaleducation" target="_blank">Instagram</a>
            <a className='sm:text-xs text-[10px] text-white font-bold hover:text-gray-700 pl-1' href="/" target="_blank">LinkedIn</a>
            <a className='sm:text-xs text-[10px] text-white font-bold hover:text-gray-700 pl-1' href="https://www.youtube.com/channel/UCbPzIWEGeYu8RBjDuWXnebQ" target="_blank">Youtube</a>
          </div>
          <div className='flex flex-col space-y-2'>
            <h1 className='sm:text-xl text-[15px] font-bold'>Services</h1>
            <span className='sm:text-xs text-[10px] text-white font-bold cursor-pointer pl-1'>Study Abroad</span>
            <span className='sm:text-xs text-[10px] text-white font-bold cursor-pointer pl-1'>Document Translation</span>
            <span className='sm:text-xs text-[10px] text-white font-bold cursor-pointer pl-1'>Work in Japan</span>
            <span className='sm:text-xs text-[10px] text-white font-bold cursor-pointer pl-1'>Free Consultation</span>
            <span className='sm:text-xs text-[10px] text-white font-bold cursor-pointer pl-1'>Japanese Classes</span>
          </div>
        </div>
        <div className='md:flex hidden mr-20 mt-10'>
          <GetStarted />
        </div>
      </div>
      <div className='flex'>
        <div className='w-1/2 m-auto sm:p-5 p-1 flex justify-center sm:space-x-10 space-x-5 text-white cursor-pointer'>
          <div className='bg-none p-1 rounded-full hover:bg-gray-700'>
            <a href="https://www.facebook.com/profile.php?id=100090497542897" target="_blank">
              <BsFacebook size={'20px'}/>
            </a>
          </div>
          <div className='bg-none p-1 rounded-full hover:bg-gray-700'>
            <a href="https://www.youtube.com/channel/UCbPzIWEGeYu8RBjDuWXnebQ" target="_blank">
              <BsYoutube size={'20px'}/>
            </a>
          </div>
          <div className='bg-none p-1 rounded-full hover:bg-gray-700'>
            <a href="https://www.instagram.com/miraiinternationaleducation" target="_blank">
              <AiFillInstagram size={'20px'}/>
            </a>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <p className='font-poppins font-normal text-white sm:text-[12px] text-[10px] leading-[15.8px]'>© 2023 Mirai International Education. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;
