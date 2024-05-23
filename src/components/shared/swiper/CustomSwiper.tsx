'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import './swiperStyle.css';

const CustomSwiper = ({scrollbar=true, children, slidesPerView=3}) => {
  const [swiper, setSwiper] = useState(null);
  const modulesArray = scrollbar ? [Autoplay, Scrollbar] : [Autoplay];

  return (
      <div className= "ml-30 flex items-center overflow-visible">
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={10}
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
                slidesPerView: 1,
                spaceBetween:10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween:20,
            },
            1024: {
                slidesPerView: slidesPerView-1,
                spaceBetween:20,
            },
            1440: {
                slidesPerView: slidesPerView,
                spaceBetween:30,
            },
            1500: {
                slidesPerView: (slidesPerView+1) ,
                spaceBetween:30,
            },

            2000: {
              slidesPerView: (slidesPerView+2),
              spaceBetween:40,
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
