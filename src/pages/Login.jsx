import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from "../components/Button"
import BottomWarning from '../components/BottomWarning'

const Login = () => {
  return (
    <div className='bg-[#d6ccc2]  h-screen px-8 sm:px-16'>
        <div className='container h-screen flex items-center justify-center'>

            <div className='bg-white min-w-md rounded-lg px-10 py-8 md:px-16 md:py-10'>
                <Heading label='Login'/>
                <SubHeading label='Enter your credentials to login' />
                
                <InputBox
                label="Email"
                placeholder="example@gmail.com"
                type="email"
                />

                <InputBox
                label="Password"
                placeholder="********"
                type='password'
                />
                
                <div className='w-full mt-6'>
                    <Button
                    title='Login'
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