import React from 'react';
import { Carousel, Top } from '../components';

const Gallery = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-[100px]'>
        <Top text="Gallery" />
        <Carousel/>
    </div>
  );
}

export default Gallery;