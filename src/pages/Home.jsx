import React, { useContext, useState } from 'react'
import frame1 from '../assets/frame1.png'
import frame2 from '../assets/frame2.png'
import frame3 from '../assets/frame3.png'
import frame4 from '../assets/frame4.png'
import frame5 from '../assets/frame5.png'
import frame6 from '../assets/frame6.png'
import frame7 from '../assets/frame7.png'
import frame8 from '../assets/frame8.png'
import frame9 from '../assets/frame9.png'
import frame10 from '../assets/frame10.png'
import frame11 from '../assets/frame11.png'
import frame13 from '../assets/frame13.png'
import frame14 from '../assets/frame14.png'

import '../App.css'

import faq from '../data/faq'
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Footer from '../component/Footer'
import { Link } from 'react-router-dom'
import Modal from '../component/Modal'
import { ContactContext } from '../context/ContactUsContext'

function Home() {
  const [selected, setSelected] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [showContactForm, setShowContactForm] = useState(true)
  
  const {contactUsModal, setContactUsModal} = useContext(ContactContext)
  
  function handleAccordion(id) {
    faq.map((f) => {
        if(f.id === id) {
            setSelected(f.id)
        }
    })
    setIsOpen(!isOpen)
  }


  return (
    <div>

        {contactUsModal ?
        <Modal>
            <div className='flex items-center justify-between p-1'>
              <h2 className='ml-5 font-semibold'></h2>
              <button onClick={() => setContactUsModal(false)} className='font-semibold text-[25px] mr-5'>x</button>
            </div>
            <hr />

            <h2 className='ml-5 font-extrabold text-center pt-3'>Get in Touch</h2>
            <p className='text-[14px] text-center lg:w-[350px] w-[250px] m-[auto] pt-2'>Have questions, suggestions or feedback? we will love to hear from you.</p>

            <div className='flex items-center justify-center gap-5 pt-3 font-semibold'>
                <p onClick={() => setShowContactForm(true)} className={`${showContactForm ? 'text-[#202ED1] cursor-pointer' : 'text-black cursor-pointer'}`}>Contact Form</p>
                <p onClick={() => setShowContactForm(false)} className={`${!showContactForm ? 'text-[#202ED1] cursor-pointer' : 'text-black cursor-pointer'}`}>Contact Information</p>
            </div>

            {showContactForm ?
            <div>
              <form className='flex flex-col gap-2'>

                <div>
                    <h2 className='ml-[28px] text-[14px] pt-3 font-semibold'>Full Name</h2>
                    <div className='border w-[90%] m-[auto] text-[14px] rounded'>
                        <input type="text" placeholder='Enter full name' 
                        className='border-none outline-none w-[100%] p-2' />
                    </div>
                </div>

                <div>
                    <h2 className='ml-[28px] text-[14px] pt-3 font-semibold'>Subject</h2>
                    <div className='border w-[90%] m-[auto] text-[14px] rounded'>
                        <input type="text" placeholder='Enter meassge Subject' 
                        className='border-none outline-none w-[100%] p-2' />
                    </div>
                </div>

                <div>
                    <h2 className='ml-[28px] text-[14px] pt-3 font-semibold'>Email</h2>
                    <div className='border w-[90%] m-[auto] text-[14px] rounded'>
                        <input type="email" placeholder='Enter email' 
                        className='border-none outline-none w-[100%] p-2' />
                    </div>
                </div>

                <div>
                    <h2 className='ml-[28px] text-[14px] pt-2 font-semibold'>Message</h2>
                    <div className='border w-[90%] m-[auto] text-[14px] rounded'>
                    <textarea placeholder='start writing' className='w-[100%] 
                    indent-3 outline-none border-none bg-transparent h-[50px]'></textarea>
                    </div>
                </div>
                
                  <div className='w-[90%] m-[auto] rounded bg-[#202ED1]'>
                      <button className='p-1 w-[100%]  text-white font-semibold'>Send Message</button>
                  </div>
                  
              </form>
            </div>:
            <div className='lg:w-[70%] w-[90%] m-[auto] pt-5'>
                <div className='flex items-center justify-between mb-3 lg:text-[14px] text-[11px] font-semibold'>
                    <p className='text-[#313131]'>Address</p>
                    <p className='w-[200px] text-[#313131]'>No 23, Suit 10 Gwarinpa Plaza Abuja</p>
                </div>
                <div className='flex items-center justify-between mb-3 lg:text-[14px] text-[11px] font-semibold'>
                    <p className='text-[#313131]'>Email</p>
                    <p className='mr-5 text-[#313131]'>educonnect@gmail.com</p>
                </div>
                <div className='flex items-center justify-between mb-3 lg:text-[14px] text-[11px] text-[#313131] font-semibold'>
                    <p>Phone Number</p>
                    <p className='mr-5 text-[#313131]'>+234 9078653420</p>
                </div>

                <p className='text-[#313131] font-semibold pt-4 text-[13px] lg:text-[15px]'>
                    Looking for quick answers? Check out our FAQ page!
                </p>
                <button className='bg-[#202ED1] w-[100%] text-white font-semibold p-1 rounded mt-8'>
                    FAQ
                </button>

                <p className='text-[#313131] font-semibold lg:text-[16px] text-[12px] pt-5 pb-3'>Connect with us on social media for updates and tips</p>
                <div className='flex items-center gap-[15px] pt-2'>
                    <FaFacebook size={15} color="#202ED1" />
                    <FaTwitter size={15} color="#202ED1" />
                    <FaLinkedin size={15} color="#202ED1" />
                    <FaInstagram size={15} color="#202ED1" />
                </div>
            </div>
             }
        </Modal>: ""
        }

        {/* hero section begins here */}

        <div className='lg:w-[60%] w-[100%] bg-[#F2F4F7] m-[auto] mt-[50px] pt-10 text-center'>
            <div className='lg:w-[500px] w-[250px] m-[auto]'>
                <h1 className='font-bold lg:text-[25px]'>Ask Questions. Share Knowledge. Grow Together.</h1>

                <p className='text-[#808080] text-[13px] pt-8 lg:w-[450px] w-[250px]'>
                    A community driven platform designed for african secondary school students, 
                    to learn, connect and excel academically
                </p>

                <div className='border lg:w-[285px] w-[140px] m-[auto] flex items-center gap-2 mt-7'>
                    <Link to='/signup'>
                        <button className='lg:w-[130px] w-[70px]
                        border border-[#202ED1] 
                        text-[#202ED1] font-bold 
                        hover:bg-[#202ED1] hover:text-[#fff] 
                        p-2 text-[13px] rounded'>Sign up</button>
                    </Link>
                    <Link to='/how-it-works'>
                        <button className='lg:w-[130px] w-[70px] border
                        border-[#202ED1] text-[#202ED1] 
                        font-bold hover:bg-[#202ED1] hover:text-[#fff]  
                        p-2 text-[13px] rounded'>Explore</button>
                     </Link>
                </div>
            </div>

            <div className='flex justify-between border lg:w-[500px]
            w-[250px] m-[auto] mt-[30px] gap-2 mb-5'>
                <img className='lg:w-[150px] w-[100px] lg:h-[120px] h-[50px]' src={frame1} alt="" />
                <img className='lg:w-[150px] w-[100px] lg:h-[120px] h-[50px]' src={frame3} alt="" />
                <img className='lg:w-[150px] w-[100px] lg:h-[120px] h-[50px]' src={frame2} alt="" />
            </div>
        </div>

        {/* hero section ends here */}


        <div className='bg-white pt-10 pb-10'> 
            <div className='bg-[#EFD4CE] lg:w-[68%] w-[90%] lg:h-[150px] h-[100px] m-[auto] rounded-xl flex items-center justify-evenly'>
                <h1 className='text-center font-bold text-[12px] lg:text-[15px]'>Be part of the movement. <br /> 
                    Start your academic journey <br />with us today</h1>
                <img className='lg:w-[140px] w-[70px]' src={frame4} alt="" />
                <button className='lg:w-[120px] w-[60px] p-1 text-[11px] lg:text-[14px] bg-[#202ED1] rounded text-white'>Try now</button>
            </div>
        </div>

        <div>
            <h1 className='lg:text-[20px] text-[12px] font-bold text-center lg:pt-5 p-2'>How It Works</h1>
            <div className='lg:flex gap-2 flex-1 justify-evenly pt-7 lg:w-[68%] w-[100%] m-[auto] pb-7'>
                <div className='lg:w-[200px] w-[300px] h-[150px] m-[auto] mb-2 lg:mb-0 bg-[#EFD4CE] rounded p-5'>
                    <img className='lg:w-[60px] w-[30] m-[auto]' src={frame7} alt="" />
                    <h1 className='text-center font-bold pt-2'>Share Knowledge</h1>
                    <p className='text-center text-[13px] text-[#313131] font-semibold pt-5'>Answer questions and help others learn</p>
                </div>
                
                <div className='lg:w-[200px] w-[300px] h-[150px] m-[auto] mb-2 lg:mb-0 bg-[#EFD4CE] rounded p-3'>
                    <img className='w-[30px] m-[auto]' src={frame5} alt="" />
                    <h1 className='text-center font-bold pt-2'>Ask Question</h1>
                    <p className='text-center text-[13px] text-[#313131] font-semibold pt-2'>
                        Post your toughest study questions in subject like Math, Literature or Science
                    </p>
                </div>
                
                <div className='lg:w-[200px] w-[300px] lg:h-[150px] m-[auto] bg-[#EFD4CE] rounded p-5'>
                    <img className='w-[50px] m-[auto]' src={frame6} alt="" />
                    <h1 className='text-center font-bold pt-2'>Grow Together</h1>
                    <p className='text-center text-[13px] text-[#313131] font-semibold pt-5'>
                        Improve your skills and earn recognition for your contributions
                    </p>
                </div>
            </div>
        </div>

        <div className='bg-white'>
            <h1 className='pt-10 text-center lg:text-[25px] text-[14px] font-bold'>What Makes Us Unique</h1>
            <div className='lg:w-[80%] w-[100%] m-[auto] lg:flex items-center justify-evenly mt-7 pb-7'>
                <div className='lg:w-[230px] w-[300px] lg:h-[300px] h-[330px] m-[auto] mb-2 lg:mb-0 border rounded-2xl p-8'>
                    <img className='lg:w-[150px] w-[200px m-[auto]' src={frame8} alt="" />
                    <h2 className='text-[#313131] font-bold text-center pt-4'>Vibrant Community</h2>
                    <p className='text-[#313131] text-center pt-4'>Connect and grow your skills through our vibrant community</p>
                </div>
                
                <div className='lg:w-[230px] w-[300px] lg:h-[300px] h-[330px] m-[auto] mb-2 lg:mb-0 border rounded-2xl p-5'>
                    <img className='lg:w-[150px] w-[200px] m-[auto]' src={frame9} alt="" />
                    <h2 className='text-[#313131] font-bold text-center pt-4'>Peer-To-Peer Q&A</h2>
                    <p className='text-[#313131] text-center pt-4'>
                        Ask questions, share answers and learn directly from your fellow students
                    </p>
                </div>
                
                <div className='lg:w-[230px]  w-[300px] lg:h-[300px] h-[360px] m-[auto] mb-2 lg:mb-0 border rounded-2xl p-3'>
                    <img className='lg:w-[150px] w-[200px m-[auto]' src={frame10} alt="" />
                    <h2 className='text-[#313131] font-bold text-center pt-3'>Earn a badge </h2>
                    <p className='text-[#313131] text-center pt-3'>
                        Get recognition as part of your reward for engagement
                    </p>
                </div>
            </div>
        </div>

        <div className='bg-[#EFD4CE] m-[auto]'>
            <div className='flex items-center justify-evenly'>
                <img className='lg:w-[150px] w-[75px] pt-10' src={frame11} alt="" />
                <div>
                    <h1 className='lg:text-[25px] text-[12px] pt-5 lg:pt-0 text-[#313131] font-bold'>Frequently Asked Questions</h1>
                    <p className='lg:w-[300px] w-[150px] text-[12px] lg:pt-0 lg:text-[15px] text-center'>Find answers to most common questions about our platform</p>
                </div>
            </div>

            <div className='pt-10 pb-10'>
                {faq.map((f) => (
                    <div key={f.id} className='bg-white lg:w-[68%] w-[90%] m-[auto] rounded-xl p-4 mb-3'>
                        <div className='flex items-center justify-between'>
                            <h2 className='lg:text-[20px] text-[12px] font-bold'>{f.question}</h2>
                            {isOpen && selected === f.id ? <FaArrowUp 
                            onClick={() => handleAccordion(f.id)}
                            size={15} color="#313131" />
                            : <FaArrowDown 
                            onClick={() => handleAccordion(f.id)}
                            size={15} color="#313131"/>}
                        </div>
                        {isOpen && selected === f.id  ? <p className='pt-5 text-[13px] lg:text-[15px]'>{f.answer}</p> : '' } 
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-white pt-14 lg:pb-14 pb-52'>
            <div className='testimonial pb-8'>
                <img className='lg:w-[60px] w-[30px] m-[auto] lg:pt-4 pt-10' src={frame13} alt="" />
                <h1 className='text-center font-bold text-[#313131] lg:text-[20px] text-[10px]'>What Our Students Are Saying</h1>

                <div className='lg:flex items-center justify-evenly w-[90%] m-[auto]'>
                    <div className='bg-white rounded-2xl lg:w-[290px] mt-5'>
                        <div className='flex ml-5 gap-3 pt-5'>
                            <img className='w-[50px]' src={frame14} alt="" />
                            <div>
                                <h1 className='font-bold text-[12px] lg:text-[15px]'>ADA</h1>
                                <p className='text-[10px] lg:text-[15px]'>Grade II</p>
                            </div>
                        </div>

                        <p className='w-[250px] font-bold ml-7 pt-4'>
                            This platform helped me ace my chemistry test, now I feel ready for university
                        </p>
                    </div>

                    <div className='bg-white rounded-2xl lg:w-[290px] mt-5'>
                        <div className='flex ml-5 gap-3 pt-5'>
                            <img className='w-[50px]' src={frame14} alt="" />
                            <div>
                                <h1 className='font-bold'>ADA</h1>
                                <p>Grade II</p>
                            </div>
                        </div>

                        <p className='w-[250px] font-bold ml-7 pt-4'>
                            This platform helped me ace my chemistry test, now I feel ready for university
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home