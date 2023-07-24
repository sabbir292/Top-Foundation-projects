import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './special.css'
// import required modules
import { Pagination } from 'swiper/modules';


const SpecialMenu = () => {

  const slides = [
    {
      title: 'Organic tomato salad, Gorgonzola cheese, Capers',
      price: '$11.50',
      url: '../assets/about1.jpg',
    },
    {
      title: 'Baked Broccoli',
      price: '$12.50',
      url: '../assets/slide2.jpeg',
    },
    {
      title: 'Spicy meatballs',
      price: '$11.00',
      url: '../assets/about4.webp',
    },
    {
      title: 'eggplant parimigiana',
      price: '$12.00',
      url: '../assets/slide5.jpg',
    },
  ]


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


  const Slides = slides.map((item, idx) => {
    return (
      <SwiperSlide  className='group my-32 flex flex-col gap-10 items-center justify-center overflow-hidden mb-28 h-[65vh] lg:h-[80vh]' >
        <div style={{backgroundImage:`url(${item.url})`}} className='h-full w-full absolute top-0 left-0 z-[-1] bg-right bg-cover bg-no-repeat transition duration-300 ease-in group-hover:scale-[115%]'></div>
        <div className="overlay absolute h-full w-full bg-[#000000] z-[-1] opacity-[.4]"></div>
        <div className="pricing bg-orange-500 h-32 w-32 rounded-full flex items-center justify-center text-xl font-semibold text-white group-hover:bg-transparent group-hover:border-4 group-hover:border-white transition duration-300 ease-in">{item.price}</div>
        <h1 className="title text-xl font-bold text-white uppercase max-w-[60%]">{item.title}</h1>
      </SwiperSlide>
    )
  })


  return (
    <section className="special-menu py-72 pt-36 transition ease-in delay-150 relative">
      <div className='flex flex-col items-center'>
        <div className="line outline-none h-[2px] border border-orange-500 w-20 my-10"></div>
        <h1 className="title text-5xl uppercase font-extrabold text-center max-w-[25rem] lg:max-w-full tracking-normal mb-4">special menu</h1>
      </div>
      <Swiper
        slidesPerView={1}
        {...swiperParams}
        centeredSlides={true}
        spaceBetween={35}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper specialSlider"
      >
        {Slides}
      </Swiper>
    </section>
  );
}

export default SpecialMenu
