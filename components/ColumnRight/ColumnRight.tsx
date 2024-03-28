import React from 'react'
import './ColumnRight.css'
import { GoDownload } from "react-icons/go";
import SocialMedia from '../SocialMedia/SocialMedia';

const ColumnRight = () => {
  return (
    <div className='col-right'>
      <img src='./odegard.jpg' alt=''/>
      <img src='./leah.jpg' alt=''/>
      <div className='calender'>
        <span>SYNC FIXTURES TO CALENDAR</span><GoDownload size={12}/>
      </div>
      <img src='./raya.jpg' alt='raya' />
      <img src='./henry.jpg' alt='raya' />
      < SocialMedia />
    </div>
  )
}

export default ColumnRight