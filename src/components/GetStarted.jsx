import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../style';
import { arrowUp } from '../assets';

const GetStarted = () => {
  const [show, setShow] = useState(false);
  return (
    <div className={`${styles.flexCenter} w-[120px] h-[120px] rounded-full duration-1000 hover:scale-125 bg-blue-gradient p-[2px] cursor-pointer group`} onClick={() => setShow(val => !val)}>
      <div className={`${styles.flexCenter} flex-col bg-primary-0  duration-1000 group-hover:bg-gray-600 w-[100%] h-[100%] rounded-full`}>
        <Link to='/apply'>
          <div className={`${styles.flexStart} flex-row`}>
            <p className='font-poppins font-medium text-[18px] leading-[23px]'>
              <span className='text-gradient'>Apply</span>
            </p>
            <img src={arrowUp} loading='eager' alt='arrow' className='w-[23px] h-[23px] object-contain' />
          </div>
          <p className='font-poppins font-medium text-[18px] leading-[23px] ml-2'>
            <span className='text-gradient'>Now</span>
          </p>
        </Link>
      </div>
    </div>
  )
}

export default GetStarted;