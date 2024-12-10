import React from 'react'
import profilepic from '../assets/profilepic.png'
import taskdone from '../assets/taskdone.png'
import { Form, Input } from 'antd'

function Profile({menu, showSideBar, setShowSideBar}) {
  return (
    <div>
      <div className='p-6'>
        <div className='flex gap-2'>
          <p className='border p-1 rounded'
            onClick={() => setShowSideBar(!showSideBar)}>{menu}</p>
         <h2 className='font-bold'>Profile</h2>
        </div>
          
         <p className='text-[12px] w-[300px]'>Celebrate the top contributors and inspire others to learn and share knowledge</p>
      </div>

      <div className='lg:flex mt-5'>
        <div className='flex-[2]'>
          <div className='border w-[90%] h-[120px] m-[auto] rounded-xl'>
            <p className='text-[10px] font-bold p-3'>Your Profile</p>
            <hr />
            <div className='flex items-center justify-between'>
              <div className='w-[80px] h-[80px] ml-3 pt-3 border-r'>
                <img className='w-[40px]' src={profilepic} alt="" />
                <p className='text-[10px] font-bold'>David fayome</p>
              </div>
              <button className='text-[12px] border-none text-white outline-none bg-[#202ED1] p-1 lg:w-[120px] w-[90px] h-[30px] rounded'>Edit Profile</button>
              <button className='text-[12px] mr-5 border outline-none text-red-600 p-1 lg:w-[120px] w-[90px] h-[30px] rounded'>Delete</button>
            </div>
          </div>

          <div className='w-[90%] m-[auto] mt-4 border rounded-xl'>
            <Form layout='vertical'>
              <label className='ml-6 font-bold text-[13px]' htmlFor="">Name</label>
              <Form.Item className='custom-form'>
                  <Input placeholder='Enter name'/>
              </Form.Item>

              <label className='ml-6 font-bold text-[13px]' htmlFor="">Email</label>
              <Form.Item className='custom-form'>
                  <Input placeholder='Enter email'/>
              </Form.Item>

              <label className='ml-6 font-bold text-[13px]' htmlFor="">Password</label>
              <Form.Item className='custom-form'>
                  <Input.Password placeholder='Enter password'/>
              </Form.Item>

               <label className='ml-6 font-bold text-[13px]' htmlFor="">Grade</label>
              <Form.Item className='custom-form'>
                  <Input placeholder='Enter name'/>
              </Form.Item> 

               <label className='ml-6 font-bold text-[13px]' htmlFor="">School Name</label>
              <Form.Item className='custom-form'>
                  <Input placeholder='Enter name'/>
              </Form.Item> 

               <label className='ml-6 font-bold text-[13px]' htmlFor="">Subject</label>
              <Form.Item className='custom-form'>
                  <Input placeholder='Enter name'/>
              </Form.Item>  
            </Form>
          </div>
        </div>


        <div className='flex-1 border h-[250px] lg:w-[80%] mt-5 lg:mt-[-0.2px] mb-4'>
            <img src={taskdone} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Profile