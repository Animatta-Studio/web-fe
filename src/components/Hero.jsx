import styles from '../style';
import { discount, heroImage, heroGif } from '../assets';
import { GetStarted } from '../components';
import Typed from 'react-typed';
import { motion } from 'framer-motion';
import 'react-typed/dist/animatedCursor.css';

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col select-none sm:mt-[55px] mt-[30px] mb-20`} >
      <motion.div initial={{x: '-100vw'}} animate={{x: 0}} transition={{type:'spring', duration:1.3, bounce:0.3}} className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-14 px-6`}>
        <div className='sm:hidden absolute h-1/2 w-full msm:bg-none opacity-80 bg-worldmap bg-contain bg-center bg-no-repeat' />
        <div className='flex flex-row items-center py-0 bg-discount-gradient rounded-[10px] mb-2 z-1'>
          {/* <img src={discount} alt='discount' className='w-[28px] h-[28px]'/>
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>10%</span> Discount For {' '}
            <span className='text-white'>Early</span> Registrations
          </p> */}
        </div>

        <div className='flex flex-row justify-between items-center w-full z-[1]'>
          <h1 className='flex-1 font-poppins font-semibold sm:text-[24px] text-[20px] text-white sm:leading-[40px] leading-[30px]'>
            <span className='italic'> Welcome to </span><br/>
            <span className='text-[#33bbcf] text-[60px] leading-[65px]'>Mirai</span><br/>
            <span className='text-[#33bbcf] text-[35px]'>International Education</span> {' '}
          </h1>

          <div className='ss:flex hidden md:mr-4 mr-0 z-1'>
            <GetStarted />
          </div>
        </div>

        <h3 className='font-semibold ss:text-[24px] text-[20px] text-white sm:leading-[40px] leading-[35px] w-full z-[1]'>"Let's find your dreams with us."</h3>

        <div className='flex sm:flex-row flex-col mt-[30px] z-[1]'>
          <p className='font-poppins sm:text-[22px] text-[17px] font-bold text-white sm:leading-[30px] leading-[23px]'>
            We Offer You
          </p>
          <Typed className='font-poppins msm:text-[24px] sm:text-[17px] text-[15px] font-bold sm:pl-2 text-gradient ss:leading-[30px] leading-[23px]'
            strings={['free consultation', 'help in studying and working abroad', 'free interview preparation', 'foreign language classes', 'skill development', 'easy documentation and translation', 'cultural program', 'special japanese classes', 'online seminars directly from Japan']}
            typeSpeed={70}
            backSpeed={40}
            loop
          />
        </div> 

        <p className={`${styles.paragraph} text-[#ffffff] max-w-[600px] mt-5 font-poppins font-semibold z-[1]`}>
          Our platform guides and supports the student to find the best school or college all around
          the world. We will walk you through the process by providing valuable information and 
          guidance, making sure that you transition to your new college seamlessly.
        </p>
      </motion.div>

      <motion.div initial={{x: '100vw'}} animate={{x: 0}} transition={{type:'spring', duration:1.3, bounce:0.3}} className={`flex flex-1 ${styles.flexCenter} md:my-0 my-5`}>
        <img src={heroGif} alt='illustration' className='w-[100%] h-[100%] relative z-[2]' />
        <div className='absolute md:inline hidden z-[0] w-[40%] h-[40%] top-0 pink__gradient' />
        <div className='absolute md:inline hidden z-[1] w-[30%] h-[60%] rounded-full bottom-40 white__gradient' />
        <div className='absolute md:inline hidden z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
      </motion.div>
    </section>
  );
}

export default Hero;
