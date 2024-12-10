import React from 'react'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import { CiLock } from "react-icons/ci"

import {Progress} from 'antd'

import badge1 from '../../public/assets/image2.png'
import badge2 from '../../public/assets/image5.png'
import badge3 from '../../public/assets/image4.png'
import badge4 from '../../public/assets/image6.png'
import badge5 from '../../public/assets/image9.png'
import badge6 from '../../public/assets/image3.png'
import badge7 from '../../public/assets/image9.png'
import badge8 from '../../public/assets/image7.png'
import badge9 from '../../public/assets/image8.png'
import badge10 from '../../public/assets/image10.png'

function Badges({menu, showSideBar, setShowSideBar}) {
  return (
    <div>
      <div className='flex items-center justify-between border-b p-1 pb-4 lg:w-[95%] w-[100%] m-[auto]'>
        <div className='flex gap-2'>
          <p className='border p-1 rounded h-7 mt-2'
            onClick={() => setShowSideBar(!showSideBar)}>{menu}</p>
            <div>
            <h1 className='font-bold'>Your Rewards</h1>
            <p className='text-[11px] lg:w-[289px] w-[205px] opacity-[0.7]'>Earn points, unlock badges and redeem exciting rewards as you learn and contribute</p>
            </div>
        </div>
        <div className='bg-[#202ED1] text-white p-1 rounded lg:w-[150px] w-[100px] text-center mt-[-10px]'>
          <button className='outline-none border-none text-[12px]'>Ask Question</button>
        </div>
      </div>

      <div className='flex gap-7 border-b p-7 w-[95%] m-[auto]'>
        <div className='w-[90px]'>
            <CircularProgressbar 
            value={60} 
            text={'1200 points'} 
            size={8}
            styles={buildStyles({
            pathColor: '#202ED1',
            textSize: '13px',
            textColor: '#000',
            trailColor: "#E5E5E5",
            rotation: 0.60,
            })}
          />
        </div>

        <div className='flex items-center gap-3 mt-[-40px]'>
          <div>
            <p className='text-[11px] opacity-[0.6]'>Mathematics</p>
            <p className='text-[10px] font-bold'>20 points</p>
          </div>
          <div>
            <p className='text-[11px] opacity-[0.6]'>English</p>
            <p className='text-[10px] font-bold'>10 points</p>
          </div>
          <div>
            <p className='text-[11px] opacity-[0.6]'>Science</p>
            <p className='text-[10px] font-bold'>20 point</p>
          </div>
        </div>
      </div>

      {/* Badges display section */}
      <div className='w-[90%] m-[auto] mt-[40px] flex flex-wrap items-center gap-10 mb-5'>
        <div className='w-[80px] h-[205px] border'>
          <div className='w-[80px]'>
            <img className='w-[70px] m-[auto]' src={badge1} alt="" />
          </div>
          <div className='w-[70px] m-[auto]'>
             <div className='w-[20px] m-[auto]'><CiLock/></div>
             <h2 className='font-bold text-[12px] text-center'>500 points</h2>
             <p className='text-[8px] text-center'>Contribute answers in at least 5 different subjects with a total of 50 answers</p>
          </div>
          <div className='w-[50px] m-[auto]'>
            <Progress percent={50} strokeWidth={3} format={() => null}/>
          </div>
        </div>

        <div className='w-[80px] h-[205px] border'>
          <div className='w-[80px]'>
            <img className='w-[70px] m-[auto]' src={badge2} alt="" />
          </div>
          <div className='w-[70px] m-[auto]'>
             <div className='w-[20px] m-[auto]'><CiLock/></div>
             <h2 className='font-bold text-[12px] text-center'>500 points</h2>
             <p className='text-[8px] text-center'>Contribute answers in at least 5 different subjects with a total of 50 answers</p>
          </div>
          <div className=' w-[50px] m-[auto]'>
            <Progress percent={70} strokeWidth={3} format={() => null}/>
          </div>
        </div>

        <div className='w-[80px] h-[205px] border'>
          <div className='w-[80px]'>
            <img className='w-[70px] m-[auto]' src={badge3} alt="" />
          </div>
          <div className='w-[70px] m-[auto]'>
             <div className='w-[20px] m-[auto]'><CiLock/></div>
             <h2 className='font-bold text-[12px] text-center'>500 points</h2>
             <p className='text-[8px] text-center'>Contribute answers in at least 5 different subjects with a total of 50 answers</p>
          </div>
          <div className='w-[50px] m-[auto]'>
            <Progress percent={30} strokeWidth={3} format={() => null}/>
          </div>
        </div>

        <div className='w-[80px] h-[205px] border'>
          <div className='w-[80px]'>
            <img className='w-[70px] m-[auto]' src={badge4} alt="" />
          </div>
          <div className='w-[70px] m-[auto]'>
             <div className='w-[20px] m-[auto]'><CiLock/></div>
             <h2 className='font-bold text-[12px] text-center'>500 points</h2>
             <p className='text-[8px] text-center'>Contribute answers in at least 5 different subjects with a total of 50 answers</p>
          </div>
          <div className='w-[50px] m-[auto]'>
            <Progress percent={90} strokeWidth={3} format={() => null}/>
          </div>
        </div>

        <div className='w-[80px] h-[205px] border'>
          <div className='w-[80px]'>
            <img className='w-[70px] m-[auto]' src={badge5} alt="" />
          </div>
          <div className='w-[70px] m-[auto]'>
             <div className='w-[20px] m-[auto]'><CiLock/></div>
             <h2 className='font-bold text-[12px] text-center'>500 points</h2>
             <p className='text-[8px] text-center'>Contribute answers in at least 5 different subjects with a total of 50 answers</p>
          </div>
          <div className='w-[50px] m-[auto]'>
            <Progress percent={40} strokeWidth={3} format={() => null}/>
          </div>
        </div>

        <div className='w-[80px] h-[205px] border'>
          <div className='w-[80px]'>
            <img className='w-[70px] m-[auto]' src={badge3} alt="" />
          </div>
          <div className='w-[70px] m-[auto]'>
             <div className='w-[20px] m-[auto]'><CiLock/></div>
             <h2 className='font-bold text-[12px] text-center'>500 points</h2>
             <p className='text-[8px] text-center'>Contribute answers in at least 5 different subjects with a total of 50 answers</p>
          </div>
          <div className='w-[50px] m-[auto]'>
            <Progress percent={50} strokeWidth={3} format={() => null}/>
          </div>
        </div>

        <div className='w-[80px] h-[205px] border'>
          <div className='w-[80px]'>
            <img className='w-[70px] m-[auto]' src={badge9} alt="" />
          </div>
          <div className='w-[70px] m-[auto]'>
             <div className='w-[20px] m-[auto]'><CiLock/></div>
             <h2 className='font-bold text-[12px] text-center'>500 points</h2>
             <p className='text-[8px] text-center'>Contribute answers in at least 5 different subjects with a total of 50 answers</p>
          </div>
          <div className='w-[50px] m-[auto]'>
            <Progress percent={50} strokeWidth={3} format={() => null}/>
          </div>
        </div>

        <div className='w-[80px] h-[205px] border'>
          <div className='w-[80px]'>
            <img className='w-[70px] m-[auto]' src={badge7} alt="" />
          </div>
          <div className='w-[70px] m-[auto]'>
             <div className='w-[20px] m-[auto]'><CiLock/></div>
             <h2 className='font-bold text-[12px] text-center'>500 points</h2>
             <p className='text-[8px] text-center'>Contribute answers in at least 5 different subjects with a total of 50 answers</p>
          </div>
          <div className='w-[50px] m-[auto]'>
            <Progress percent={50} strokeWidth={3} format={() => null}/>
          </div>
        </div>

        <div className='w-[80px] h-[205px] border'>
          <div className='w-[80px]'>
            <img className='w-[70px] m-[auto]' src={badge8} alt="" />
          </div>
          <div className='w-[70px] m-[auto]'>
             <div className='w-[20px] m-[auto]'><CiLock/></div>
             <h2 className='font-bold text-[12px] text-center'>500 points</h2>
             <p className='text-[8px] text-center'>Contribute answers in at least 5 different subjects with a total of 50 answers</p>
          </div>
          <div className='w-[50px] m-[auto]'>
            <Progress percent={50} strokeWidth={3} format={() => null}/>
          </div>
        </div>

        <div className='w-[80px] h-[205px] border'>
          <div className='w-[80px]'>
            <img className='w-[70px] m-[auto]' src={badge10} alt="" />
          </div>
          <div className='w-[70px] m-[auto]'>
             <div className='w-[20px] m-[auto]'><CiLock/></div>
             <h2 className='font-bold text-[12px] text-center'>500 points</h2>
             <p className='text-[8px] text-center'>Contribute answers in at least 5 different subjects with a total of 50 answers</p>
          </div>
          <div className='w-[50px] m-[auto]'>
            <Progress percent={50} strokeWidth={3} format={() => null}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Badges