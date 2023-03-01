import React from 'react'
import './Button.css'

const Button = ({handleClick}) => {
  return (
    <button onClick={handleClick} className='btn'>
        <span>Next Quote</span>
    </button>
  )
}

export default Button