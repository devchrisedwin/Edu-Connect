import React, { useContext } from 'react'
import frame15 from '../assets/frame15.png'
import { QuestionModalContext } from '../context/QuestionContext'



function Headerbanner({menu, showSideBar, setShowSideBar}) {
  const {isOpen} = useContext(QuestionModalContext)

  return (
    <div className='border w-[100%] h-[100px] rounded flex items-center justify-evenly'>
        <div>
            <div className='flex items-center gap-3'>
              <p className='border p-1 rounded'
              onClick={() => setShowSideBar(!showSideBar)}>{menu}</p>
              <h1 className='lg:text-[25px] text-[12px] font-bold'>Welcome Nana!</h1>
            </div>
            <p className='text-[10px] lg:text-[15px]'>Ready to learn and grow?</p>
        </div>
        <button onClick={isOpen} className='lg:w-[150px] w-[90px] bg-[#202ED1] text-[10px] lg:text-[13px] p-2 text-white font-bold rounded'>Ask Question</button>
        <img className='lg:w-[130px] w-[60px]' src={frame15} alt="" />
    </div>
  )
}

export default Headerbanner