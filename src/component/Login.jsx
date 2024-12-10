import React from 'react'
import profileIcon from '../../public/assets/profile.png'
import googleicon from '../../public/assets/googleIcon.png'
import Input from './Input'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='mt-[30px] pt-10 bg-white'>
        <div className='w-[250px] m-[auto] p-1'>
            <h1 className='text-center text-[#313131] text-[20px] font-bold'>Login Into Your  Account</h1>
            <img className='w-[60px] m-[auto] border rounded' src={profileIcon} alt="" />
            <p className='text-center font-semibold text-[#313131]'>Welcome Back</p>
        </div>

        <form className='flex flex-col lg:w-[35%] w-[95%] m-[auto] p-5 pb-10'>
            <label className='pt-2'>Email</label>
            <div className='border'>
                <Input
                type='email'
                placeholder='Enter your email'
                name='email'
                />
            </div>
           
            <label className='pt-2'>Password</label>
            <div className='border'>
                <Input
                type='password'
                placeholder='Enter your password'
                name='password'
                />
            </div>

            <button className='w-[100%] text-center bg-[#202ED1] mt-3 p-1 rounded text-white font-semibold'>continue</button>
            <p className='text-[13px] text-center'>Don't have an account <Link to='/signup'><span className='text-[#202ED1] font-bold'>sign in</span></Link></p>

            <div className='flex items-center justify-center border mt-10 p-2 rounded'>
                <img className='w-[12px] mt-[3px]' src={googleicon} alt="" />
                <button className='ml-2 text-[13px] font-bold'>Google</button>
            </div>
        </form>
       
    </div>
  )
}

export default Login