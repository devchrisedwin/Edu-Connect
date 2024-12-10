import React, {useContext} from 'react'
import frame13 from '../../public/assets/writing.png'
import frame14 from '../../public/assets/bike.png'
import frame4 from '../../public/assets/arrow.png'
import frame21 from '../../public/assets/dashome.png'
import Footer from '../component/Footer'
import Modal from '../component/Modal'

import { QuestionModalContext } from '../context/QuestionContext';



function Testimonial() {
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
                <h1 className='font-bold text-[25px]'>What our Users Say</h1>

                <div className='w-[80%] m-[auto]'>
                    <p className='text-[#808080] text-[13px] pt-5 font-semibold w-[90%] ml-3'>
                        Hear from students and educators who have experience the difference.
                    </p>
                </div>

                <button onClick={isOpen} className='bg-[#202ED1] font-bold mt-2 mb-2
                 p-2 text-white w-[150px] 
                 outline-none border-none rounded'>Ask Question</button>
            </div>
        </div>

        {/* hero section ends here */}


        <div className='bg-white pt-5 pb-14'>
            <div className='w-[90%] m-[auto] pb-8'>
                <img className='w-[60px] m-[auto] pt-4' src={frame13} alt="" />

                <div className='flex items-center justify-evenly flex-wrap'>
                    <div className='bg-white rounded-2xl lg:w-[290px] mt-5 border pb-2'>
                        <div className='flex ml-5 gap-3 pt-5'>
                            <img className='w-[50px]' src={frame14} alt="" />
                            <div>
                                <h1 className='font-bold'>ADA</h1>
                                <p>Grade II</p>
                            </div>
                        </div>

                        <p className='lg:w-[250px] w-[350px] font-bold lg:ml-7 ml-3 pt-4'>
                            This platform helped me ace my chemistry test, now I feel ready for university
                        </p>
                    </div>

                    <div className='bg-white rounded-2xl lg:w-[290px] mt-5 border pb-2'>
                        <div className='flex ml-5 gap-3 pt-5'>
                            <img className='w-[50px]' src={frame14} alt="" />
                            <div>
                                <h1 className='font-bold'>ADA</h1>
                                <p>Grade II</p>
                            </div>
                        </div>

                        <p className='lg:w-[250px] w-[350px] font-bold lg:ml-7 ml-3 pt-4'>
                            This platform helped me ace my chemistry test, now I feel ready for university
                        </p>
                    </div>

                    <div className='bg-white rounded-2xl lg:w-[290px] mt-5 border pb-2'>
                        <div className='flex ml-5 gap-3 pt-5'>
                            <img className='w-[50px]' src={frame14} alt="" />
                            <div>
                                <h1 className='font-bold'>ADA</h1>
                                <p>Grade II</p>
                            </div>
                        </div>

                        <p className='lg:w-[250px] w-[350px] font-bold lg:ml-7  ml-3 pt-4'>
                            This platform helped me ace my chemistry test, now I feel ready for university
                        </p>
                    </div>

                    <div className='bg-white rounded-2xl lg:w-[290px] mt-5 border pb-2'>
                        <div className='flex ml-5 gap-3 pt-5'>
                            <img className='w-[50px]' src={frame14} alt="" />
                            <div>
                                <h1 className='font-bold'>ADA</h1>
                                <p>Grade II</p>
                            </div>
                        </div>

                        <p className='lg:w-[250px] w-[350px] font-bold lg:ml-7 ml-3 pt-4'>
                            This platform helped me ace my chemistry test, now I feel ready for university
                        </p>
                    </div>

                    <div className='bg-white rounded-2xl lg:w-[290px] mt-5 border pb-2'>
                        <div className='flex ml-5 gap-3 pt-5'>
                            <img className='w-[50px]' src={frame14} alt="" />
                            <div>
                                <h1 className='font-bold'>ADA</h1>
                                <p>Grade II</p>
                            </div>
                        </div>

                        <p className='lg:w-[250px] w-[]350px font-bold lg:ml-7 ml-3 pt-4'>
                            This platform helped me ace my chemistry test, now I feel ready for university
                        </p>
                    </div>

                    <div className='bg-white rounded-2xl lg:w-[290px] mt-5 border pb-2'>
                        <div className='flex ml-5 gap-3 pt-5'>
                            <img className='w-[50px]' src={frame14} alt="" />
                            <div>
                                <h1 className='font-bold'>ADA</h1>
                                <p>Grade II</p>
                            </div>
                        </div>

                        <p className='lg:w-[250px] w-[350px] font-bold lg:ml-7 ml-3 pt-4'>
                            This platform helped me ace my chemistry test, now I feel ready for university
                        </p>
                    </div>

                </div>
            </div>
        </div>

        <div className='bg-white pt-10 pb-10'> 
            <div className='bg-[#EFD4CE] lg:w-[85%] w-[95%] lg:h-[150px] h-[75px] m-[auto] rounded-xl flex items-center justify-evenly'>
                <h1 className='text-center font-bold lg:text-[20px] text-[12px] lg:w-[250px] w-[125px]'>
                    Join thousands of happy students and educators
                </h1>
                <img className='lg:w-[140px] w-[70px]' src={frame4} alt="" />
                <button className='lg:w-[180px] w-[100px] p-1 bg-[#202ED1] lg:text-[15px]  text-[9px] rounded text-white'>share your experience</button>
            </div>
        </div>

        <div className='lg:flex bg-white'>
            <div className='flex-1 h-[300px]'>
                <div className='w-[80%] m-[auto] pt-10 lg:ml-[100px]'>
                    <img src={frame21} alt="" />
                </div>
            </div>
            <div className='flex-1 h-[300px] p-10 lg:ml-[90px] ml-[-5px]'>
                <h1 className='text-[25px] font-bold text-[#202ED1]'>About Us</h1>
                <p className='w-[300px] font-bold mb-1'>Empowering African students through collaborative learning and academic growth.</p>
                <p className='w-[350px] text-[13px] mb-1'>We aim to create a safe, supportive and engaging eviroment where african secondary students
                can connect, share knowledge and grow together.</p>
                <button className='lg:w-[130px] w-[100px] text-[12px] mt-3 lg:mt-0 lg:text-[15px] bg-[#202ED1] font-bold text-white p-2 rounded-2xl'>Signup Now</button>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Testimonial