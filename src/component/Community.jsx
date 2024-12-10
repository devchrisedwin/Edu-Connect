import React, {useContext} from 'react'
import { FiSearch } from "react-icons/fi";
import { FiFilter } from "react-icons/fi"
import { FaAward } from "react-icons/fa"
import { MdGroups } from "react-icons/md";
import { MdMoreVert } from "react-icons/md";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { MdComment } from "react-icons/md";

import frame3 from '../assets/group1.png'
import frame1 from '../assets/frame.png'
import frame2 from '../assets/book1.png'

import '../App.css'

import { QuestionModalContext } from '../context/QuestionContext';
import { CommentContext } from '../context/CommentContext';
import Modal from './Modal'

function Community({menu, showSideBar, setShowSideBar}) {
  const {isOpen, questionModal, isClose} = useContext(QuestionModalContext)
  const {commentModal, setCommentModal} = useContext(CommentContext)
  return (
    <div>
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

      {commentModal ?
      <Modal>
        <div className='flex items-center justify-between p-3'>
          <h2 className='ml-5 font-semibold'></h2>
          <button onClick={() => setCommentModal(false)} className='font-semibold text-[25px] mr-5'>x</button>
        </div>

        <div className='flex items-center gap-2 ml-2 pl-10 mt-[-30px]'>
          <img className='w-[30px] h-[30px] rounded-full' src={frame3} alt="" />
          <div>
            <p className='text-[12px] font-semibold'>Nana Aishat</p>
            <p className='text-[10px]'>Grade 10</p>
          </div>
        </div>

        <div className='pt-5  ml-11'>
          <p className='w-[350px] text-[14px] ml-10'>
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
            <img className='w-[30px] h-[30px] rounded-full' src={frame3} alt="" />
            <div>
              <p className='text-[12px] font-semibold'>Nana Aishat</p>
              <p className='text-[10px]'>Grade 10</p>
            </div>
          </div>
          <p className='w-[250px] pt-3 text-[14px] ml-10'>This is the answer to your question, more luck in your examination</p>
          </div>
          <div className='flex flex-col pt-3 pl-10'>
          <div className='flex items-center gap-2 ml-2'>
            <img className='w-[30px] h-[30px] rounded-full' src={frame3} alt="" />
            <div>
              <p className='text-[12px] font-semibold'>Nana Aishat</p>
              <p className='text-[10px]'>Grade 10</p>
            </div>
          </div>
          <p className='w-[250px] pt-3 text-[14px] ml-10'>This is the answer to your question, more luck in your examination</p>
          </div>
          <div className='flex flex-col pt-3 pl-10'>
          <div className='flex items-center gap-2 ml-2'>
            <img className='w-[30px] h-[30px] rounded-full' src={frame3} alt="" />
            <div>
              <p className='text-[12px] font-semibold'>Nana Aishat</p>
              <p className='text-[10px]'>Grade 10</p>
            </div>
          </div>
          <p className='w-[250px] pt-3 text-[14px] ml-10'>This is the answer to your question, more luck in your examination</p>
          </div>
        </div>
       
        <div className='bg-white w-[500px]'>
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
      <div className='w-[100%] h-[100px] ml-[-20px] rounded flex items-center justify-evenly'>
        <div className={`mt-5 lg:mt-0 ${!showSideBar ? 'ml-5' : ''}`}>
            <div className='flex items-center gap-2'>
              <p className='border p-1 rounded'
              onClick={() => setShowSideBar(!showSideBar)}>{menu}</p>
              <h1 className='text-[15px] font-bold'>Explore Communities</h1>
            </div>
            <p className='text-[12px] lg:w-[330px] w-[220px]'>Join groups of learners who share your interest, collaborate on questions and grow together</p>
        </div>
        
        <button onClick={isOpen} className='lg:w-[150px] bg-[#202ED1] text-[13px] p-2 text-white font-bold rounded'>
          Ask Question
        </button>
      </div>

      <div className='lg:flex items-center justify-evenly'>
          <div className='border rounded p-1 flex items-center gap-2 w-[80%] lg:w-[400px] lg:ml-0 ml-3 lg:mt-0 mt-2'>
            <FiSearch size={15} color="gray" />
            <input type='search' placeholder='search' className='outline-none border-none bg-transparent'/>
          </div>
        <button className='flex items-center text-[12px] rounded p-1 w-[120px] gap-1 lg:ml-0 lg:mt-0 ml-3 mt-3 border'>
          <FiFilter size={13} color="gray" />
          Filter by subject
        </button>
        <button className='flex items-center text-[12px] rounded p-1 w-[120px] lg:ml-0 ml-3 lg:mt-0 mt-3 gap-1 border'>
          <FiFilter size={13} color="gray" />
          Filter by Grade
        </button>
      </div>

      <div className='lg:flex mt-5 p-2'>

        <div className='flex-[3] border'>
          <div className='flex items-center p-2 justify-between'>
              <p className='text-[11px] text-[#313131] font-bold ml-1'>For You</p>
              <p className='text-gray-400 text-[13px]'>Explore Community</p>
          </div>

        {/* question display section */}
          <div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2 ml-2'>
                <img className='w-[30px] h-[30px] rounded-full' src={frame3} alt="" />
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
                <img className='w-[30px] h-[30px] rounded-full' src={frame3} alt="" />
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

        <div className='flex-1  min-h-screen p-2 rounded-xl'>
          <h2 className='font-bold text-[#313131] text-[12px]'>Communities you might like</h2>
          <p className='text-[10px] text-gray-500'>connect with other students who share your passion and interest</p>
          <div className='flex justify-between items-center text-[13px] pt-5 pb-2 font-semibold border-b'>
            <div className='flex'>
                <div className='flex items-center'>
                    <img className='w-[10px] h-[10px] rounded-full' src={frame1} alt="" />
                    <img className='w-[10px] ml-[-3px] rounded-full h-[10px]' src={frame2} alt="" />
                    <img className='w-[10px] ml-[-3px] rounded-full h-[10px]' src={frame3} alt="" />
                </div>
                <div className=' ml-2'>
                    <p className='text-[10px]'>Junior science group</p>
                    <p className='text-[10px]'>50 members</p>
                </div>
            </div>

            <button className='w-[50px] border p-[3px] text-[10px]'>Join now</button>
          </div>
          <div className='flex justify-between items-center text-[13px] pt-5 pb-2 font-semibold border-b'>
              <div className='flex'>
                  <div className='flex items-center'>
                      <img className='w-[10px] h-[10px] rounded-full' src={frame1} alt="" />
                      <img className='w-[10px] ml-[-3px] rounded-full h-[10px]' src={frame2} alt="" />
                      <img className='w-[10px] ml-[-3px] rounded-full h-[10px]' src={frame3} alt="" />
                  </div>
                  <div className=' ml-2'>
                      <p className='text-[10px]'>Junior science group</p>
                      <p className='text-[10px]'>50 members</p>
                  </div>
              </div>

              <button className='w-[50px] border p-[3px] text-[10px]'>Join now</button>
          </div>
          <div className='flex justify-between items-center text-[13px] pt-5 pb-2 font-semibold border-b'>
              <div className='flex'>
                  <div className='flex items-center'>
                      <img className='w-[10px] h-[10px] rounded-full' src={frame1} alt="" />
                      <img className='w-[10px] ml-[-3px] rounded-full h-[10px]' src={frame2} alt="" />
                      <img className='w-[10px] ml-[-3px] rounded-full h-[10px]' src={frame3} alt="" />
                  </div>
                  <div className=' ml-2'>
                      <p className='text-[10px]'>Junior science group</p>
                      <p className='text-[10px]'>50 members</p>
                  </div>
              </div>

              <button className='w-[50px] border p-[3px] text-[10px]'>Join now</button>
          </div>
            
        </div>
      </div>
    </div>
  )
}

export default Community