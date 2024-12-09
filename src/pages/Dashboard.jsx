import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

import {
    FaHome,
    FaQuestionCircle,
    FaAward,
    FaUserTie,
  } from "react-icons/fa";
  import { MdGroups } from "react-icons/md";
  



function Dashboard({showSideBar}) {
 
  return (
    <div className='mt-[50px] border bg-white flex'>
  
    
      {/* dashboard side bar begins here */}
        <div className={`${showSideBar ? 'flex flex-col flex-1 border p-5 min-h-screen visible' : 'hidden'}`}>

            <div className='flex items-center w-[100%] rounded font-bold mb-3 bg-gray-100 hover:bg-[#202ED1] hover:text-white p-2'>
               <FaHome size={15} />
               <Link to='/dashboard'><p className='ml-3 text-[#313131] text-[12px] lg:text-[15px] hover:text-[#fff]'>Home</p></Link>
            </div>

            <div className='flex items-center w-[100%] rounded font-bold mb-3 bg-gray-100 hover:bg-[#202ED1] hover:text-white p-2'>
               <FaQuestionCircle size={15} />
               <Link to='/dashboard/question'>
                <p className='lg:ml-3 ml-1 text-[#313131] hover:text-[#fff] text-[10px] lg:text-[15px]'> My Questions</p>
               </Link>
            </div>

            <div className='flex items-center w-[100%] rounded font-bold mb-3 bg-gray-100 hover:bg-[#202ED1] hover:text-white p-2'>
               <MdGroups size={15} />
               <Link to='/dashboard/community'>
                 <p className='lg:ml-3 ml-1 text-[#313131] hover:text-[#fff] text-[12px] lg:text-[15px]'>Community</p>
               </Link>
            </div>

            <div className='flex items-center w-[100%] rounded font-bold mb-3 bg-gray-100 hover:bg-[#202ED1] hover:text-white p-2'>
               <FaAward size={15} />
               <Link to='/dashboard/badges'>
                  <p className='lg:ml-3 ml-1 text-[#313131] hover:text-[#fff] text-[12px] lg:text-[15px]'>Rewards</p>
               </Link>
            </div>

            <div className='flex items-center w-[100%] rounded font-bold mb-3 bg-gray-100 hover:bg-[#202ED1] hover:text-white p-2'>
               <FaUserTie size={15} />
               <Link to='/dashboard/profile'>
                  <p className='lg:ml-3 ml-1 text-[#313131] hover:text-[#fff] text-[12px] lg:text-[15px]'>Profile</p>
               </Link>
            </div>

            <div className='mt-5 text-[12px] font-semibold cursor-pointer'>
                <p className='pt-3 text-[#313131]'>About</p>
                <p className='pt-3 text-[#313131]'>How It works</p>
                <p className='pt-3 text-[#313131]'>Categories</p>
                <p className='pt-3 text-[#313131]'>Testimonial</p>
                <p className='pt-3 text-[#313131]'>Contact us</p>
            </div>

            <div className='flex items-center w-[100%] mt-24 rounded font-bold mb-3 bg-gray-100 hover:bg-[#202ED1] hover:text-white p-2'>
               <p>Logout</p>
            </div>
            
        </div>
      {/* dashboard side bar ends here */}

      {/* dashboard main section begins here */}
        <div className={`${!showSideBar ? 'w-[100%]' : 'flex-[4] border min-h-screen'}`}>
          <Outlet/>
        </div>
      {/* dashboard main section ends here */}
    </div>
  )
}

export default Dashboard