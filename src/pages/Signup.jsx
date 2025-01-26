import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from "../components/Button"
import BottomWarning from '../components/BottomWarning'

const Signup = () => {
  return (
    <div className='bg-[#d6ccc2]  h-screen px-8 sm:px-16'>
        <div className='container h-screen flex items-center justify-center'>

            <div className='bg-white rounded-lg px-10 py-8 md:px-16 md:py-10'>
                <Heading label='Signup'/>
                <SubHeading label='Enter your details to create account' />
                <InputBox
                label="Full Name"
                placeholder="Jhone Doe"
                type='text'
                />

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
                    title='Create Account'
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