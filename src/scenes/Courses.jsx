import React, { useState, useEffect } from "react";
import { Top } from "../components";
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
      <div 
        className="flex bg-[#64C0FF] max-w-[900px] max-h-[80px] items-center justify-center px-6 msm:mt-[40px] pb-2 rounded-t-[10px] border-4 border-b-0 border-gray-900"
      >
        <ul className="flex relative">
          <span
            className={`bg-[#0087E0] duration-500 ${courses[selected].dis} ${courses[selected].sd} border-4 border-gray-900 msm:h-[95.7px] h-[74px] msm:w-[180px] w-[90px] pt-4 absolute
          -top-5 msm:rounded-t-[30px] rounded-t-[30px] border-b-0 msm:z-0 z-[10]`}
          >
            <span
              className="w-3.5 h-3.5 bg-transparent absolute msm:top-[16px] top-[15.5px] msm:-left-[18px] -left-[18px]
            msm:rounded-tr-[9px] rounded-tr-[7px] shadow-myShadow1"
            ></span>
            <span
              className="w-3.5 h-3.5 bg-transparent absolute msm:top-[16px] top-[15.5px] msm:-right-[18px] -right-[18px]
            msm:rounded-tl-[9px] rounded-tl-[7px] shadow-myShadow2"
            ></span>
          </span>
          {courses.map((course, idx) => (
            <li
              key={idx}
              className="msm:w-[180px] w-[90px]"
            >
              <a 
                className="flex flex-col text-center pt-4"
                onClick={() => moveItem(idx)}
              >
                <span
                  className={`msm:text-2xl text-[17px] font-bold cursor-pointer duration-500 msm:py-2 ${
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
        className="h-full w-max-[1200px] border-4 border-gray-900 msm:ml-20 msm:mr-20 msm:mb-20 msm:rounded-t-[20px]">
        <div className="border-t-[24px] border-b-[8px] border-l-[8px] border-r-[8px] border-[#0087E0] msm:rounded-t-[18px]">
          <div className="m-4">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={courses[selected].id}
                custom={direction}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="msm:p-4 p-1 h-[400px] mb-8 msm:ml-32 ml-1 msm:mr-32 mr-1 mt-0 overflow-auto"
              >
                <div className="flex flex-1 justify-center items-center msm:px-4 pt-4 msm:mb-10 mb-4">
                  <p className="text-white font-poppins msm:text-[18px] text-[14px] text-start msm:p-2 p-1 msm:leading-[40px]">
                    {courses[selected].content}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
