import { Facebook, Instagram, LocationCity, Message, Phone, Pinterest, Twitter } from '@mui/icons-material'
import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="wrapper">
                <div className="left">
                    <h2>DEV_CODER</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, enim provident ab, culpa inventore repudiandae debitis ratione similique, facere qui deleniti error excepturi autem nulla.</p>

                    <div className="socialMedia">
                        <span><Facebook className='mediaIcon' /></span>
                        <span><Instagram className='mediaIcon' /></span>
                        <span><Twitter className='mediaIcon' /></span>
                        <span><Pinterest className='mediaIcon' /></span> 
                    </div>
                </div>
                <div className="right">
                    <LocationCity className='contactIcon'/>
                    <p>Kathmandu</p>
                    <Phone className='contactIcon'/>
                    <p>+977 01-548676, 01-842065</p>
                    <Message className='contactIcon'/>
                    <p>devcoder143@gmail.com</p>
                   
                </div>
            </div>

        </div>
    )
}

export default Footer
