import { useEffect, useState } from 'react'
import Button from "../components/Button";
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import axios from 'axios';

const User = () => {

    const nav= useNavigate();

    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    // todo:
    // 1. add debouncing
    // 2. add paginataion

    useEffect( ()=>{
        axios.get("http://localhost:8000/api/v1/user/getuser?filter="+filter)
            .then(res =>setUsers(res.data.user));
    },[filter]);


  return (
    <div className='mt-10'>

        <div>
            <p className='text-2xl font-medium'>Users</p>
        </div>

        <div className='flex items-center justify-center gap-4'>
            <input 
            type="text" 
            placeholder='Search user'
            value={filter}
            onChange={(e)=> setFilter(e.target.value)}
            className='border border-gray-300 px-4 py-2 w-full rounded-lg outline-none mt-4'
            />
            <button className='mt-4'><FaSearch  size={25}/></button>
        </div>

        
        <div className='mt-14 lg:w-[70%] lg:mx-auto mb-10'>
            {
                users.map((user)=> (
                    <div 
                    key={user.userid}
                    className='mt-6 flex justify-between items-center border-b pb-2 border-gray-300'>
                        <div className='flex justify-between items-center gap-6'>
                            <div className='h-10 w-10 flex justify-center items-center bg-gray-300 rounded-full text-white text-2xl capitalize font-bold hover:bg-gray-400'> 
                                {user.username[0]}
                            </div>
                            <div> 
                                <p>
                                { // capitalize name:
                                user.username.charAt(0).toUpperCase() + user.username.slice(1)
                                }
                                </p>

                                <p className='text-slate-500 font-medium text-xs md:text-base'>{user.email}</p>
                            </div>
                        </div>
                        <div className='text-xs lg:text-base'>
                            <Button
                                title="Send Money"
                                onClick={()=> nav(`/send?id=${user.userid}&name=${user.username}&email=${user.email}`)}
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