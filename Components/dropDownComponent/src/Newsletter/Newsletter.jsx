import React from 'react'
import whiteJeep from '../assets/whitejeep.png'

const Newsletter = () => {
  return (
    <section className='bg-orange-500 lg:min-h-[30rem] lg:grid lg:place-content-center px-4 md:pl-[10%] lg:pl-[20%]'>
        <div className='grid gap-4 md:gap-12 md:grid-cols-2'>
            <div className='grid place-content-center gap-4 py-10'>
                <h1 className='text-3xl font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing.</h1>
                <form action="#"
                    className='flex gap-4 bg-white p-3 rounded-md max-w-[32rem]'
                >
                    <input 
                        className='text-sm'
                        type="email" placeholder='Your email address'/>
                    <button className='bg-orange-600 rounded-md py-2 px-6 text-white font-semibold ml-auto'>Subscribe</button>
                </form>
            </div>
            <div 
                // style={{backgroundImage: `url('${whiteJeep}')`}}
                className='background'
                >
                <img 
                    className='scale-[110%] hidden md:flex'
                    src={whiteJeep} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Newsletter
