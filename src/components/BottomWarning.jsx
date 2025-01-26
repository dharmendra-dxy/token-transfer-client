import React from 'react'
import { Link } from 'react-router'

const BottomWarning = ({label, link, to}) => {
  return (
    <div className='mt-2'>
        <p className='text-sm text-gray-600'>
            {label} 
            <Link to={to}
            className='underline hover:text-gray-800'
            > {link}</Link>
        </p>

    </div>
  )
}

export default BottomWarning