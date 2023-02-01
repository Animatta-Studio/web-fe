import { useState } from 'react';
import styles from '../style';
import { arrowUp } from '../assets';
import Apply from './Apply';

const GetStarted = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={`${styles.flexCenter} w-[120px] h-[120px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`} onClick={() => setShow(val => !val)}>
      <div className={`${styles.flexCenter} flex-col bg-primary-0 w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px]'>
            <span className='text-gradient'>Get</span>
          </p>
          <img src={arrowUp} alt='arrow' className='w-[23px] h-[23px] object-contain' />
        </div>
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-gradient'>Started</span>
          </p>
      </div>
    </div>
  )
}

export default GetStarted;