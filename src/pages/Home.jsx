import React from 'react'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <div className='container mx-auto px-5 md:px-20 lg:px-48'>
            <Navbar/>
        </div>
        
        <div className='container mx-auto px-5 md:px-20 lg:px-48'>
            <div className='flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between mb-20'>
                <div className='flex flex-col items-center justify-center lg:justify-start lg:items-start'> 

                    <h1 className='text-4xl md:text-6xl font-bold mt-5 text-center leading-normal md:text-start'>
                        Token Transfer
                    </h1>
                    <p className='text-lg text-center lg:w-full lg:text-start w-64 md:mt-5 text-gray-700'>Payments made Simple and Easier</p>

                    <Button 
                    title='Check Out'
                    classProp="mt-4"
                    />
                </div>

                <div className='flex items-center justify-center'> 
                    <img
                        src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-mobile-money-transferring-banking-concept-vector-hand-holding-smartphone-dollar-and-png-image_5204362.jpg" 
                        alt="hero img"
                        className='h-[350px] md:h-[600px] rounded-3xl'
                    />
                </div>
            </div>
        </div>

        <div className='bg-gray-100'>
            <div className='container mx-auto px-5 md:px-20 lg:px-48'>
                <Footer/>
            </div>
        </div>
        
    </div>
  )
}

export default Home