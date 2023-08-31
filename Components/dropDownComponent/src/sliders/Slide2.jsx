import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const slide2 = ({ slides }) => {
  const [currentIndex, setcurrentIndex] = useState(0);

  const slide = slides[currentIndex];
 function slideLeft() {
  setcurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  }

  function slideRight() {
    setcurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }

  function slideToBulletIdx(idx){
    setcurrentIndex(idx)
  }

  useEffect(() => {
    const intervalId = setInterval(slideRight, 5000);
    return () => clearInterval(intervalId); // Clean up on component unmount
  }, []);

  return (
    <div className="relative min-w-full grid place-items-center">

      <div 
        onClick={slideLeft}
        className="absolute-left left-6 text-3xl opacity-60">❮</div>
      <div 
        onClick={slideRight}
        className="absolute-right right-0 text-3xl opacity-60">❯</div>
      <motion.div
        key={slide.id}
        initial={{ opacity: 0 }} // Initial state
        animate={{ opacity: 1 }} // Animation state
        exit={{ opacity: 0 }} // Exit state
        transition={{ duration: 0.8 }} // Animation duration
        className="relative grid gap-2 place-items-center text-center shadow-lg pb-12 p-4 bg-white my-10 min-w-full md:min-w-[49%] lg:min-w-[32%] h-52"
      >
        <div className="text-orange-500 text-2xl font-extrabold">
          {Array.from({ length: slide.ratings }).map((_, index) => (
            <span key={index}>&#9733;</span>
          ))}
        </div>

        <p className="text-sm">{slide.message}</p>
        <h3 className="text-lg font-bold">{slide.userName}</h3>
        <p className="text-sm mt-[-.7rem]">{slide.occupation}</p>
        <div className="absolute bottom-[-1rem]">
          <img
            alt="testimonial"
            src={slide.url}
            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
          />
        </div>

        <div className="absolute right-8 bottom-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="block w-12 h-12 text-orange-400 mb-4"
            viewBox="0 0 975.036 975.036"
          >
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
        </div>
      </motion.div>
      <div className="flex gap-2">
      {slides.map((item,idx) =>{
        return(
          <div 
            className={`h-3 w-3 rounded-full ${currentIndex === idx ? 'bg-blue-500': 'bg-slate-300'} cursor-pointer`}
            key={idx}
            onClick={()=> slideToBulletIdx(idx)}>
          </div>
        )
      })}
      </div>
    </div>
  );
};

export default slide2;
