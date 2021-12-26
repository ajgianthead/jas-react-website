import React from 'react'
import './ContactUsBanner.css'
import InstagramIcon from '@material-ui/icons/Instagram';

export default function ContactUsBanner() {
    return (
        <div>
            <div className='about-us-banner'>
                <h1 className='banner-header'>Contact Us</h1>   
            </div>
            <div className = 'button-container'>
                <a href="https://www.instagram.com/ms_m_stem/" target = "_blank" rel="noreferrer">
                    <div className= "ig-1">
                        <InstagramIcon style={{fontSize: 40, color: "white"}} />

                        <h2>Ms.Mabour's Instagram</h2>
                    </div>
                </a>
                <br />
                <a href="https://www.instagram.com/northeast_jas/" target = "_blank" rel="noreferrer">
                    <div className="ig-2">
                        <InstagramIcon style={{fontSize: 40, color: "white"}} />

                        <h2>JAS Instagram</h2>
                    </div>
                </a>

            </div>
        </div>
    )
}
