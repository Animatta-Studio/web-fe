import React, { useEffect, useRef } from 'react';
import { feedbacks } from '../constants';
import { motion, useInView, useAnimation } from 'framer-motion';

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-30%' });
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
      animation.start({ x: '-100vh' });
    }
  }, [inView]);

  return (
    <motion.div ref={ref} animate={animation} className='flex flex-col text-center py-10 select-none w-full pl-4 pr-4'>
      <h1 className='sm:mb-4 mb-2 sm:text-4xl text-2xl font-poppins tracking-tight font-extrabold text-center text-white'>Read What Others Have To Say</h1>
      <hr className='w-80 mx-auto h-1 bg-[#0087E0] mb-10 rounded' />
      <div className='flex sm:flex-row flex-col max-full justify-between sm:space-x-3 sm:space-y-0 space-y-3 group'>
        {feedbacks.map(feedback => (
          <div key={feedback.id} className='sm:h-[400px] flex flex-1 flex-col justify-start bg-white/10 duration-500 hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 pl-4 pr-4 pt-8 pb-8 rounded-xl cursor-pointer'>
            <div className='flex flex-1 flex-col h-1/5 items-center justify-center '>
              <img src={feedback.img} alt='' className='object-fit h-[100px] w-[100px] bg-cover justify-center mb-2 rounded-full border-none' />
              <h5 className='text-xl font-bold text-white opacity-70'>{feedback.name}</h5>
              <h6 className='text-[15px] text-gray-500'>{feedback.title}</h6>
            </div>
            <div className='text-start h-2/5'>
              <p className='font-poppins font-normal msm:text-[13px] text-[11px] msm:leading-[16px] leading-[13px] text-center text-gradient'>
                {feedback.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonials;
