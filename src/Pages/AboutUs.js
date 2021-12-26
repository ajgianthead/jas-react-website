import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import AboutUsBanner from '../Components/AboutUs/AboutUsBanner'
import Footer from '../Components/Footer/Footer'

export default function AboutUs() {
    document.title = "JAS | About Us"
    
    return (
        <div>
            <Navbar />
            <AboutUsBanner />
            <Footer />
        </div>
    )
}
