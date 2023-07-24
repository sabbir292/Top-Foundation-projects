import React, { useState, useEffect } from 'react'
import './Menu.css'

const menuData = [
    {
        id: 1,
        url: '../assets/about1.jpg',
        title: 'Grilled Caesar salad, shaved reggiano',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...',
        price: '$12.00'
    },
    {
        id: 2,
        url: '../assets/slide2.jpeg',
        title: 'Grilled Caesar salad, shaved reggiano',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...',
        price: '$12.00'
    },
    {
        id: 3,
        url: '../assets/slide3.jpeg',
        title: 'Grilled Caesar salad, shaved reggiano',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...',
        price: '$12.00'
    },
    {
        id: 4,
        url: '../assets/about4.webp',
        title: 'Grilled Caesar salad, shaved reggiano',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...',
        price: '$12.00'
    },
    {
        id: 5,
        url: '../assets/slide5.jpg',
        title: 'Grilled Caesar salad, shaved reggiano',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...',
        price: '$12.00'
    },
    {
        id: 6,
        url: '../assets/about1.jpg',
        title: 'Grilled Caesar salad, shaved reggiano',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...',
        price: '$12.00'
    },
    {
        id: 7,
        url: '../assets/about1.jpg',
        title: 'Grilled Caesar salad, shaved reggiano',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...',
        price: '$12.00'
    },
    {
        id: 8,
        url: '../assets/slide6.jpg',
        title: 'Grilled Caesar salad, shaved reggiano',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...',
        price: '$12.00'
    },
]


const Menu = () => {



    const menuCard = menuData.map((item, idx) => {
        const { id, url, title, description, price } = item
        let isReverseOrder = false;
      
        const [windowWidth, setWindowWidth] = useState(window.innerWidth);

        let largeScrn = false

        if(windowWidth>1023){
            largeScrn = true
        }else{
            largeScrn = false
        }

        // useEffect hook to attach the resize event listener and update the window width
        useEffect(() => {
          const handleResize = () => {
            setWindowWidth(window.innerWidth);
          };
      
          // Attach the event listener to the window
          window.addEventListener('resize', handleResize);
      
          // Clean up the event listener on component unmount
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);
        
        
        if (((idx + 1) % 4 === 0 || (idx + 1) % 4 === 3 || idx % 4 === 3) && largeScrn) {
            isReverseOrder = true;
            console.log(isReverseOrder)
        } else {
            isReverseOrder = false;
            console.log(isReverseOrder)
        }

        return (
            <div>
                {isReverseOrder ? (


                    <div className={`flex flex-col lg:grid lg:grid-cols-2`}>

                        <div className="typo bg-white p-8">
                            <h1 className="title text-xl font-thin pb-4">{title}</h1>
                            <p className="desc text-sm pb-4 text-[#919396]">{description}</p>
                            <p className="price text-2xl text-orange-500">{price}</p>
                        </div>
                        <div style={{ backgroundImage: `url(${url})` }} className="menu-img w-full h-[13rem] lg:h-full bg-center bg-no-repeat bg-cover"></div>
                    </div>
                ) : (
                    <div className={`flex flex-col lg:grid lg:grid-cols-2`}>
                        <div style={{ backgroundImage: `url(${url})` }} className="menu-img h-[13rem] w-full lg:h-full bg-center bg-no-repeat bg-cover"></div>
                        <div className="typo bg-white p-8">
                            <h1 className="title text-xl font-thin pb-4">{title}</h1>
                            <p className="desc text-sm pb-4 text-[#919396]">{description}</p>
                            <p className="price text-2xl text-orange-500">{price}</p>
                        </div>
                    </div>
                )}
            </div>
        )
    })
    return (
        <section  className="menu bg-[#e5e7eb] px-4 md:px-[10%] lg:px-[20%] pb-64 shadow-none">
            <div className='flex flex-col items-center'>
                <div className="line outline-none h-[2px] border border-orange-500 w-20 my-10"></div>
                <h1 className="title text-5xl uppercase font-extrabold text-center max-w-[25rem] lg:max-w-full tracking-normal mb-28">Our Menu</h1>
            </div>
            <div className='md:grid md:grid-cols-2 shadow-sm'>
                {menuCard}
            </div>
        </section>
    )
}

export default Menu
