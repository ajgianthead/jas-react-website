import React from 'react'
import './Slider.css'
import Carousel from 'react-bootstrap/Carousel'



export default function Slider() {
    return (
        
            <Carousel className='carousel' wrap={true}>
                <Carousel.Item className='carousel-item-1'>
                    <div className='slide-container'>
                        <ul>
                            <li>
                                <h1 className='slide-header'>Welcome to the Junior Acadmey of Science here at Northeast High School</h1>
                            </li>
                            <br />
                            <li>
                                <h2 className='slide-sub'>JAS meets virtually on every Monday @3:00 - 5:00pm after school</h2>
                            </li>
                            <li>
                                <h2 className='slide-sub'>To get more information about the virtual meeting,<span className='info-link'><h2>Contact Us</h2></span> </h2>
                            </li>
                        </ul>
                        
                        
                        
                    </div>  
                </Carousel.Item>
                <Carousel.Item className='carousel-item-4'>
                    <div className='slide-container'>
                        <ul>
                            <li>
                                <h1 className='slide-header'>JAS All-Cap Challenge</h1>
                            </li>
                            <br />
                            <li>
                                <h4 className='slide-sub'>Are you a creative person?</h4>
                                <h4 className='slide-sub'>Enter our All Cap challenge!</h4>
                                <h4 className='slide-sub'>Show us your best bottle cap artwork display through our virutal gallery!</h4>
                                <h4 className='slide-sub'>With many prizes!</h4>
                                <br />
                                <h4 className='slide-sub-link'>Takes place through 11/9/2020 - 11/28/2020</h4>
                                
                            </li>
                        </ul>
                        
                        
                    </div>  
                    
                </Carousel.Item>
                <Carousel.Item className='carousel-item-2'>
                    <div className='slide-container'>
                        <h1 className='slide-header'>The JAS Breakout Podcast</h1>
                    </div>  
                </Carousel.Item>
                {/* <Carousel.Item className='carousel-item-3'>
                    <div className='slide-container'>
                        <h1 className='slide-header'>Little Children at Work</h1>
                    </div>  
                </Carousel.Item> */}
                
                
            </Carousel>
        
        
            
    )
}
