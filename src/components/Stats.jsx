import { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "react-typed/dist/animatedCursor.css";
import { motion, useInView, useAnimation } from 'framer-motion';
import { stats } from "../constants";
import styles from "../style";

const Stats = () => {
  const [trigOn, setTrigOn] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-15%' });
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
    <motion.section ref={ref} animate={animation} className={`${styles.flexCenter} max-w-[1400px] flex-row rounded select-none`}>
      <ScrollTrigger onEnter={() => setTrigOn(true)} onExit={() => setTrigOn(false)}>
        <div className='grid sm:grid-cols-4 grid-cols-2 gap-2 rounded group'>
          {stats.map((stat) => (
            <div key={stat.id} className='flex flex-1 flex-col justify-center items-center msm:px-20 px-8 sm:py-10 py-4 rounded bg-white/10 duration-500 hover:!blur-none group-hover:scale-[0.85] hover:!scale-100'>

              <div className='bg-gray-400 rounded-full'>
                <img src={stat.img} alt='icon' className='flex msm:w-[100px] w-[60px] msm:h-[100px] h-[60px] justify-center bg-[#64C0FF] rounded-full msm:p-3 p-2'/>
              </div>
              <h6 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
                {trigOn ? (<CountUp key={`${stat.id}-count`} start={0} end={stat.value} duration={1} />) : (0)}
                +
              </h6>
              <p className="flex flex-1 font-poppins font-normal text-center items-center justify-center sm:text-[15px] text-[11px] xs:leading-[22px] leading-[17px] text-gradient">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </ScrollTrigger>
    </motion.section>
  );
};

export default Stats;
