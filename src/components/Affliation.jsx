import React from 'react';
import { affiliatedInstitutions } from '../constants';

const Affliation = () => {
  return (
    <div className='py-10 select-none'>
        <h2 className="font-poppins mb-4 text-4xl tracking-tight font-extrabold text-center text-white">Collaboration Partners</h2>
        <hr className='w-40 mx-auto h-1 bg-[#0087E0] mb-10 rounded' />
        <div className='flex flex-1'>
            {affiliatedInstitutions.map(ai => (
                <div className='text-white text-[14px] justify-center items-center space-between mx-auto' key={ai.id}>
                    {ai.name}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Affliation;
