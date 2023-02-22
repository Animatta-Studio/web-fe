import React from 'react';

const Top = ({text, image}) => {
  return (
    <div className='sm:h-[120px] h-[130px] border-rose-800 w-full text-white relative sm:pt-[10px] pt-0 rounded-none z-[4]'>
        <img src={image} alt={text} className='w-full h-full rounded-none'/>
        <h1 className="absolute text-5xl text-green-300 top-[25px] font-semibold sm:left-20 left-[60px]">{text}</h1>
    </div>
  );
}

export default Top;