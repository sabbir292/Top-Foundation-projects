import React from 'react'
import About from '../About/About.jsx'
import Chef from './Chef.jsx'
import Hero from '../Hero/Hero.jsx'

const AboutPage = () => {
  return (
    <div>
      <Hero bg= '#FFFFFF'/>
      <About bg = '#e5e7eb'/>
      <Chef />
    </div>
  )
}

export default AboutPage
