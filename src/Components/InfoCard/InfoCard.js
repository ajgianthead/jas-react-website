import React from 'react'
import './InfoCard.css'
import atom from './atom.svg';
import engineering from './engineering.svg';

export default function InfoCard() {
    return (
        <div>
            <div className='info-card-container'>
            <div className='card-title'>
                <h1>What we do</h1>
            </div>
            <div className='card-text-1'>
                <p>
                We help bring your ideas to life. We do projects and activities that interest our members and allow them to build their resume. Want to learn more <span className='link'>About Us</span>?
                </p>
            </div>
            
        </div>
        <div className="info-container">
            <div className='science'>
                
                <img src={atom} alt='Atom' />
                
                <p className='science-text'>Use the scientific method to solve everyday problems</p>
            </div>
            <div className='engineering'>
                
                <img src={engineering} alt='Engineering'/>
                
                <p className='engineering-text'>Get your gears cranking away at sweet ideas!</p>
            </div>
        </div>
        </div>
        
    )
}
