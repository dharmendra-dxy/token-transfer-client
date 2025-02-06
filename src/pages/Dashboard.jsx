import AppBar from '../components/AppBar'
import User from '../components/User'
import Footer from '../components/Footer'

const Dashboard = () => {
  return (
    <>
      <AppBar/>

      <div className='container mx-auto px-5 md:px-16 xl:px-48 mt-10'>
        
        <div>
          <p className='text-4xl font-bold'>
            Hello, <span className='text-green-500'>Dharmendra</span>
          </p>
          
          <p className='text-2xl font-bold mt-3'>
            Balance Rs.<span className='text-green-500'>7000</span>
          </p>

          <p className='text-sm text-gray-400 '>dharmndra@gmial.com</p>
        </div>

        <User/>

      </div>

      <div className='bg-gray-100'>
        <div className='container mx-auto px-5 md:px-20 lg:px-48'>
          <Footer/>
        </div>
      </div>

    
    </>
  )
}

export default Dashboard