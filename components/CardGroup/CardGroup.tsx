import React from 'react'
import './CardGroup.css'

const CardGroup = () => {
  return (
    <section className='card-con'>
        <div className='card'>
            <img src='./conti-cup.jpg' alt='conti' />
            <span>FEATURE</span>
            <span>Look back at our six previous conti cup
                triumphs.
            </span>
        </div>

        <div className='card'>
            <img src='./academyplayer.jpg' alt='academy' />
            <span>INTERNATIONAL</span>
            <span>Trio of academy players reach U17 European
                finals.
            </span>
        </div>

        <div className='card'>
            <img src='./zinchenko.jpg' alt='zinny' />
            <span>INTERNATIONAL</span>
            <span>Zinchenko and Kiwior qualify for Euro 2024.
            </span>
        </div>
    </section>
  )
}

export default CardGroup