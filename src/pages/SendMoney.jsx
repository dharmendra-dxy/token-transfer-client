import React from 'react'
import Button from '../components/Button'

const SendMoney = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center p-4 md:p-0'>
      
    <div className='shadow-lg w-[350px] shadow-slate-400 rounded-lg px-6 py-12'>
      <h2 className='text-2xl font-bold font-serif text-center'>Send Money</h2>

      <div className='flex gap-4 mt-10 items-center'>
        <div className='text-lg font-bold bg-green-500 text-white h-10 w-10 rounded-full flex items-center justify-center'>
          A
        </div>

        <div>
          <p className='text-lg font-medium'>Friend's Name</p>
        </div>
      </div>

      <div className='mt-6'>
        <p>Amount is Rs.</p>

        <input 
        type="text" 
        placeholder='Enter Amount'
        className='border border-gray-400 px-4 py-2 rounded-lg mt-3 w-full'
        />

        <div className='mt-3'>
          <Button title='Initiate Transfer'/>
        </div>
    </div>
    </div>

    

    </div>
  )
}

export default SendMoney