import React from 'react'
import './CurrentProjects'


export default function ProjectData(props) {
    return (
        <div className='card'>
            <div className='card-pic'>
                
            </div>
            <div className='card-text'>
                <h3>{props.cardText}</h3>
                <p>{props.cardParagraph}</p>
            </div>
        </div>
    )
}
