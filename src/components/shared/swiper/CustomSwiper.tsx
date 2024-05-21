// 'use client';

// import React, { Children, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Scrollbar } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/autoplay';
// import 'swiper/css/scrollbar';
// import './swiperStyle.css';
// import Cards from '../cards/Cards';
// import AgentCards from '../cards/AgentCards';



// const CustomSwiper = ({scrollbar=true , data, agent=false, developer=false}) => {
//   const [swiper, setSwiper] = useState(null);
//   const modulesArray = scrollbar ? [Autoplay, Scrollbar] : [Autoplay];

//   return (
//       <div className= "w-full ml-30 flex-center overflow-visible">
//           <Swiper
//             slidesPerView={'auto'}
//             spaceBetween={30}
//             loop={true}
//             autoplay={{
//               delay: 2500,
//               disableOnInteraction: true,
//             }}
//             watchSlidesProgress={true}
//             onSwiper={setSwiper}
//             modules={modulesArray}
//             scrollbar={
//                 scrollbar ? { hide: false } : null
//               }
//             breakpoints={{
//             640: {
//                 slidesPerView: 2,
//             },
//             768: {
//                 slidesPerView: 3,
//             },
//             1440: {
//                 slidesPerView: 4,
//                 spaceBetween: 30
//             },
//             1500: {
//                 slidesPerView: 5,
//             },
//             }}
//           >
//               {data?.map((prop, index)=>(
//                 <SwiperSlide key={index} className='mb-[76px]'>
//                     <Cards properties = {prop} link={'/property-details'}>
//                         {agent && <AgentCards agentId={prop.agentId} />}
//                         {developer && <AgentCards agentId={prop.agentId}/>}
//                     </Cards>
//                 </SwiperSlide>
//                 ))}
//           </Swiper>

//       </div>
//   );
// };

// const CustomSwiperSlide = ({children})=>{
//     return (
//     <>  
//       <SwiperSlide className='mb-[76px]'>
//         {children}
//       </SwiperSlide>
//     </>
//   );
// }

// export {CustomSwiper, CustomSwiperSlide};



'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import './swiperStyle.css';

const CustomSwiper = ({scrollbar=true, children}) => {
  const [swiper, setSwiper] = useState(null);
  const modulesArray = scrollbar ? [Autoplay, Scrollbar] : [Autoplay];

  return (
      <div className= "w-full ml-30 flex-center overflow-visible">
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            watchSlidesProgress={true}
            onSwiper={setSwiper}
            modules={modulesArray}
            scrollbar={
                scrollbar ? { hide: false } : null
              }
            breakpoints={{
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            1500: {
                slidesPerView: 5,
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
