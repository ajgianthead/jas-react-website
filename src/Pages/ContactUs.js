import React from 'react'
import ContactUsBanner from '../Components/ContactUs/ContactUsBanner'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'

export default function ContactUs() {
    document.title = "JAS | Contact Us"
    return (
        <div>
            <Navbar />
            <ContactUsBanner />
            <Footer />
        </div>
    )
}
