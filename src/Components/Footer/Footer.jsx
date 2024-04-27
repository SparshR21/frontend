import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import linkedin_icon from '../Assets/linkedin_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <a href="https://www.instagram.com/_sparshrastogi" target="_blank" rel="noopener noreferrer">
                <img src={instagram_icon} alt="" />
            </a>
            </div>
            <div className="footer-icons-container">
            <a href="https://www.linkedin.com/in/sparsh-rastogi-502313203" target="_blank" rel="noopener noreferrer">
                <img src={linkedin_icon} alt="" style={{ width: '24px', height: '24px' }} />
           </a>
            </div>
            <div className="footer-icons-container">
            <a href="https://wa.me/9560882076" target="_blank" rel="noopener noreferrer">
                <img src={whatsapp_icon} alt="" />
                </a>
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer