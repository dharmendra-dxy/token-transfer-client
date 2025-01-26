import React from 'react'

const SubHeading = ({label}) => {
  return (
    <div className=' mt-2 mb-8'>
        <p className='text-gray-500 text-sm font-medium text-center'>
            {label}
        </p>
    </div>
  )
}

export default SubHeading