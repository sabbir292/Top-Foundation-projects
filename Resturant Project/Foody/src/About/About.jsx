import React from 'react'
import './index.css'

const About = ({bg}) => {

  const beforeStyle = {
    '--before-bg': bg || '#e5e7eb', // Use bg if provided, otherwise use default value
  };

  return (
    <section style={beforeStyle} className={`relative about md:px-[10%] lg:px-[20%] ${bg? 'about-clip' : ''} pb-32`}>
      <div className="typo flex flex-col items-center px-4">
        <div className="line outline-none h-[2px] border border-orange-500 w-20 my-10"></div>
        <h1 className="title text-5xl uppercase font-extrabold text-center max-w-[25rem] lg:max-w-full tracking-normal mb-4">The Restaurant</h1>
        <p className="desc text-[#868e96] text-sm text-center md:max-w-xl">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
      </div>
      <div className="images px-4 my-8 flex flex-col gap-4 lg:my-16 lg:grid lg:grid-cols-3 items-center justify-center">
        <img className='h-[97%]' src="../assets/about1.jpg" alt="" />
        <div className='flex flex-col gap-4'>
        <img src="../assets/about2.jpg" alt="" />
        <img src="../assets/about3.jpg" alt="" />
        </div>
        <img className='w-full' src="../assets/about4.webp" alt="" />
      </div>
    </section>
  )
}

export default About
