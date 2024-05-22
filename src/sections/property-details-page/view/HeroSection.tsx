"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './swiperStyle.css'

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import HeroContainer from '@/sections/hero/HeroContainer';
import { HERO_IMAGES } from '@/constants/constants';
import Image from 'next/image';

const HeroSection = () => {
  const [swiper, setSwiper] = useState(null);

  return (
    <HeroContainer>
        <Swiper 
          navigation={true}
          modules={[Navigation, Autoplay]}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
        >
          {HERO_IMAGES.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img.url} alt={`Hero-image-${index}`} className='w-full max-h-[600px] object-cover'/>
            </SwiperSlide>
          ))}
        </Swiper>
    </HeroContainer>
  )
}

export default HeroSection