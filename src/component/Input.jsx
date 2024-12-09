import React from 'react'

function Input({type, name, placeholder}) {
  return (
    <div>
        <input
        className='w-[100%] p-2 rounded bg-transparent outline-none border-none' 
        type={type} 
        placeholder={placeholder}
        name={name}
        />
    </div>
  )
}

export default Input