import styles from '../style';
import { discount, heroImage } from '../assets';
import { GetStarted } from '../components';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col select-none sm:mt-[55px] mb-20`} >
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-14 px-6`}>
        <div className='flex flex-row items-center py-0 bg-discount-gradient rounded-[10px] mb-2'>
          {/* <img src={discount} alt='discount' className='w-[28px] h-[28px]'/>
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>10%</span> Discount For {' '}
            <span className='text-white'>Early</span> Registrations
          </p> */}
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold sm:text-[24px] text-[20px] text-white sm:leading-[40px] leading-[30px]'>
            <span className='italic'> Welcome to </span><br/>
            <span className='text-[#33bbcf] text-[60px] leading-[65px]'>Mirai</span><br/>
            <span className='text-[#33bbcf] text-[35px]'>International Education</span> {' '}
          </h1>

          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>

        <h3 className='font-semibold ss:text-[24px] text-[20px] text-white sm:leading-[40px] leading-[35px] w-full'>"Let's find your dreams with us."</h3>

        <div className='flex sm:flex-row flex-col mt-[30px]'>
          <p className='font-poppins sm:text-[22px] text-[17px] font-bold text-white sm:leading-[30px] leading-[23px]'>
            We Offer You
          </p>
          <Typed className='font-poppins sm:text-[24px] text-[17px] font-bold sm:pl-2 text-gradient ss:leading-[30px] leading-[23px]'
            strings={['free consultation', 'help in studying and working abroad', 'free interview preparation', 'foreign language classes', 'skill development', 'easy documentation and translation', 'cultural program', 'special japanese classes', 'online seminars directly from Japan']}
            typeSpeed={70}
            backSpeed={40}
            loop
          />
        </div> 

        <p className={`${styles.paragraph} max-w-[600px] mt-5 font-poppins`}>
          Our platform guides and supports the student to find the best school or college all around
          the world. We will walk you through the process by providing valuable information and 
          guidance, making sure that you transition to your new college seamlessly.
        </p>
      </div>

      <div className={`flex flex-1 ${styles.flexCenter} md:my-0 my-5`}>
        <img src={heroImage} alt='illustration' className='w-[100%] h-[100%] relative z-[2]' />
        <div className='absolute z-[0] w-[40%] h-[40%] top-0 pink__gradient' />
        <div className='absolute z-[1] w-[40%] h-[80%] rounded-full bottom-40 white__gradient' />
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
      </div>
    </section>
  );
}

export default Hero;
