import React from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import CurrentProjects from '../Components/Projects/CurrentProjects'
import ProjectsBanner from '../Components/Projects/ProjectsBanner'

export default function Projects() {
    document.title = "JAS | Projects"
    return (
        <div>
            <Navbar />
            <ProjectsBanner />
            <CurrentProjects />
            <Footer />
        </div>
    )
}
