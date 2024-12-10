import React, {useContext} from 'react'
import frame16 from '../assets/comgroup.png'
import frame17 from '../assets/signupscreen.png'
import frame18 from '../assets/questionf.png'
import frame19 from '../assets/comment.png'
import frame20 from '../assets/chatscreen.png'

import Footer from '../component/Footer'
import Modal from '../component/Modal'

import { QuestionModalContext } from '../context/QuestionContext';


function How() {
    const {isOpen, questionModal, isClose} = useContext(QuestionModalContext)
  return (
    <div className='mt-[50px]'>
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
         {/* hero section begins here */}

         <div className='lg:w-[60%] w-[100%] bg-[#F2F4F7] m-[auto] mt-[50px] pt-10 text-center'>
            <div className='lg:w-[500px] w-[100%] m-[auto]'>
                <h1 className='font-bold text-[25px]'>How It Works</h1>

                <div className='lg:w-[80%] m-[auto]'>
                    <p className='text-[#808080] text-[13px] pt-5 font-semibold w-[90%] ml-3'>
                        Discover how to make the most of our platform and start learning today
                    </p>
                </div>

                <button onClick={isOpen} className='bg-[#202ED1] font-bold mt-2 mb-2
                 p-2 text-white w-[150px] 
                 outline-none border-none rounded'>Ask Question</button>

                 <div className='pt-2 pb-3'>
                    <img src={frame16} alt="" />
                 </div>
            </div>
        </div>

        {/* hero section ends here */}

        {/* How it works sign up details begins here */}
        <div className='border bg-white'>

            <div className='lg:flex lg:w-[95%] w-[100%] m-[auto] mt-10'>
                <div className='flex-1 h-[350px]'>
                    <h1 className='pt-20 ml-[125px] pb-5 text-[#202ED1] font-semibold text-[20px]'>Sign Up</h1>
                    <div className='flex items-center p-3 gap-14'>
                        <div className='mt-[-80px] opacity-[0.9]'>
                            <div className='w-[50px] h-[50px] rounded-full bg-gray-50 ml-4 font-san'>
                            <p className='text-[#202ED1] 
                            text-[25px] font-semibold flex 
                            justify-center items-center 
                            w-[50px] h-[50px] 
                            rounded-full bg-gray-400'>1</p>
                            </div>
                        </div>
                      
                        
                        <ul>
                            <li className='list-disc font-semibold mb-4'>Create an account in just a few steps
                                Choose a username, set your preference and you're ready to go.
                            </li>
                            <li className='list-disc font-semibold'>
                                Add your grade, subject of interests and a profile picture
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex-1 h-[350px]'>
                    <div className='w-[65%] h-[100px] m-[auto] mt-15'>
                        <img src={frame17} alt="" />
                    </div>
                </div>
            </div>

            <div className='lg:flex lg:w-[95%] w-[100%]  m-[auto] mt-10'>
                <div className='flex-1 h-[350px]'>
                    <div className='w-[70%] h-[200px] m-[auto] mt-15'>
                        <img src={frame18} alt="" />
                    </div>
                </div>

                <div className='flex-1 h-[350px]'>
                    <h1 className='lg:pt-20 mt-[-80px] lg:mt-0 ml-[125px] pb-5 text-[#202ED1] font-semibold text-[20px]'>Ask a Question</h1>
                    <div className='flex items-center p-3 gap-14'>
                        <div className='mt-[-80px] opacity-[0.9]'>
                            <div className='w-[50px] h-[50px] rounded-full bg-gray-50 ml-4 font-san'>
                            <p className='text-[#202ED1] 
                            text-[25px] font-semibold flex 
                            justify-center items-center 
                            w-[50px] h-[50px] 
                            rounded-full bg-gray-400'>2</p>
                            </div>
                        </div>
                      
                        
                        <ul>
                            <li className='list-disc font-semibold mb-4'>
                                Stuck on a tough concept? post a question to the community. Our peers and experts
                                are here to help.
                            </li>
                            <h4 className='font-bold ml-2'>Tips For Great Question</h4>
                            <li className='list-disc ml-7 text-[12px]'>
                                Be specific and clear
                            </li>
                            <li className='list-disc ml-7 text-[12px]'>
                                Include details or examples if needed
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className='lg:flex lg:w-[95%] w-[100%] m-[auto] mt-10'>
                <div className='flex-1 h-[350px]'>
                    <h1 className='lg:pt-20 mt-[-80px] lg:mt-0 ml-[125px] pb-5 text-[#202ED1] font-semibold text-[20px]'>
                        Answer and Earn Points</h1>
                    <div className='flex items-center p-3 gap-14'>
                        <div className='mt-[-80px] opacity-[0.9]'>
                            <div className='w-[50px] h-[50px] rounded-full bg-gray-50 ml-4 font-san'>
                            <p className='text-[#202ED1] 
                            text-[25px] font-semibold flex 
                            justify-center items-center 
                            w-[50px] h-[50px] 
                            rounded-full bg-gray-400'>3</p>
                            </div>
                        </div>
                      
                        
                        <ul>
                            <li className='list-disc font-semibold mb-4'>
                                Share your knowledge answer and earn points for every upvote you recieve.
                            </li>
                            <h4 className='font-bold ml-2'>Tips For Great Answer</h4>
                            <li className='list-disc ml-7 text-[12px]'>
                                Provide clear step by step explanation
                            </li>
                            <li className='list-disc ml-7 text-[12px]'>
                                Include examples or resources
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='flex-1 h-[350px]'>
                    <div className='w-[70%] h-[200px] mt-[-100px] lg:mt-0 m-[auto] mt-15'>
                        <img src={frame19} alt="" />
                    </div>
                </div>
            </div>

            <div className='lg:flex lg:w-[95%] w-[100%] m-[auto] mt-10'>
                <div className='flex-1 h-[350px]'>
                    <div className='w-[70%] mt-[-100px] lg:mt-0 h-[200px] m-[auto] mt-15'>
                        <img src={frame20} alt="" />
                    </div>
                </div>

                <div className='flex-1 h-[350px]'>
                    <h1 className='lg:pt-20 mt-[-120px] lg:mt-0 ml-[125px] pb-5 text-[#202ED1] font-semibold text-[20px]'>Join Discussion</h1>
                    <div className='flex items-center p-3 gap-14'>
                        <div className='mt-[-20px] opacity-[0.9]'>
                            <div className='w-[50px] h-[50px] rounded-full bg-gray-50 ml-4 font-san'>
                            <p className='text-[#202ED1] 
                            text-[25px] font-semibold flex 
                            justify-center items-center 
                            w-[50px] h-[50px] 
                            rounded-full bg-gray-400'>4</p>
                            </div>
                        </div>
                      
                        
                        <ul>
                            <li className='list-disc font-semibold mb-4'>
                                Engage with like minded students. Discuss study 
                                strategies, exam prep or your favourite subject.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

      <Footer/>  
    </div>
  )
}

export default How