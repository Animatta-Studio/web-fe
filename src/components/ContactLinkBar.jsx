import React from 'react';
import { Link } from 'react-router-dom';

const ContactLinkBar = () => {
  return (
    <nav className='sm:flex hidden w-full text-white justify-center items-center text-center bg-[#64C0FF] z-[40] p-1'>
        <span className='flex justify-center font-poppins text-white font-semibold z-[40] text-[15px] mt-1 items-center text-center'>If there's any doubt or questions you want to ask, just fill out the contact form and we surely look into that and reply to you shortly.</span>
    </nav>
  );
}

export default ContactLinkBar;
