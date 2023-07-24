import React from 'react'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <section className="footer px-4 md:px-[10%] lg:px-[20%] flex flex-col items-center my-10">
        <div className="newslater flex flex-col items-center text-center lg:px-[25%]">
            <h3 className="title text-md font-semibold my-10">Subscribe Newsletter</h3>
            <p className="desc text-[#999999]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ex temporibus magni ipsam inventore dolorum sunt, amet vel.</p>
            <form className='flex flex-col appearance-none w-full gap-4 my-4 md:flex-row' action="#">
                <input className='border border-[#999999]  h-12 md:w-[75%] px-4' type="email" placeholder='Enter Email Address'/>
                <button className='w-full h-12 bg-orange-500 md:w-[50%] uppercase text-white tracking-widest'>Subscribe</button>
            </form>
        </div>

        <div className="summery md:grid md:grid-cols-3 items-start justify-items-center gap-4 mt-16">

            <div className="about-us">
                <h3 className="title font-bold mt-16 mb-4 md:mt-0">About Us</h3>
                <p className='text-sm leading-6 text-[#999999] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus et dolor blanditiis consequuntur ex voluptates perspiciatis omnis unde minima expedita.</p>
                <div className="links flex gap-4 items-center text-sm text-orange-500 mt-12 mb-20">
                    <Link><i class="fa-brands fa-twitter"></i></Link>
                    <Link><i class="fa-brands fa-facebook-f"></i></Link>
                    <Link><i class="fa-brands fa-linkedin-in"></i></Link>
                    <Link><i class="fa-brands fa-instagram"></i></Link>
                </div>
            </div>

            <div className="info flex flex-col gap-12">
                <div>
                    <h3 className='font-semibold pb-6'>Opening Hours</h3>
                    <p className='text-sm pb-2'>Monday-Friday</p>
                    <p className='text-sm text-[#999999]'>5AM - 10PM</p>
                </div>

                <div className='flex flex-col gap-6'>
                    <h3 className='font-semibold pb-4'>Contact Info</h3>
                    <div>
                        <p className='text-sm pb-2'>Address:</p>
                        <p className='text-sm text-[#999999]'>51/1 New Beledanga Road,Kolkata,WestBengal</p>
                    </div>
                    <div>
                        <p className='text-sm pb-2'>Phone:</p>
                        <p className='text-sm text-[#999999]'>7980954***</p>
                    </div>
                    <div>
                        <p className='text-sm pb-2'>Email:</p>
                        <p className='text-sm text-[#999999]'>singhrahulll292@gmail.com</p>
                    </div>
                </div>



            </div>

                <div className="quick-links flex flex-col gap-4 my-16 md:mt-0">
                    <h3 className='font-semibold pb-4'>Quick Links</h3>
                    <Link className='text-sm text-orange-500'>About</Link>
                    <Link className='text-sm text-orange-500'>Terms of Use</Link>
                    <Link className='text-sm text-orange-500'>Disclaimers</Link>
                    <Link className='text-sm text-orange-500'>Contact</Link>
                </div>
        </div>

        <div className="copyright my-28 text-sm text-[#999999]">Copyright ©{new Date().getFullYear()} All rights reserved | This template is Developed by <span className='text-orange-500'>Sabbir Hossain</span> aka <span className='text-orange-500'>WebVersee</span> with ❤️ & Designed by <span className='text-orange-500'>Colorlib</span></div>
    </section>
  )
}

export default Footer
