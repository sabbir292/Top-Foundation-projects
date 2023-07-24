import './Hero.css'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';s

// import required modules
import { Pagination } from 'swiper/modules';

const Hero = ({bg}) => {
  console.log(bg)
  const beforeStyle = {
    '--before-bg': bg || '#e5e7eb', // Use bg if provided, otherwise use default value
  };

  return (
    <section className ={`home relative`} id='home' style={beforeStyle}>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='slide1 flex items-center'>
          <div className='h-[100%] flex flex-col items-center justify-center md:max-w-[80%]'>
            <h1 className='title uppercase text-3xl md:text-8xl text-white font-extrabold'>Delicious Food</h1>
            <p className="desc text-[#999999] text-md font-regular max-w-sm py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium repellat saepe eveniet quis! Cum dolor commodi .</p>
            <button className="hero-btn uppercase border border-white text-md text-white font-light px-6 py-3 my-4">get started</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide2 flex items-center'>
          <div className='h-[100%] flex flex-col items-center justify-center md:max-w-[80%]'>
            <h1 className='title uppercase text-3xl md:text-8xl text-white font-extrabold'>Delicious Food</h1>
            <p className="desc text-[#868e96] text-md font-regular max-w-sm py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium repellat saepe eveniet quis! Cum dolor commodi .</p>
            <button className="hero-btn uppercase border border-white text-md text-white font-light px-6 py-3 my-4">get started</button>
          </div>
        </SwiperSlide>
        <SwiperSlide className='slide3 flex items-center'>
          <div className='h-[100%] flex flex-col items-center justify-center md:max-w-[80%]'>
            <h1 className='title uppercase text-3xl md:text-8xl text-white font-extrabold'>Delicious Food</h1>
            <p className="desc text-[#868e96] text-md font-regular max-w-sm py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium repellat saepe eveniet quis! Cum dolor commodi .</p>
            <button className="hero-btn uppercase border border-white text-md text-white font-light px-6 py-3 my-4">get started</button>
          </div>
        </SwiperSlide>

        

      </Swiper>
    </section>
  )
}

export default Hero
