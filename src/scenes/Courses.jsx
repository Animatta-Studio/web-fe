import React, { useState } from "react";
import { Top } from "../components";
import parse from 'html-react-parser';
import { courses } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

const Courses = () => {
  const [selected, setSelected] = useState(0);
  const [direction, setDirection] = useState(0);

  const moveItem = (cur) => {
    if (cur === selected) return;
    let val = cur < selected ? -1 : 1;
    setDirection(val);
    setSelected(cur);
  };

  const variants = {
    hidden: (direction) => {
      return {
        x: direction < 0 ? "60vw" : "-60vw",
        opacity: 0,
      };
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
        delay: 0.5,
      },
    },
    exit: (direction) => {
      return {
        x: direction < 0 ? "-60vw" : "60vw",
        opacity: 0,
        duration: 0.3,
      };
    },
  };

  return (
    <div className="h-full flex flex-col mt-[100px] items-center">
      <Top text="Courses" />
      <motion.div initial={{y: '70vh'}} animate={{y: 0}} transition={{type:'spring', duration:1.3, bounce:0.3}} className='flex flex-col items-center z-[8]'>
        <div 
          className="flex bg-[#64C0FF] msm:max-w-[720px] max-w-[360px] max-h-[80px] items-center justify-center px-6 msm:mt-[40px] rounded-t-[15px] msm:border-t-4 border-t-2 border-gray-900"
        >
          <ul className="flex relative">
            <span
              className={`bg-[#0087E0] duration-500 ${courses[selected].dis} ${courses[selected].sd} msm:border-t-4 border-t-2 msm:border-l-4 border-l-2 msm:border-r-4 border-r-2 border-gray-900 msm:h-[95px] h-[70px] msm:w-[180px] w-[90px] absolute msm:-top-5 -top-6 msm:rounded-t-[30px] rounded-t-[25px] msm:z-0 z-[10]`}
            >
              <span className="bg-[#0087E0] absolute h-1/4 -bottom-1 msm:w-[172px] w-[86px] z-[11]" />
              <span
                className={`${(selected === 0) && 'msm:hidden hidden'} w-3.5 h-3.5 bg-transparent msm:inline hidden absolute msm:top-[16px] top-[20px] msm:-left-[18px] -left-[16px]
              msm:rounded-tr-[9px] rounded-tr-[7px] shadow-myShadow1`}
              ></span>
              <span
                className={`${(selected === courses.length-1) && 'msm:hidden hidden'} w-3.5 h-3.5 msm:inline hidden bg-transparent absolute msm:top-[16px] top-[20px] msm:-right-[18px] -right-[16px]
              msm:rounded-tl-[9px] rounded-tl-[7px] shadow-myShadow2`}
              ></span>
            </span>
            {courses.map((course, idx) => (
              <li
                key={idx}
                className={`duration-[800ms] msm:w-[180px] w-[90px] ${idx !== 0 && 'msm:border-l-[2px] border-l-[1px]'} ${idx !== courses.length-1 && 'msm:border-r-[2px] border-r-[1px]'} border-gray-900 pb-2`}
              >
                <a 
                  className="flex flex-col text-center pt-4"
                  onClick={() => moveItem(idx)}
                >
                  <span
                    className={`msm:text-2xl text-[14px] font-bold cursor-pointer duration-500 msm:py-2 ${
                    idx === selected && "sm:-mt-6 -mt-4 text-white z-[11]"
                    }`}
                  >
                    {course.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="h-full w-max-[1200px] msm:border-4 border-2 border-gray-900 msm:ml-20 msm:mr-20 msm:mb-20 msm:rounded-t-[20px]">
          <div className="border-t-[24px] border-b-[8px] border-l-[8px] border-r-[8px] border-[#0087E0] msm:rounded-t-[18px] overflow-auto">
            <div className="m-4">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={courses[selected].id}
                  custom={direction}
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="msm:p-4 p-1 h-[400px] mb-8 msm:ml-32 ml-1 msm:mr-32 mr-1 mt-0"
                >
                  <div className="flex flex-1 justify-center items-center msm:px-4 pt-2 msm:mb-10 mb-4">
                    <p className="text-white font-poppins msm:text-[18px] text-[14px] text-start msm:leading-[40px]">
                      {courses[selected].content}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Courses;
