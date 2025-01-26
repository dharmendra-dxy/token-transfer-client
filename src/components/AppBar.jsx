import React from 'react'

const AppBar = () => {
  return (
    <div className='border'>
        <div className='container mx-auto px-5 md:px-16 xl:px-48 py-2'>
        <div className='flex items-center justify-between'>
            <div>
                <img 
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/money-3d-icon-download-in-png-blend-fbx-gltf-file-formats--dollar-currency-cash-pack-business-icons-7192163.png?f=webp" 
                    alt="logo"
                    className='h-12 bg-black rounded-full cursor-pointer lg:h-14' 
                />
            </div>

            <div className='flex items-center'>
                <p className='mr-3 text-xl font-semibold lg:mr-6'>Hello</p>

                <div className='text-4xl font-bold flex items-center cursor-pointer justify-center text-white bg-gray-300 h-10 w-10 text-center rounded-full hover:bg-gray-400 lg:h-14 lg:w-14'>
                    U
                </div>
            </div>

        </div>        

    </div>
    </div>
    
  )
}

export default AppBar