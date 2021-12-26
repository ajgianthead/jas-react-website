import React from 'react'
import './AboutUsBanner.css'

export default function AboutUsBanner() {
    return (
        <div>
            <div className='about-us-banner'>
                <h1 className='banner-header'>About Us</h1>   
            </div>
            <div className='about-us-banner-white'>
                <h1 className='banner-header-white'>Welcome to JAS</h1> 
                <br />
                <h4 className="banner-body-white">Welcome to the Junior Academy of Science! This is a club that is focused on developing life long skills through the use of the sciences. We help bring ideas to life through projects and activities that interest our members and allow them to build their resume. </h4>  
            </div>
            <div className='about-us-banner-reg'>
                <h1 className='banner-header-reg'>Events</h1>  
                <br />
                <h4 className='banner-body-reg'> We host fundraising events that help us continue our projects.  We were able to support [insert ice cream place name], a local ice cream shop, by hosting a fundraising event at their shop.</h4> 
            </div>
            <div className='about-us-banner-white'>
                <h1 className='banner-header-white'>Projects</h1> 
                <br />
                <h4 className="banner-body-white-1">We are constantly looking for projects for our members to join. Our past projects have been the InvenTeam, where our members invented a [whatever bike invention they made] that President Barack Obama was able to ride in [insert year(s) ]and a [mosquito agitator?] in [insert year(s) ]. Last year our members were able to compete in Samsung Solve For Tomorrow, a [nationwide or global?] competition, where they invented a prototype for an app called the DiabeticMedic which would act as a one stop shop for information on the disease and easy monitoring. Our members went on to be state winners in the competition and were able to win $15,000 in technology for our school. </h4>  
            </div>
        </div>
    )
}
