import React, { useRef, useEffect } from 'react';
import { affiliatedInstitutions } from '../constants';
import { motion, useInView, useAnimation } from 'framer-motion';

const Affliation = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-25%' });
  const animation = useAnimation();
  useEffect(() => {
    if(inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring', duration: 1.6, bounce: 0.5,
        },
      });
    } else {
      animation.start({ x: '100vh' });
    }
  }, [inView]);

  return (
    <motion.div ref={ref} animate={animation} className='py-10 select-none'>
        <h2 className="font-poppins mb-4 sm:text-4xl text-2xl tracking-tight font-extrabold text-center text-white">Collaboration Partners</h2>
        <hr className='w-[220px] mx-auto h-1 bg-[#0087E0] mb-10 rounded' />
        <div className='sm:flex grid flex-1 sm:flex-row grid-cols-2 text-center'>
            {affiliatedInstitutions.map(ai => (
              <div className='flex flex-col text-white space-between mx-auto cursor-pointer mb-2' key={ai.id}>
                  <a href={ai.link} target='_blank' className='flex flex-col items-center justify-center'>
                    <img src={ai.logo} href={ai.link} className='object-cover bg-gray-800 rounded-full sm:h-[100px] h-[70px] sm:w-[100px] w-[70px] p-1 mb-2' />
                    <span className='font-bold sm:w-[200px] w-[150px] sm:text-[14px] text-[11px]'>{ai.name}</span>
                  </a>
              </div>
            ))}
        </div>
    </motion.div>
  )
}

export default Affliation;
