import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import parse from 'html-react-parser';
import { Top } from '../components';
import { events } from '../constants';

const Event = () => {
    const [id, setId] = useState(1);
    const loc = useLocation();
    useEffect(() => {
        const locs = loc.pathname.split('/');
        setId(+locs[locs.length-1]-1);
    }, [loc]);

    return (
        <motion.div initial={{y: '70vh'}} animate={{y: 0}} transition={{type:'spring', duration:1.3, bounce:0.3}} className='mt-[100px] text-white'>
            <Top text="News & Events" />
            <div className='flex sm:flex-row flex-col p-4 flex-1 sm:space-x-10 space-x-0'>
                <div className='flex flex-1 flex-col py-4 sm:p-8'>
                    <h1 className='text-[30px] font-extrabold justify-center text-center mb-2'>{events[id].title}</h1>
                    <div className='font-poppins sm:text-[18px] text-[14px] leading-[30px] sm:p-4 items-center text-start'>{parse(events[id].content)}</div>
                </div>
                <img src={events[id].icon} loading='lazy' className='sm:w-[500px] w-[100wh] sm:h-[400px] h-[300px] sm:mt-[100px]'/>
            </div>
        </motion.div>
    );
}

export default Event;