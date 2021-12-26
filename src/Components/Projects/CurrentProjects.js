import React from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import PODLOGO from '../Slider/podcast_logo_1.png';
import JSEHS from '../Slider/JSEHS.png';
import PI from '../Slider/einstein_img.jpg';
import ALLCAP from '../Slider/jas_allcap.png';
// import ISEF from '../Slider/isef.png';


import './CurrentProjects.css'
import NewCard from "../InfoCard/NewCard"
import IMAGE from '../Projects/sft-logo.jpg'


export default function CurrentProjects() {

    var podcastText = "This the official JAS Pocast. Below you can find all of our most recent episodes."
    

    return (
        <div>
            <div className='current-projects-container'>
                
                <Accordion>
                    <AccordionSummary className="summary" expandIcon = {<ExpandMoreIcon />}>
                        <h2>Current Projects and Events</h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='section-2'>
                            {/* <NewCard title="Samsung Solve For Tomorrow" body="Aute officia laboris quis occaecat nostrud sunt nisi  proident     excepteur..." image= {IMAGE} /> */}
                            <NewCard title="The JAS Breakout Podcast" body="This the official JAS Pocast. Below..." image= {PODLOGO} modalText={podcastText} gallery="EPISODES NOT YET AVAILABLE" />
                            {/* <NewCard title="Science Fair" body="Aute officia laboris quis occaecat nostrud sunt nisi proident excepteur...  "     image= {ISEF} /> */}
        
        
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
            <div className='past-projects-container'>
                
                <Accordion>
                    <AccordionSummary className="summary" expandIcon = {<ExpandMoreIcon />}>
                        <h2>Past Projects and Events</h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='section-2'>
                            <NewCard title="ALL-CAP Challenge" body="The JAS ALL CAP Challenge was..." image= {ALLCAP} modalText="NO INFORMATION PROVIDED" />
                            <NewCard title="Samsung Solve For Tomorrow" body="During Samsung Solve for Tomorrow, JAS..." image= {IMAGE} modalText="NO INFORMATION PROVIDED" />
                            <NewCard title="PI/Einstein Day" body="Aute officia laboris quis occaecat nostrud sunt nisi    proident   excepteur..." image= {PI} modalText="NO INFORMATION PROVIDED" />
                            <NewCard title="JSEHS" body="JSEHS was held at the University of Florida located in Gainesville, Florida. Members from JAS, along with others...  "     image= {JSEHS} modalText="NO INFORMATION PROVIDED" />
        
        
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}
