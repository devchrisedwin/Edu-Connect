import React, { useContext, useState } from 'react'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"
import frame1 from '../assets/frame.png'
import frame2 from '../assets/frame2.png'
import frame3 from '../assets/group1.png'

import Headerbanner from '../component/Headerbanner';

import Modal from './Modal'
import { QuestionModalContext } from '../context/QuestionContext'



function Dashboardhome({menu, showSideBar, setShowSideBar}) {
    let text1 = '1200\npoints'
    const {isClose, questionModal} = useContext(QuestionModalContext)
  return (
    <>
    <Headerbanner menu={menu} showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>
    {questionModal ?
    <Modal>
        <div className='flex items-center justify-between p-3'>
            <h2 className='ml-5 font-semibold'>Your Question?</h2>
           <button onClick={isClose} className='font-semibold text-[25px] mr-5'>x</button>
        </div>
        <hr />
        <div>
            <form className='flex flex-col gap-4'>
                <div>
                    <h2 className='ml-[28px] text-[14px] pt-3 font-semibold'>What are you asking today?</h2>
                    <div className='border w-[90%] m-[auto] text-[14px] rounded'>
                    <textarea placeholder='start writing' className='w-[100%] 
                    indent-3 outline-none border-none bg-transparent'></textarea>
                    </div>
                </div>
              

                <div>
                    <h2 className='ml-[28px] text-[14px] pt-3 font-semibold'>Grade</h2>
                    <div className='border w-[90%] m-[auto] text-[14px] rounded'>
                        <input type="text" placeholder='Enter your Grade' 
                        className='border-none outline-none w-[100%] p-2' />
                    </div>
                </div>

                <div>
                    <h2 className='ml-[28px] text-[14px] pt-3 font-semibold'>Subject</h2>
                    <div className='border w-[90%] m-[auto] text-[14px] rounded'>
                        <input type="text" placeholder='Enter your Subject' 
                        className='border-none outline-none w-[100%] p-2' />
                    </div>
                </div>
                <div className='w-[150px] mx-[325px] rounded bg-[#202ED1]'>
                    <button className='p-1 w-[150px]  text-white font-semibold'>Post Question</button>
                </div>
                
            </form>
        </div>
    </Modal>: ""
    }
    <div className='lg:flex mt-10'>
        <div className='flex-[3] h-[500px]'>
            <div className='border rounded-xl h-[120px] w-[95%] m-[auto]'>
                <div className='w-[350px] m-[auto] flex items-center p-5 gap-5 font-semibold'>
                   <CircularProgressbar 
                   value={60} 
                   text={`${text1}`} 
                   strokeWidth={8}
                   styles={buildStyles({
                    pathColor: '#FF431E',
                    textSize: '13px',
                    textColor: '#000',
                    trailColor: "#E5E5E5",
                    rotation: 0.60,
                    })}
                   />

                   <CircularProgressbar 
                   value={70} 
                   text={'100 Upvotes'} 
                   strokeWidth={8}
                   styles={buildStyles({
                    pathColor: '#202ED1',
                    textSize: '13px',
                    textColor: '#000',
                    trailColor: "#E5E5E5",
                    rotation: 0.60,
                    })}
                   />

                   <CircularProgressbar 
                   value={60} 
                   text={'40 badges'} 
                   strokeWidth={8}
                   styles={buildStyles({
                    pathColor: 'green',
                    textSize: '13px',
                    textColor: '#000', 
                    trailColor: "#E5E5E5",
                    rotation: 0.60,
                    })}
                   />
                </div>
            </div>

            <h1 className='pl-4 font-semibold text-[#313131] mt-4'>Recommended Study Groups</h1>
            <div className='w-[85%] m-[auto]'>
                <div className='flex justify-between items-center text-[13px] pt-5 pb-1 font-semibold border-b'>
                    <p>Communities</p>
                    <p>See all</p>
                </div>

                <div className='flex justify-between items-center text-[13px] pt-5 pb-2 font-semibold border-b'>
                    <div className='flex'>
                        <div className='flex items-center'>
                           <img className='w-[20px] h-[20px] rounded-full' src={frame1} alt="" />
                           <img className='w-[20px] ml-[-9px] rounded-full h-[20px]' src={frame2} alt="" />
                           <img className='w-[20px] ml-[-9px] rounded-full h-[20px]' src={frame3} alt="" />
                        </div>
                        <div className=' ml-2'>
                            <p className='text-[12px]'>Junior science group</p>
                            <p className='text-[12px]'>50 members</p>
                        </div>
                    </div>

                    <button className='w-[80px] border p-[5px]'>Join now</button>
                </div>
                <div className='flex justify-between items-center text-[13px] pt-5 pb-2 font-semibold border-b'>
                    <div className='flex'>
                        <div className='flex items-center'>
                           <img className='w-[20px] h-[20px] rounded-full' src={frame1} alt="" />
                           <img className='w-[20px] ml-[-9px] rounded-full h-[20px]' src={frame2} alt="" />
                           <img className='w-[20px] ml-[-9px] rounded-full h-[20px]' src={frame3} alt="" />
                        </div>
                        <div className=' ml-2'>
                            <p className='text-[12px]'>Junior science group</p>
                            <p className='text-[12px]'>50 members</p>
                        </div>
                    </div>

                    <button className='w-[80px] border p-[5px]'>Join now</button>
                </div>
                <div className='flex justify-between items-center text-[13px] pt-5 pb-2 font-semibold border-b'>
                    <div className='flex'>
                        <div className='flex items-center'>
                           <img className='w-[20px] h-[20px] rounded-full' src={frame1} alt="" />
                           <img className='w-[20px] ml-[-9px] rounded-full h-[20px]' src={frame2} alt="" />
                           <img className='w-[20px] ml-[-9px] rounded-full h-[20px]' src={frame3} alt="" />
                        </div>
                        <div className=' ml-2'>
                            <p className='text-[12px]'>Junior science group</p>
                            <p className='text-[12px]'>50 members</p>
                        </div>
                    </div>

                    <button className='w-[80px] border p-[5px]'>Join now</button>
                </div>
            </div>
            
        </div>
        <div className='flex-1 border h-[500px] p-2 rounded-xl'>
            <p className='border-b pb-4 font-bold p-1'>New Challenge</p>
            <p className='text-[13px] font-bold p-1 pt-5'>Friday, 6 July</p>
            <p className='text-[12px] p-1'>Join the Math Mastermind contest and win rewards</p>

            <div className='w-[90%] m-[auto]'>
                <button className='bg-[#202ED1] w-[150px] rounded text-white p-2 mt-5'>Join</button>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Dashboardhome