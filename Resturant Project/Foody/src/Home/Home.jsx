import React from 'react'
import Hero from '../Hero/Hero'
import Recipies from '../Recipies/Recipies'
import About from '../About/About'
import SpecialMenu from '../SpecialMenu/Special'
import Menu from '../Menu/Menu'
import Testimonial from '../Testimonial/Testimonial'
import Blog from '../Blog/Blog'


const Home = () => {
  return (
    <div>
      <Hero/>
      <Recipies />
      <About />
      <SpecialMenu />
      <Menu />
      <Testimonial />
      <Blog />
    </div>
  )
}

export default Home

