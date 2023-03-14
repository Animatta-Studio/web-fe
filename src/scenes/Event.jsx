import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Top } from '../components';
import { events } from '../constants';

const Event = () => {
    const [id, setId] = useState(1);
    const loc = useLocation();
    useEffect(() => {
        const locs = loc.pathname.split('/');
        setId(+locs[locs.length-1]-1);
    }, [loc])
    const eventId = '';
    return (
        <motion.div initial={{y: '70vh'}} animate={{y: 0}} transition={{type:'spring', duration:1.3, bounce:0.3}} className='mt-[100px] text-white'>
            <Top text="News & Events" />
            <div className='p-4 flex flex-1 space-x-10'>
                <div className='flex flex-1 flex-col space-y-8 p-4'>
                    <h1 className='text-[30px] font-extrabold justify-center text-center'>{events[id].title}</h1>
                    <p>{events[id].content}</p>
                </div>
                <img src={events[id].icon} loading='lazy' className='w-[500px] h-[400px]'/>
            </div>
        </motion.div>
    );
}

export default Event;