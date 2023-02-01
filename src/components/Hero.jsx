import styles from '../style';
import { discount, japanesePeople } from '../assets';
import { GetStarted } from '../components';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col`} >
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-14 px-6`}>
        <div className='flex flex-row items-center py-[2px] px-2 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt='discount' className='w-[28px] h-[28px]'/>
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>10%</span> Discount For {' '}
            <span className='text-white'>Early</span> Registrations
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold sm:text-[50px] text-[30px] text-white sm:leading-[60px] leading-[40px]'>
            The Next <br className='sm:block hidden' />{' '}
            <span className='text-gradient'>Generation</span> {' '}
          </h1>

          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>

        <h1 className='font-poppins font-semibold ss:text-[35px] text-[24px] text-white sm:leading-[55px] leading-[40px] w-full'>Language Consultancy.</h1>

        <div className='flex justify-center items-center'>
          <p className='font-poppins sm:text-[28px] text-[18px] font-bold text-white sm:leading-[30px] leading-[24px]'>
            We Offer You
          </p>
          <Typed className='font-poppins sm:text-[30px] text-[23px] font-bold pl-2 text-gradient ss:leading-[40px] leading-[29px]'
            strings={['apples', 'pomegranates', 'bananas', 'mangoes', 'etc']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div> 

        <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
          Our team of experts always focuses on giving student true information about Japan, Japanese culture
          and traditions so that they can feel easier and tensionless in India, even after their entry into Japan.
          It’s a team packed with experience and mature professional. We truly feel our responsibility to uplift
          the level of Japanese education standard in India and expansion of it.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-5`}>
        <img src={japanesePeople} alt='illustration' className='w-[90%] h-[80%] relative z-[2]' />
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
        <div className='absolute z-[1] w-[40%] h-[80%] rounded-full bottom-40 white__gradient' />
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
      </div>
    </section>
  );
}

export default Hero;