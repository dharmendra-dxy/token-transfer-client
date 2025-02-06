import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from "../components/Button"
import BottomWarning from '../components/BottomWarning'
import axios from 'axios'
import { useNavigate } from 'react-router'

const Signup = () => {

  const nav = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loding, setLoding] = useState(false);
  
  const handleSignup = async (e)=> {
    e.preventDefault();
    try {
      setLoding(true);

      // call backend:
      const res = await axios.post("http://localhost:8000/api/v1/user/signup", {
        username,
        email,
        password,
      },{
        headers: {
          'Content-Type' : 'application/json'
        },
        withCredentials: true,
      });

      console.log( "response: ", res.data);

      // set user state in redux:

    } 
    catch (error) {
      console.log("Erorr while signup: ", error.response.data);
    }

    // clear form response"
    setUsername("");
    setEmail("");
    setPassword("");

    // navigate to login:
    nav('/dashboard');
  }


  return (
    <div className='bg-[#d6ccc2]  h-screen px-8 sm:px-16'>
        <div className='container h-screen flex items-center justify-center'>

            <div className='bg-white rounded-lg px-10 py-8 md:px-16 md:py-10'>
                <Heading label='Signup'/>
                <SubHeading label='Enter your details to create account' />
                <InputBox
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                label="Full Name"
                placeholder="Jhone Doe"
                type='text'
                />

                <InputBox
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                label="Email"
                placeholder="example@gmail.com"
                type="email"
                />

                <InputBox
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                label="Password"
                placeholder="********"
                type='password'
                />
                
                <div className='w-full mt-6'>
                    <Button
                    title='Create Account'
                    onClick={handleSignup}
                    />
                </div>

                <BottomWarning
                label={`Allready have an account ? `}
                link= 'Login'
                to='/login'
                />

            </div>

        </div>
    </div>
  )
}


export default Signup