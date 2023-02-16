import React, { useState } from 'react';
import ReactReadMoreReadLess from 'react-read-more-read-less';
import { Top } from '../components';
import { courses } from '../constants';
import styles from '../style';

const Courses = () => {
  const [selected, setSelected] = useState('NAT');

  return (
    <div className='mt-20'>
      <Top image='https://www.kindacode.com/wp-content/uploads/2022/06/night-sky.jpeg' text='Courses' />
      <ul className='list-none flex justify-center items-center flex-1'>
        {Object.keys(courses).map((key, idx) => (
          <li key={idx} className={`${selected === key ? 'bg-[#0087E0]' : 'bg-gray-500'} justify-between font-poppins cursor-pointer sm:text-[20px] text-[15px] text-white sm:mr-10 mr-4 font-bold hover:bg-[#0087E0] sm:px-16 px-2 sm:py-4 py-2 mt-10 rounded`} onClick={() => setSelected(key)} >
              {key}
          </li>
        ))}
      </ul>
      <div className='sm:p-4 p-1 border mb-8 sm:ml-32 ml-1 sm:mr-32 mr-1 mt-0'>
        <div className='flex flex-1 justify-center items-center sm:px-4 px-1 pt-4 sm:mb-10 mb-4'>
          <p className='text-white sm:px-10 p-1 sm:text-[18px] text-[15px] sm:leading-[25px] leading-[24px]'>
            <ReactReadMoreReadLess readMoreClassName='text-[#007bff] border-b-[1px] border-gray-700' readLessClassName='text-[#007bff] border-b-[1px] border-gray-700' charLimit={580} readMoreText='Read More ▼' readLessText='Read Less ▲'>
              {courses[selected].content}
            </ReactReadMoreReadLess>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Courses;