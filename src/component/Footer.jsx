import React from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";


function Footer() {
  return (
    <div className='bg-[#202ED1] lg:h-[230px] lg:flex justify-evenly items-center'>
        <div className='ml-2 pt-6 lg:pt-0'>
            <h1 className='text-white font-bold text-[11px] lg:text-[15px]'>Edu Connect</h1>
            <div className='flex items-center lg:justify-center pt-3'>
                <FaMapMarkerAlt size={15} color="white" />
                <span className='text-[12px] text-white' style={{ marginLeft: "5px" }}>123 Main Street, Anytown</span>
            </div>

            <div className='flex items-center lg:justify-center pt-3'>
                <FaEnvelope size={15} color="white" />
                <span className='text-[12px] text-white' style={{ marginLeft: "5px" }}>123 Main Street, Anytown</span>
            </div>

            <div className='flex items-center lg:justify-center pt-3'>
                <FaPhoneAlt size={15} color="white" />
                <span className='text-[12px] text-white' style={{ marginLeft: "5px" }}>123 Main Street, Anytown</span>
            </div>
        </div>
        <div className='h-[130px] lg:h-[130px] mt-3 lg:mt-0 ml-2'>
            <h1 className='text-white font-bold'>Links</h1>
            <ul>
                <li className='text-[12px] text-white'>Home</li>
                <li className='text-[12px] text-white'>How It Works</li>
                <li className='text-[12px] text-white'>Categories</li>
                <li className='text-[12px] text-white'>Testimonial</li>
                <li className='text-[12px] text-white'>Contact Us</li>
            </ul>
        </div>
        <div className='lg:mt-[-70px] h-[60px] lg:h-[50px] ml-2 lg:ml-0 mt-3'>
            <h1 className='text-white font-bold'>Social Media</h1>
            <div className='flex items-center gap-[15px] pt-2'>
                <FaFacebook size={15} color="white" />
                <FaTwitter size={15} color="white" />
                <FaLinkedin size={15} color="white" />
                <FaInstagram size={15} color="white" />
            </div>
        </div>
        <div className='mt-10 lg:w-[280px] w-[90%] ml-3 lg:ml-0'>
            <h1 className='text-white font-bold'>Join Our Newsletter</h1>
            <p className='text-white text-[13px]'>Stay updated with the latest tips and features</p>
            <div className='flex flex-col mt-3'>
                <label htmlFor="email" className='text-white'>Email</label>
                <div className='flex items-center border border-white p-2 rounded'>
                    <FaEnvelope size={15} color="white" className='mt-1' />
                    <input className='lg:w-[100%] w-[50%] 
                    ml-1 bg-transparent outline-none border-none' 
                    type='email' 
                    placeholder='Enter your email' 
                    id='email'/>
                </div>
            </div>
            <button className='mt-4 mb-3 lg:mb-0 
            bg-white outline-none 
            border-none text-center 
            text-[13px] text-[#202ED1] lg:w-[280px] w-[100px] p-2 rounded font-bold'>Subscribe</button>
        </div><br /><br />
    </div>
  )
}

export default Footer