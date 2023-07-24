import React from 'react'
import {Form} from 'react-router-dom'
import './Connect.css'

const Connect = ({bg, mainBg}) => {

  const beforeStyle = {
    '--before-bg': bg || '#e5e7eb', // Use bg if provided, otherwise use default value
    '--main-bg' : mainBg || '#e5e7eb',
  };

  return (
    <Form style={beforeStyle} className='form relative flex flex-col items-center w-[100vw] px-4 md:px-[10%] lg:px-[20%] py-32'>
        <div className='flex flex-col md:flex-row items-center gap-6 w-full'>
            <div className='flex flex-col w-full'>
                <label className='text-sm py-4 text-[#9b9ca0]' htmlFor="name">Name</label>
                <input className='border p-2 border-[#9b9ca0] outline-none  focus:border-orange-500' type="text" name="name" id="name" />
            </div>
            <div className='flex flex-col w-full'>
                <label className='text-sm py-4 text-[#9b9ca0]'  htmlFor="phone">Phone</label>
                <input className='border p-2 border-[#9b9ca0] outline-none focus:border-orange-500' type="number" name="phone" id="phone" /> 
            </div>
        </div>

            <div className='flex flex-col w-full mt-8'>
              <label className='text-sm text-[#9b9ca0]'  htmlFor="email">Email</label>
              <input className='border p-2 border-[#9b9ca0] outline-none  focus:border-orange-500' type="email" name="email" id="email" />
            </div>

            <div className='flex flex-col w-full mt-8'>
              <label className='text-sm text-[#9b9ca0]' htmlFor="message">Write Message</label>
              <input className='border border-[#9b9ca0] outline-none h-44 p-4 focus:border-orange-500' type="textarea" name='message' id='message' />
            </div>
            <button className='uppercase text-sm bg-orange-500 px-6 py-3 self-start my-4 tracking-widest text-white'>Send Message</button>
    </Form>
  )
}

export default Connect
