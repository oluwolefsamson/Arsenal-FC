import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaSnapchat } from "react-icons/fa6";
import './SocialMedia.css'

const SocialMedia = () => {
  return (
    <section className='socialmedia-con'>
        <div className='header'>
            <h2>FOLLOW US</h2>
        </div>

        <div className='icons'>
            <span><FaFacebook size={30}/></span>
            <span><FaXTwitter size={30}/></span>
            <span><FaLinkedin size={30}/></span>
            <span><FaTiktok size={30}/></span>
            <span><IoLogoYoutube size={30}/></span>
            <span><FaSnapchat size={30}/></span>
        </div>
    </section>
  )
}

export default SocialMedia