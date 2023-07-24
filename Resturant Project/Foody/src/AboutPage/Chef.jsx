import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Chef.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const chefData = [
    {
        userImage : '../assets/chef1.webp',
        userName: 'Michel Noob',
        userOccupation : 'ceo of Foody'
    }, 
    {
        userImage : '../assets/chef2.webp',
        userName: 'Jonh Doe',
        userOccupation : 'ceo of Noodlify'
    }, 
    {
        userImage : '../assets/chef3.webp',
        userName: 'Jessica Hossain',
        userOccupation : 'ceo of Noodlify'
    }, 
    {
        userImage : '../assets/chef1.webp',
        userName: 'Michel Noob',
        userOccupation : 'ceo of Foody'
    }, 
    {
        userImage : '../assets/chef2.webp',
        userName: 'Jonh Doe',
        userOccupation : 'ceo of Noodlify'
    }, 
    {
        userImage : '../assets/chef3.webp',
        userName: 'Jessica Hossain',
        userOccupation : 'ceo of Noodlify'
    }, 
]
const Testimonial = () => {

    const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };


  const [swiperParams, setSwiperParams] = useState({
    slidesPerView: 1, // Default slidesPerView
    spaceBetween: 30, // Adjust the spacing between slides as needed
    // Add any other Swiper options you want to use
  });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      // Adjust the number of slidesPerView based on the screen width
      const newSlidesPerView = screenWidth >= 1200 ? 3 : screenWidth >= 768 ? 2 : 1;
      setSwiperParams((prevParams) => ({
        ...prevParams,
        slidesPerView: newSlidesPerView,
      }));
    };

    // Attach the event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call the handleResize function on initial mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const chefs = chefData.map((item,idx)=>{
    const {testimonial, userImage, userName, userOccupation} = item
    return (
        <SwiperSlide className='swiper-slide flex flex-col gap-10 items-start text-start bg-transparent my-12 mb-20 w-full  md:w-[50%]'>
            <div className='flex flex-col items-center h-[28rem] w-full md:h-[28rem]'>
              <div className='h-full w-full bg-center bg-cover bg-no-repeat' style={{backgroundImage:`url(${userImage})`}}></div>
              <div className='flex flex-col items-center py-10 justify-center bg-white w-full'>
                <p className='uppercase tracking-widest text-base'>{userName}</p>
                <p className='uppercase text-[.9rem] text-[#bdb6b6]'>{userOccupation}</p>
              </div>
            </div>
        </SwiperSlide>
    )
  })

  return (
    <section className="testimonial md:px-[10%] lg:px-[20%] pb-48 bg-[#e5e7eb] before:bg-[#fff]">
          <div className='flex flex-col items-center'>
                <div className="line outline-none h-[2px] border border-orange-500 w-20 my-10"></div>
                <h1 className="title text-5xl uppercase font-extrabold text-center max-w-[25rem] lg:max-w-full tracking-normal mb-28">Chefs</h1>
            </div>

            <>
      <Swiper
        spaceBetween={30}
        // slidesPerView={1}
        {...swiperParams}
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
        className="mySwiper chefSlide"
      >
       {chefs}
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

