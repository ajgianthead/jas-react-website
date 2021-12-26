import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Slider from '../Components/Slider/Slider'
import InfoCard from '../Components/InfoCard/InfoCard'
import Footer from '../Components/Footer/Footer'


export default function Home() {
    document.title = "JAS | Home"
    return (
        <div>
            <Navbar />
            <Slider />
            <InfoCard />
      
            <Footer />
        </div>
    )
}
