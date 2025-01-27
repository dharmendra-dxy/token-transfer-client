import React from 'react'
import Button from "../components/Button";
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router';


const User = () => {

    const nav= useNavigate();

    const userDetails = [
        {username: "Dharmendra", email: "d@gmial.com"},
        {username: "Dharmendra", email: "d@gmial.com"},
        {username: "Dharmendra", email: "d@gmial.com"},
        {username: "Dharmendra", email: "d@gmial.com"},
    ];


  return (
    <div className='mt-10'>

        <div>
            <p className='text-2xl font-medium'>Users</p>
        </div>

        <div className='flex items-center justify-center gap-4'>
            <input 
            type="text" 
            placeholder='Search user'
            className='border border-gray-300 px-4 py-2 w-full rounded-lg outline-none mt-4'
            />
            <button className='mt-4'><FaSearch  size={25}/></button>
        </div>

        
        <div className='mt-14 lg:w-[70%] lg:mx-auto'>
            {
                userDetails.map((user)=> (
                    <div className='mt-6 flex justify-between items-center border-b pb-2 border-gray-300'>
                        <div className='flex justify-between items-center gap-6'>
                            <div className='h-10 w-10 flex justify-center items-center bg-gray-300 rounded-full text-white text-2xl font-bold hover:bg-gray-400'> 
                                D
                            </div>
                            <div> 
                                <p>{user.username}</p>
                                <p className='text-slate-500 font-medium'>{user.email}</p>
                            </div>
                        </div>
                        <div className='text-xs lg:text-base'>
                            <Button
                                title="Send Money"
                                onClick={()=> nav('/send')}
                            />
                        </div>
                    </div>
                ))
            }
        </div>
        


    </div>
  )
}

export default User