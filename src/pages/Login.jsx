import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from "../components/Button"
import BottomWarning from '../components/BottomWarning'
import { useNavigate } from 'react-router'
import axios from 'axios'

const Login = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loding, setLoding] = useState(false);

  const handleLogin = async ()=> {

    try {
      // call backend:
      const res = await axios.post("http://localhost:8000/api/v1/user/login", {
        email,
        password,
      });

      console.log("response: ", res.data);

      // set user token in local storage:
      localStorage.setItem("token", res.data.token);

    } 
    catch (error) {
      console.log("login axios error: ", error.response.data);
    }

    // clear form response"
    setEmail("");
    setPassword("");

    // navigate to dashboard:
    // nav('/dashboard');

  }


  return (
    <div className='bg-[#d6ccc2]  h-screen px-8 sm:px-16'>
        <div className='container h-screen flex items-center justify-center'>

            <div className='bg-white min-w-md rounded-lg px-10 py-8 md:px-16 md:py-10'>
                <Heading label='Login'/>
                <SubHeading label='Enter your credentials to login' />
                
                <InputBox
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                label="Email"
                placeholder="example@gmail.com"
                type="email"
                />

                <InputBox
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                label="Password"
                placeholder="********"
                type='password'
                />
                
                <div className='w-full mt-6'>
                    <Button
                    title='Login'
                    onClick={handleLogin}
                    />
                </div>

                <BottomWarning
                label={`Don't have an account ? `}
                link= 'Create Account'
                to='/signup'
                />

            </div>

        </div>
    </div>
  )
}

export default Login