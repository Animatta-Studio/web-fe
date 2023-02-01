import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "react-typed/dist/animatedCursor.css";
import { stats } from "../constants";
import styles from "../style";

const Stats = () => {
  const [trigOn, setTrigOn] = useState(false);
  return (
    <section className={`${styles.flexCenter} max-w-[1300px] flex-row rounded`}>
      <ScrollTrigger onEnter={() => setTrigOn(true)} onExit={() => setTrigOn(false)}>
        <div className='grid sm:grid-cols-4 grid-cols-2 gap-1 rounded'>
          {stats.map((stat) => (
            <div key={stat.id} className='flex flex-1 flex-col justify-center items-center sm:px-20 px-8 sm:py-10 py-4 border rounded bg-[#acddde]'>
              <img src={stat.img} alt='icon' className='flex sm:w-[80px] w-[40px] justify-center' />
              <h6 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
                {trigOn ? (<CountUp key={`${stat.id}-count`} start={0} end={stat.value} duration={1} />) : (0)}
                +
              </h6>
              <p className="flex flex-1 font-poppins font-normal text-center items-center justify-center sm:text-[16px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </ScrollTrigger>
    </section>
  );
};

export default Stats;
