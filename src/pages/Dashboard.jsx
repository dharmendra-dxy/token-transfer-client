import AppBar from '../components/AppBar'
import User from '../components/User'
import Footer from '../components/Footer'

const Dashboard = () => {
  return (
    <>
      <AppBar/>

      <div className='container mx-auto px-5 md:px-16 xl:px-48 mt-10'>
        
        <p className='text-lg'> <span className='font-medium'>Name</span> Dharmendra </p>
        <p className='text-lg'> <span className='font-medium'>Email</span> d@gmial.com </p>
        <p className='text-lg'> <span className='font-medium'>Balance</span> 8000 </p>

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