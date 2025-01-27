import React, { useState } from 'react'
import Button from '../components/Button'
import { useSearchParams } from 'react-router';
import axios from 'axios';

const SendMoney = () => {

  const [amount, setAmount] = useState(0);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  let name = searchParams.get("name");
  const email = searchParams.get("email");

  // capitalize name:
  name = name.charAt(0).toUpperCase() + name.slice(1);

  // handleInitiateTransfer:
  const handleInitiateTransfer = async() => {

    try{
      await axios.post('http://localhost:8000/api/v1/account/transfer', {
        amount,
        receiverId: id
      },{
        headers: {
          Authorization: 'Bearer' + localStorage.getItem('token'),
        }
      });
    }
    catch(error){
      console.log("transaction error: ", error.response.data);
    }
  }


  return (
    <div className='w-full h-screen flex items-center justify-center p-4 md:p-0'>
      
    <div className='shadow-lg w-[350px] shadow-slate-400 rounded-lg px-6 py-12'>
      <h2 className='text-2xl font-bold font-serif text-center'>Send Money</h2>

      <div className='flex gap-4 mt-10 items-center'>
        <div className='text-lg font-bold bg-green-500 text-white h-10 w-10 rounded-full flex items-center justify-center capitalize'>
          {name[0]}
        </div>

        <div>
          <p className='text-lg font-medium'>{name}</p>
          <p className='text-sm text-gray-600 font-normal'>{email}</p>
        </div>
      </div>

      <div className='mt-6'>
        <p>Amount is Rs.</p>

        <input 
        type="text" 
        placeholder='Enter Amount'
        value={amount}
        onChange={(e)=> setAmount(e.target.value)}
        className='border border-gray-400 px-4 py-2 rounded-lg mt-3 w-full'
        />

        <div className='mt-3'>
          <Button 
          title='Initiate Transfer'
          onClick={handleInitiateTransfer}
          />
        </div>
      </div>

    </div>

    </div>
  )
}

export default SendMoney