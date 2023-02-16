import React from 'react';
import { Hero, Stats, Testimonials, Affliation, Offer, LinkBar } from '../components';
import styles from "../style";

const Home = () => {
  return (
    <div className='mt-24'>
      <LinkBar />
      <div className={`bg-primary-0 ${styles.flexStart} relative`}>
        <div className={`${styles.boxWidth}`}>
          <Hero /> 
        </div>
      </div>

      <div className={`bg-primary-0 ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Offer />
          <Affliation />
          <Testimonials />
        </div>
      </div>
    </div>
  );
}

export default Home