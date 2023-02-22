import React from 'react';
import { GrLocation } from 'react-icons/gr';

const LocationPin = ({ text }) => (
    <div className='flex items-center w-[180px]'>
      <GrLocation className='text-5xl text-[#ff0000]'/>
      <p className="text-sm font-bold text-gradient">{text}</p>
    </div>
);

export default LocationPin;