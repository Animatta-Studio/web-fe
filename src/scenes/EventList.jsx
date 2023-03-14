import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Top } from '../components';
import { events } from '../constants';

const EventList = () => {
  return (
    <div className="flex flex-col mt-[100px]">
      <Top text="News & Events" />
      <motion.div 
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", duration: 1.3, bounce: 0.3 }}
        className="flex flex-row items-start mt-5 mb-10 ml-5 cursor-pointer"
      >
        {events.map((event) => (
          <div key={event.id} className="flex flex-col w-[300px] h-[370px] max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700 mr-5">
            <a href="#!">
              <img
                className="rounded-t-lg w-[400px] h-[200px]"
                src={event.icon}
                loading='lazy'
                alt="" />
            </a>
            <div className="flex flex-col p-6 items-center">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                {event.title}
              </h5>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                {event.topic}
              </p>
              <Link to={`/events/${event.id}`}>
                <button
                  type="button"
                  className="font-poppins py-2 px-8 text-sm text-extrabold text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  View More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default EventList;