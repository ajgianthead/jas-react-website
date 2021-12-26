import React from 'react'
import './Footer.css'
import LOGO from'../Navbar/jas_logo.png' 
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer-wrap'>
                <div className="footer-items">
                    <img src={LOGO} alt='Logo' className="footer-logo"/>
                    <h5 className="footer-head">Learn. Explore. Invent</h5>
                </div>
                <div className="footer-items">
                    <h3 className="explore-head">Explore</h3>
                    
                    <Link to='/' className="footer-item" >
                        <li className="footer-item">Home</li>
                    </Link>
                    <Link to='/projects' className="footer-item">
                        <li className="footer-item">Projects</li>
                    </Link>
                    
                    
                    <Link className="footer-item" to='/aboutus'>  
                        <li className="footer-item">About Us</li>
                    </Link>
                    <Link className="footer-item" to="/contactus">
                        <li className="footer-item">Contact Us</li>
                    </Link>

                    
                </div>
                <div className="footer-items">
                    <h2 className="explore-head">Follow</h2>
                    <h7><a href= "https://www.instagram.com/northeast_jas/" target="_blank" rel="noreferrer">Instagram</a></h7>
                </div>
                
                
            </div>
            {/* <div>
                <h8>© Junior Academy of Science at Northeast High. All rights reserved.</h8>
            </div> */}
        </div>
    )
}
