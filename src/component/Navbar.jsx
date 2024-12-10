import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ContactContext } from '../context/ContactUsContext'

function Navbar() {
  const {setContactUsModal} = useContext(ContactContext)
  const navigate = useNavigate()

  function handleHome() {
    navigate('/')
    setContactUsModal(true)
  }
  return (
    <div className='lg:w-[70%] w-[100%] h-[50px] lg:border border-[#313131] m-[auto] fixed top-0 z-[1000]  bg-white rounded flex items-center justify-between'>
        <div className='text-[#202ED1] font-bold ml-3 text-[8px] lg:text-[15px]'>EDU CONNECT</div>

        <div>
          <ul className='flex text-[#808080] text-[9px] lg:text-[15px]'>
            <Link to='/'><li className='lg:ml-3 ml-2 hover:font-bold text-black cursor-pointer'>Home</li></Link>
            <Link to='/how-it-works'><li className='lg:ml-3 ml-2 hover:font-bold text-black cursor-pointer'>Info</li></Link>
            <Link to='/testimonials'><li className='lg:ml-3 ml-2 hover:font-bold text-black cursor-pointer'>Testimonials</li></Link>
            <li onClick={handleHome} title='go to homepage to see contact us form' className='lg:ml-3 ml-2 hover:font-bold text-black cursor-pointer'>Contact us</li>
            <Link to='/dashboard'>
                <li className='lg:ml-3 ml-2 hover:font-bold text-black cursor-pointer'>Dashboard</li>
            </Link>
          </ul>
        </div>
        <Link to='/signup'>
          <div className='lg:mr-10 mr-5 text-[9px] lg:text-[15px]'>
            <button className='bg-[#202ED1] text-white font-bold rounded-full p-1 lg:w-[70px] w-[40px]'>Login</button>
          </div>
        </Link>
    </div>
  )
}

export default Navbar