import React from "react";
import { motion } from "framer-motion";

const Top = ({ text, image }) => {
  const letterContainerVariants = {
    before: { transition: { staggerChildren: 0.015, when: 'beforeChildren' }, delay: 0.3 },
    after: { transition: { staggerChildren: 0.07, when: 'beforeChildren' }, delay: 0.3 },
  };
  const letterVariants = {
    before: {
      opacity: 0,
      y: 25,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
    after: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      initial={{y: '-50vh', opacity: 0}}
      animate={{y: 0, opacity: 1}}
      className={`inline-block sm:text-start text-center sm:h-[120px] h-[130px] w-full text-white sm:pt-[10px] rounded-none z-[4] bg-topimage msm:bg-fit bg-cover bg-no-repeat border-1 border-gray-500 p-6 select-none`}
    >
      <motion.h2 variants={letterContainerVariants} initial="before" animate="after" className="font-poppins sm:mt-8 mt-4">
        {text.split('').map((c, id) => (
          <motion.span
            key={id}
            variants={letterVariants}
            className="sm:text-5xl text-4xl w-auto text-[#33bbcf] font-semibold relative inline-block"
          >
            {c === " " ? "\u00A0" : c}
          </motion.span>
        ))}
      </motion.h2>
    </motion.div>
  );
};

export default Top;
