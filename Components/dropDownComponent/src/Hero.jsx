import car from '../src/assets/whitejeep.png'
const Hero = () => {
  return (
    <section className="even-col p-4 md:px-[10%] lg:px-[20%] lg:min-h-[70vh] relative">
        <div className="hero-cont-1">
            <h1 className='primary-heading-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p className='primary-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo earum nisi fugiat? Omnis veritatis assumenda facilis beatae. Ipsum dolor incidunt eaque ullam porro minima amet, libero officia dicta, quaerat nobis?</p>
            <div className='btn-pairs'>
                <button className='btn-primary'>Book Now</button>
                <button>See all cars</button>
            </div>
        </div>

        <div className='hero-cont-2 h-full relative'>
            <img className='md:scale-125 mt-20' src={car} alt="" />
            <img className=' background absolute-center h-full md:h-[150%] w-full md:w-[70%] max-h-[850px]' src="https://i.pinimg.com/236x/9a/6a/1a/9a6a1ac67514b72545ad9d71960f9d3c.jpg" alt="" />
        </div>
    </section>
  )
}

export default Hero
