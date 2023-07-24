import React from 'react'
import './index.css'

const Recipies = ({bg}) => {
  const beforeStyle = {
    '--before-bg': bg || '#e5e7eb',
  };

  return (
    <section style={beforeStyle} id="recipies" className='px-4 py-16 bg-[#e5e7eb] md:grid md:grid-cols-2 gap-16 md:px-[20%] md:pb-32 md:items-center md:justify-center lg:grid lg:grid-cols-4'>
        <div className="card my-16">
          <div className="img h-[80px] w-[80px] rounded-full mb-[30px]"><img className='rounded-full' src="../assets/menu1.png" alt="" /></div>
          <h3 className="title text-xl uppercase tracking-[3px] mb-4 text-orange-500">Enjoy Eating</h3>
          <div className="desc text-sm capitalize text-[#868e96]">A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
        </div>

        <div className="card my-16">
          <div className="img h-[80px] w-[80px] rounded-full mb-[30px]"><img className='rounded-full' src="../assets/menu2.svg" alt="" /></div>
          <h3 className="title text-xl uppercase tracking-[3px] mb-4 text-orange-500">Fresh Sea Foods</h3>
          <div className="desc text-sm capitalize text-[#868e96]">A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
        </div>

        <div className="card my-16">
          <div className="img h-[80px] w-[80px] rounded-full mb-[30px]"><img className='rounded-full' src="../assets/menu3.jpg" alt="" /></div>
          <h3 className="title text-xl uppercase tracking-[3px] mb-4 text-orange-500">Cup of Coffees</h3>
          <div className="desc text-sm capitalize text-[#868e96]">A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
        </div>

        <div className="card my-16">
          <div className="img h-[80px] w-[80px] rounded-full mb-[30px]"><img className='rounded-full' src="../assets/menu4.png" alt="" /></div>
          <h3 className="title text-xl uppercase tracking-[3px] mb-4 text-orange-500">Meat Eaters</h3>
          <div className="desc text-sm capitalize text-[#868e96]">A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
        </div>
    </section>
  )
}

export default Recipies
