import React, { useState } from 'react'
import logo from './jas_logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom';

import { Drawer } from '@material-ui/core';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const handleDrawer = () => {
        setOpen(true)
    }
    return (
        <div>
            <nav className="navbar">
                <ul className="navbar-container">
                    <div className = 'menu' onClick = {handleDrawer}>
                        <i className="fas fa-bars  "></i>
                    </div>
                    
                    
                    
                    <Link to='/' className="nav-item" >
                        <li className="nav-item">Home</li>
                    </Link>
                    <Link to='/projects' className="nav-item">
                        <li className="nav-item">Projects</li>
                    </Link>
                    
                    <li>
                        <img src={logo} alt="Logo" className="logo" />
                    </li>
                    <Link className="nav-item" to='/aboutus'>  
                        <li className="nav-item">About Us</li>
                    </Link>
                    <Link className="nav-item" to="/contactus">
                        <li className="nav-item">Contact Us</li>
                    </Link>
                    
                    
                </ul>
                
            </nav>

            <Drawer 
            anchor='left'
            open = {open}
            onClose={() => setOpen(false)}
            >
                <div className="times">
                    <i class="fas fa-times icon-menu" onClick={() => setOpen(false)}></i>
                </div>
                <ul className="menu-container">
                    
                    <Link to='/' className="menu-item" >
                        <li className="menu-item">Home</li>
                    </Link>
                    <Link to='/projects' className="menu-item">
                        <li className="menu-item">Projects</li>
                    </Link>
                
                    <Link className="menu-item" to='/aboutus'>  
                        <li className="menu-item">About Us</li>
                    </Link>
                    <Link className="menu-item" to="/contactus">
                        <li className="menu-item">Contact Us</li>
                    </Link>
                </ul>
            </Drawer>
        </div>
    )
}
