import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Testimonial.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const testimonialData = [
    {
        testimonial : '"I had the most delightful dining experience at Foody Restaurant! From the moment I stepped in, I was greeted with warm smiles and exceptional service. The ambiance was inviting, creating the perfect setting for a memorable meal."',
        userImage : '../assets/user1.jpg',
        userName: 'Sanjana Pal',
        userOccupation : 'ceo of Foody'
    }, 
    {
        testimonial : '"I had the most delightful dining experience at Foody Restaurant! From the moment I stepped in, I was greeted with warm smiles and exceptional service. The ambiance was inviting, creating the perfect setting for a memorable meal."',
        userImage : '../assets/user2.jpg',
        userName: 'Michel',
        userOccupation : 'ceo of Noodlify'
    }, 
    {
        testimonial : '"I had the most delightful dining experience at Foody Restaurant! From the moment I stepped in, I was greeted with warm smiles and exceptional service. The ambiance was inviting, creating the perfect setting for a memorable meal."',
        userImage : '../assets/user3.jpg',
        userName: 'Jessica Hossain',
        userOccupation : 'ceo of Noodlify'
    }, 
]
const Testimonial = ({bg,mainBg}) => {
  console.log(bg,mainBg)

  const beforeStyle = {
    '--before-bg': bg || '#e5e7eb', // Use bg if provided, otherwise use default value
    '--main-bg' : mainBg || '#e5e7eb',
  };


  
    const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const testiMonials = testimonialData.map((item,idx)=>{
    const {testimonial, userImage, userName, userOccupation} = item
    return (
        <SwiperSlide className='swiper-slide flex flex-col gap-10 items-start text-start px-4 mb-28 bg-transparent'>
            <p className='text-lg tracking-wider'>{testimonial}</p>
            <div className='flex gap-5 items-center'>
              <div className='h-20 w-20 bg-center bg-cover bg-no-repeat rounded-full' style={{backgroundImage:`url(${userImage})`}}></div>
              <div>
                <p className='uppercase tracking-widest text-base'>{userName}</p>
                <p className='uppercase text-[.9rem] text-[#bdb6b6]'>{userOccupation}</p>
              </div>
            </div>
        </SwiperSlide>
    )
  })

  return (
    <section style={beforeStyle} className={`testimonial md:px-[10%] lg:px-[30%] pb-48 bg-[${mainBg}]`}>
          <div className='flex flex-col items-center'>
                <div className="line outline-none h-[2px] border border-orange-500 w-20 my-10"></div>
                <h1 className="title text-5xl uppercase font-extrabold text-center max-w-[25rem] lg:max-w-full tracking-normal mb-28">Testimonial</h1>
            </div>

            <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        effect='fade'
        speed={1500}
        loop = {true}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
       {testiMonials}
        <div className="autoplay-progress opacity-0" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  
    </section>
  )
}

export default Testimonial
