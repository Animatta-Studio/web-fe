import React, { useState } from 'react';
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
          <li key={idx} className={`${selected === key && 'bg-red-500'} font-poppins cursor-pointer text-[20px] text-white mr-10 font-bold hover:bg-red-500 px-2 py-1 mt-10 rounded-lg`} onClick={() => setSelected(key)} >
              {key}
          </li>
        ))}
      </ul>
      <div className={`${styles.boxWidth}`}>
        <div className='flex flex-1 justify-center items-center px-10 pt-4 mb-10'>
          <p className='text-white px-10 text-[16px] leading-[25px]'>
            {courses[selected].content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Courses;