import React from 'react';
import { useLocation } from 'react-router-dom';
import { Hero, Stats, Billing, Business, CardDeal, Testimonials, Clients, CTA, Apply, Offer, LinkBar } from '../components';
import styles from "../style";

const Home = () => {
  const loc = useLocation();
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
          <Apply />
          <Offer />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
        </div>
      </div>
    </div>
  );
}

export default Home