import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiperAnimation.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <div className='swiper-div'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Advertisement 1</SwiperSlide>
        <SwiperSlide>Advertisement 2</SwiperSlide>
        <SwiperSlide>Advertisement 3</SwiperSlide>
        <SwiperSlide>Advertisement 4</SwiperSlide>
      </Swiper>
    </div>
  );
}
