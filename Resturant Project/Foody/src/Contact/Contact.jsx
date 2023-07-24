import React from 'react'
import Hero from '../Hero/Hero'
import Connect from '../ContactPage/Connect'
import Testimonial from '../Testimonial/Testimonial'

const Contact = () => {
  return (
    <div>
      <Hero bg = '#fff'/>
      <Connect bg = '#e5e7eb' mainBg='#fff'/>
      <Testimonial bg = '#fff' mainBg='#e5e7eb'/>
    </div>
  )
}

export default Contact

