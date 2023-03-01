import React from 'react'
import Button from '../Button/Button';
import './Card.css';



const Card = ({ frameworks, changeFramework}) => {
  return (
    <>
    <div className='card'>
        <p className="Quote">{frameworks.quote}</p>
        <p className='author'>{frameworks.author}</p>
        <div className='btn'>
            <Button handleClick={changeFramework}/>
        </div>
    </div>
    </>
  )
}

export default Card