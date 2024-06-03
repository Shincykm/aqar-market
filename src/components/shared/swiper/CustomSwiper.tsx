'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import './swiperStyle.css';

const CustomSwiper = ({scrollbar=true, children, slidesPerView=3, spaceBetween=10}) => {
  const [swiper, setSwiper] = useState(null);
  const modulesArray = scrollbar ? [Autoplay, Scrollbar] : [Autoplay];

  return (
      <div className= "overflow-hidden z-0">
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={spaceBetween}
            loop={true}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: true,
            // }}
            watchSlidesProgress={true}
            onSwiper={setSwiper}
            modules={modulesArray}
            scrollbar={
                scrollbar ? { hide: false } : null
              }
            breakpoints={{
            640: {
                slidesPerView: slidesPerView-2 >0 ? slidesPerView-2 : 1,
                spaceBetween:10,
            },
            768: {
                slidesPerView: slidesPerView-2 >0 ? slidesPerView-2 : 1,
                spaceBetween:0,
            },
            1024: {
                slidesPerView: slidesPerView-1,
                spaceBetween:20,
            },
            1440: {
                slidesPerView: slidesPerView,
                spaceBetween:spaceBetween,
            },
            1500: {
                slidesPerView: (slidesPerView+1) ,
                spaceBetween:spaceBetween,
            },

            2000: {
              slidesPerView: (slidesPerView+2),
              spaceBetween:spaceBetween,
          },
            }}
          >
            {React.Children.map(children, (child, index) => (
              <SwiperSlide key={index} className="mb-[76px]">
                {child}
              </SwiperSlide>
            ))}
          </Swiper>

      </div>
  );
};


export default CustomSwiper;
