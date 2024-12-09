import React from 'react'

function Modal({children}) {
  return (
    <div className='fixed inset-0 bg-black 
    bg-opacity-30 backdrop-blur-sm mt-[50px] 
    flex justify-center items-center'>
        <div className='bg-white lg:w-[500px] w-[350px] pb-5 rounded'>
            {children}
        </div>
    </div>
  )
}

export default Modal