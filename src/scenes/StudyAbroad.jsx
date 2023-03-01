import React, { useState } from 'react';
import parse from 'html-react-parser';
import { Top, ApplySidebar } from '../components';
import { abroadHeader, affiliatedInstitutions, aboutJapan } from '../constants';
import { worldMap } from '../assets';

const StudyAbroad = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className='mt-[100px]'>
      <Top text='Study Abroad' />
      {/* <div className='font-poppins font-normal border border-gray-500 p-2 text-white sm:px-10 sm:text-[15px] text-[13px] sm:leading-[25px] leading-[24px] text-center'>
        {parse(aboutJapan)}
      </div>
      <div className='flex flex-1 sm:flex-row flex-col'>
        <div className='flex flex-col sm:w-4/5 w-full'>
          <div className='m-4'>
            <ul className='list-none flex justify-center items-center flex-1'>
              {Object.keys(abroadHeader).map((key, idx) => (
                <li key={idx} className={`${selected === idx ? 'bg-[#0087E0]' : 'bg-gray-500'} justify-between font-poppins cursor-pointer sm:text-[20px] text-[10px] text-white ${ idx !== abroadHeader.length-1 ? 'sm:mr-10 mr-4' : ''} font-bold hover:bg-[#0087E0] sm:px-4 px-2 sm:py-4 py-2 mt-10 rounded-[20px]`} onClick={() => setSelected(idx)} >
                    {abroadHeader[key].title}
                </li>
              ))}
            </ul>
          </div>
          <div className='font-poppins font-normal border border-gray-500 p-2 pt-8 pb-8 m-4 text-white sm:px-10 sm:text-[15px] text-[13px] sm:leading-[25px] leading-[24px]'>
              {parse(abroadHeader[selected].content)}
          </div> 
        </div>
        <ApplySidebar />
      </div>*/}
    </div>
  )
}

export default StudyAbroad;