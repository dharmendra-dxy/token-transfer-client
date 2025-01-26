import React from 'react'

const Button = ({title, onClick, classProp}) => {
  return (
    <button 
    className={`bg-green-400 px-6 py-2 w-full text-white rounded-xl hover:bg-green-600 border border-green-600 ${classProp} ` }
    onClick={onClick}
    >

        {title}

    </button>
  )
}

export default Button