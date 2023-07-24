import React from 'react'
import './Blog.css'

const blogData = [
    {
        url: '../assets/about1.jpg',
        title: 'How to cook pasta?',
        date: 'April 22, 2023',
        desc: 'Boil salted water, add pasta, cook until al dente, drain, toss with sauce, serve hot. Enjoy the delicious homemade pasta!',
    },
    {
        url: '../assets/about4.webp',
        title: 'How to cook pasta?',
        date: 'April 22, 2023',
        desc: 'Boil salted water, add pasta, cook until al dente, drain, toss with sauce, serve hot. Enjoy the delicious homemade pasta!',
    },
]

const blogCard = blogData.map((item, idx) => {
    const { url, title, date, desc } = item
    return (
        <div key={idx} className="blogs">
            <div>
                <div className='w-full h-[13rem] md:h-[17rem] lg:h-[19rem] bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${url})` }}></div>
                <div className='px-8 bg-white'>
                    <h1 className='capatalize text-orange-500 text-xl pt-8'>{title}</h1>
                    <p className='text-sm text-[#999999] pb-6 pt-1 flex items-center gap-2'><span className='inline-block h-3 w-3'><img src="../assets/calender.png" alt="" /></span>{date}</p>
                    <p className='text-sm text-[#999999] leading-6 pb-4'>{desc}</p>
                    <button className='bg-orange-500 text-xs text-white tracking-widest px-6 py-2 uppercase mb-8 hover:bg-[#999999]'>Read More</button>
                </div>
            </div>
        </div>
    )
})

const Blog = () => {
    return (
        <section className="blog bg-[#e5e7eb] px-4 md:px-[10%] lg:px-[20%] pb-72">
            <div className='flex flex-col items-center'>
                <div className="line outline-none h-[2px] border border-orange-500 w-20 my-10"></div>
                <h1 className="title text-5xl uppercase font-extrabold text-center max-w-[25rem] lg:max-w-full tracking-normal mb-28">Blog</h1>
            </div>
            <div className='md:grid grid-cols-2 gap-7'>
                {blogCard}
            </div>
        </section>
    )
}

export default Blog
