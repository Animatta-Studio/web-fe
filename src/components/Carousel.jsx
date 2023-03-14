import React from 'react';
import { slides } from "../constants";
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

const Carousel = () => {
  return (
    <motion.div initial={{y: '70vh'}} animate={{y: 0}} transition={{type:'spring', duration:1.3, bounce:0.3}} className="container select-none">
      <Swiper
        effect='coverflow'
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView='auto'
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        autoplay={{ delay: 1000, disableOnInteraction: true }}
        className="swiper_container"
      >
        {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
                <img src={slide} loading='lazy'/>
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
            </SwiperSlide>
        ))}

        <div className="slider-controller">
          <div className="lg:inline hidden z-[50] swiper-button-prev slider-arrow w-[2.1875rem] h-[2.1875rem] translate-x-[-33%] rounded-[50%] left-[33%] after:content-['']">
            <ion-icon name="arrow-back-outline" />
          </div>
          <div className="lg:inline hidden z-[50] swiper-button-next slider-arrow w-[2.1875rem] h-[2.1875rem] translate-x-[-33%] rounded-[50%] right-[32%] after:content-['']">
            <ion-icon name="arrow-forward-outline" />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </motion.div>
  );
};

export default Carousel;
