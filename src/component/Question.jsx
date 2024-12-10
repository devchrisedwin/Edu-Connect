import React, { useContext } from 'react'
import { FiSearch } from "react-icons/fi";
import { FiFilter } from "react-icons/fi"
import { FaAward } from "react-icons/fa"
import { MdGroups } from "react-icons/md";
import { MdMoreVert } from "react-icons/md";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { MdComment } from "react-icons/md";

import group1 from '../assets/group1.png'
import { QuestionModalContext } from '../context/QuestionContext';
import Modal from './Modal'
import { CommentContext } from '../context/CommentContext';

function Question({menu, showSideBar, setShowSideBar}) {
  const {isOpen, questionModal, isClose} = useContext(QuestionModalContext)
  const {commentModal, setCommentModal} = useContext(CommentContext)
  return (
    <div>
      {questionModal ?
        <Modal>
            <div className='flex items-center justify-between p-3'>
              <h2 className='ml-5 font-semibold'>Your Question?</h2>
              <button onClick={isClose} className='font-semibold text-[25px] lg:mr-5'>x</button>
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
                  <div className='w-[150px] lg:mx-[325px] mx-[180px] rounded bg-[#202ED1]'>
                      <button className='p-1 w-[150px]  text-white font-semibold'>Post Question</button>
                  </div>
                  
              </form>
            </div>
        </Modal>: ""
      }

      {commentModal ?
      <Modal>
        <div className='flex items-center justify-between p-3'>
          <h2 className='ml-5 font-semibold'></h2>
          <button onClick={() => setCommentModal(false)} className='font-semibold text-[25px] mr-5'>x</button>
        </div>

        <div className='flex items-center gap-2 ml-2 lg:pl-10 pl-5 mt-[-30px]'>
          <img className='w-[30px] h-[30px] rounded-full' src={group1} alt="" />
          <div>
            <p className='text-[12px] font-semibold'>Nana Aishat</p>
            <p className='text-[10px]'>Grade 10</p>
          </div>
        </div>

        <div className='pt-5  lg:ml-11 ml-5'>
          <p className='lg:w-[350px] w-[250px] lg:text-[14px] text-[11px] ml-5 lg:ml-10'>
            Good afternoon guys <br />
            I am preparing for my upcoming exam and i need answer to my question below. thank you <br />
            What is the process of photosynthesis 
          </p>
        </div>
        <hr />
        <h2 className='text-[14px] p-3 pl-10 font-semibold'><span className='text-[11px] pr-1'>10</span>comments</h2>
        <div className='h-[200px]  border no-scrollbar'>
          <div className='flex flex-col pt-3 pl-10'>
          <div className='flex items-center gap-2 ml-2'>
            <img className='w-[30px] h-[30px] rounded-full' src={group1} alt="" />
            <div>
              <p className='text-[12px] font-semibold'>Nana Aishat</p>
              <p className='text-[10px]'>Grade 10</p>
            </div>
          </div>
          <p className='w-[250px] pt-3 lg:text-[14px] text-[11px] lg:ml-10 ml-5'>This is the answer to your question, more luck in your examination</p>
          </div>
          <div className='flex flex-col pt-3 pl-10'>
          <div className='flex items-center gap-2 ml-2'>
            <img className='w-[30px] h-[30px] rounded-full' src={group1} alt="" />
            <div>
              <p className='text-[12px] font-semibold'>Nana Aishat</p>
              <p className='text-[10px]'>Grade 10</p>
            </div>
          </div>
          <p className='w-[250px] pt-3 lg:text-[14px] text-[11px] lg:ml-10 ml-5'>This is the answer to your question, more luck in your examination</p>
          </div>
          <div className='flex flex-col pt-3 pl-10'>
          <div className='flex items-center gap-2 ml-2'>
            <img className='w-[30px] h-[30px] rounded-full' src={group1} alt="" />
            <div>
              <p className='text-[12px] font-semibold'>Nana Aishat</p>
              <p className='text-[10px]'>Grade 10</p>
            </div>
          </div>
          <p className='w-[250px] pt-3 lg:text-[14px] text-[11px] lg:ml-10 ml-5'>This is the answer to your question, more luck in your examination</p>
          </div>
        </div>
       
        <div className='bg-white lg:w-[500px]'>
          <form className='flex flex-col gap-4  pl-10'>
            <div>
              <h2 className='text-[14px] pt-3 font-semibold'>Write your answer</h2>
              <div className='border w-[95%] m-[auto] ml-[-3px] text-[14px] rounded'>
              <textarea placeholder='start writing' className='w-[100%] 
              indent-3 outline-none border-none bg-transparent'></textarea>
              </div>
            </div>
            <div className='w-[150px] rounded bg-[#202ED1]'>
                <button className='p-1 w-[150px]  text-white font-semibold'>Post</button>
            </div>       
          </form>
        </div>
        
      </Modal>: ""
      }
      <div className='w-[100%] lg:h-[100px] h-[130px] ml-2 rounded lg:flex items-center justify-evenly'>
        <div className={`mt-5 lg:mt-0 ${!showSideBar ? 'ml-4' : ''}`}>
          <div className='flex items-center gap-2'>
            <p className='border p-1 rounded'
              onClick={() => setShowSideBar(!showSideBar)}>{menu}</p>
            <h1 className={`lg:text-[15px] font-bold`}>What are you asking today?!</h1>
          </div>
            <p className='text-[10px]'>Review the question that you've asked and track their progress.</p>
        </div>

        <div className='border rounded p-1 flex items-center gap-2 w-[90%] lg:w-[220px] ml-2 lg:ml-0'>
            <FiSearch size={15} color="gray" />
            <input type='search' placeholder='search' className='outline-none 
            border-none bg-transparent'/>
        </div>
        
        <button onClick={isOpen} className='lg:w-[150px] w-[100px] mt-2 ml-2 lg:ml-0 lg:mt-0 bg-[#202ED1] text-[13px] p-2 text-white font-bold rounded'>Ask Question</button>
      </div>

      <div className='flex items-center justify-evenly'>
        <h1 className='text-[13px] font-bold text-[#202ED1]'>Your Question</h1>
        <button className='flex items-center text-[12px] rounded p-1 w-[120px] gap-1 border'>
          <FiFilter size={13} color="gray" />
          Filter by subject
        </button>
        <button className='flex items-center text-[12px] rounded p-1 w-[120px] gap-1 border'>
          <FiFilter size={13} color="gray" />
          Filter by Grade
        </button>
      </div>

      <div className='lg:flex mt-5 p-2'>

        <div className='flex-[3]'>
          <div className='flex items-center p-2'>
              <MdGroups size={15} />
              <p className='text-[11px] text-[#313131] font-bold ml-1'>Junior science group</p>
          </div>

        {/* question display section */}
          <div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2 ml-2'>
                <img className='w-[30px] h-[30px] rounded-full' src={group1} alt="" />
                <div>
                  <p className='text-[12px] font-semibold'>Nana Aishat</p>
                  <p className='text-[10px]'>Grade 10</p>
                </div>
              </div>

              <div className='flex items-center mr-[-150px]'>
                <p className='text-[10px] text-[#313131] font-semibold'>1 July 2023</p>
                <p className='text-[10px] text-[#313131] font-semibold'>1 : 10pm</p>
              </div>

              <div className='mr-5'>
                <MdMoreVert size={15} />
              </div>
            </div>

            <div className='pt-5  ml-11'>
              <p className='w-[350px] text-[14px]'>
                Good afternoon guys <br /><br />
                I am preparing for my upcoming exam and i need answer to my question below. thank you <br /><br />
                What is the process of photosynthesis 
              </p>
            </div>

            <div className='mt-5 ml-[-18px] flex items-center justify-evenly pb-2 '>
              <div className='flex items-center gap-2'>
                 <FaThumbsUp size={15} color="gray" className='mt-[-2px]' />
                 <p className='text-[10px]'>10 vote</p>
                 <FaThumbsDown size={15} color="gray" className='mt-[3px]' />
                 <p></p>
              </div>
              <div className='flex items-center gap-2'>
                  <MdComment size={15} color="gray" />
                  <p onClick={()=> setCommentModal(true)} className='text-[12px] cursor-pointer font-semibold mt-[-3px]'>10 Comments</p>
              </div>

              <div className='flex items-center gap-2'>
                  <FaAward size={15} color='gray' />
                  <p className='text-[12px] font-semibold mt-[-3px]'>10 Badges</p>
              </div>
            </div>
            <hr className='w-[91%] ml-12 mb-3' />
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2 ml-2'>
                <img className='w-[30px] h-[30px] rounded-full' src={group1} alt="" />
                <div>
                  <p className='text-[12px] font-semibold'>Nana Aishat</p>
                  <p className='text-[10px]'>Grade 10</p>
                </div>
              </div>

              <div className='flex items-center mr-[-150px]'>
                <p className='text-[10px] text-[#313131] font-semibold'>1 July 2023</p>
                <p className='text-[10px] text-[#313131] font-semibold'>1 : 10pm</p>
              </div>

              <div className='mr-5'>
                <MdMoreVert size={15} />
              </div>
            </div>

            <div className='pt-5  ml-11'>
              <p className='w-[350px] text-[14px]'>
                Good afternoon guys <br /><br />
                I am preparing for my upcoming exam and i need answer to my question below. thank you <br /><br />
                What is the process of photosynthesis 
              </p>
            </div>

            <div className='mt-5 ml-[-18px] flex items-center justify-evenly pb-2 '>
              <div className='flex items-center gap-2'>
                 <FaThumbsUp size={15} color="gray" className='mt-[-2px]' />
                 <p className='text-[10px]'>10 vote</p>
                 <FaThumbsDown size={15} color="gray" className='mt-[3px]' />
                 <p></p>
              </div>
              <div className='flex items-center gap-2'>
                  <MdComment size={15} color="gray" />
                  <p className='text-[12px] font-semibold mt-[-3px]'>10 Comments</p>
              </div>

              <div className='flex items-center gap-2'>
                  <FaAward size={15} color='gray' />
                  <p className='text-[12px] font-semibold mt-[-3px]'>10 Badges</p>
              </div>
            </div>
            <hr className='w-[91%] ml-12' />
          </div>
           
        </div>

        <div className='flex-1 border min-h-screen p-2 rounded-xl'>
            <p className='border-b pb-4 font-bold p-1'>New Challenge</p>
            <p className='text-[13px] font-bold p-1 pt-5'>Friday, 6 July</p>
            <p className='text-[12px] p-1'>Join the Math Mastermind contest and win rewards</p>

            <div className='w-[90%] m-[auto]'>
                <button className='bg-[#202ED1] w-[150px] rounded text-white p-2 mt-5'>Join</button>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Question