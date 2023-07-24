import React, { useState } from 'react'
import {Link, NavLink, useMatch} from 'react-router-dom'
import './index.css'

const Nav = () => {
    const [showMenu, setshowMenu] = useState(false)

    function showMenuBar(){
        console.log('showMenu')
        setshowMenu(prev=> !prev)
        console.log(isMobileView)
    }

  return (
    <header className="header flex items-center justify-center">
        <nav className="navbar bg-black text-white md:flex md:justify-between md:bg-transparent md:max-w-[80%] items-center md:mt-10">
            <div className="logo-menu flex justify-between items-center p-4">
                <h3 className="logo uppercase text-[2rem] font-bold tracking-widest">foody</h3>
                <div className="menu-icon text-gray-500 border border-white-400 px-5 outline-none text-[1.5rem] flex items-center h-10 rounded-sm hover:cursor-pointer md:hidden" onClick={showMenuBar}><i class="fa-solid fa-bars"></i></div>
            </div>
            <ul className={`menu-items ${showMenu? 'show-menu': ''} flex flex-col md:flex-row md:items-center`}>
                <li className='md:mt-0'>
                    <NavLink  className={`flex active:border-b-orange-500 ${useMatch('/') ? 'text-orange-500' : 'text-white'}`} to={'/'}>Home</NavLink>
                </li>
                <li>
                <Link className={`${useMatch('recipies') ? 'text-orange-500' : 'text-white'}`} to={'recipies'}>Recipies</Link> 
                </li>
                <li className='dropdown relative inline-block'>
                        <Link to={'services'} className={`dropbtn flex items-center ${useMatch('services') ? 'text-orange-500' : 'text-white'}`}>Services <span className='text-[.6rem] pl-2'>&#9660;</span></Link>
                        <div className="dropdown-content hidden absolute bg-[#f1f1f1] min-w-[180px] rounded-sm shadow-sm left-0">
                            <Link className='z-10'>Food Catering</Link>
                            <Link className='z-20'>Drink & Beverages</Link>
                            <Link>Wedding & Birthdays</Link>
                        </div>
                </li>
                <li>
                   <Link className={`${useMatch('about') ? 'text-orange-500' : 'text-white'}`} to={'about'}>About</Link>
                </li>
                <li>
                    <Link className={`${useMatch('news') ? 'text-orange-500' : 'text-white'}`} to={'news'}>News</Link>
                </li>
                <li className='md:hidden w-[100%] bg-[#ff6600d3] p-3'>
                    <Link to={'contact'} className={`contact-us-m  ${useMatch('contact') ? 'text-orange-500' : 'text-white'}`}>Contact us</Link>
                </li>
            </ul>
            <li className='contact-btn md:flex md:items-center'>
                    <Link  to = {'contact'} className={`contact-us flex items-center justify-center bg-[#ff6600d3] mr-3 lg:h-12 lg:w-32 md:h-10 md:w-28 hover:bg-slate-100  ${useMatch('contact') ? 'text-orange-500' : 'text-white'}`}>Contact us</Link>
            </li>
        </nav>
    </header>
  )
}

export default Nav
