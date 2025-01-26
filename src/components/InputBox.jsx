import React from 'react'

const InputBox = ({label, value, placeholder, type, onChange}) => {
  return (
    <div className='flex flex-col mt-4'>
        <label className='font-medium'> {label}</label>
        <input 
        className='border border-gray-400 rounded-md px-4 py-2 mt-1 outline-none'
        value={value}
        onChange={onChange}
        type={type} 
        placeholder={placeholder}
        
        />
    </div>
  )
}

export default InputBox