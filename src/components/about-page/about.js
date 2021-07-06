import React from 'react'
import './about.scss'
import AccordionSection from '../accordion-page/accordion'
import jolt from '../assets/jolt-mobile.png'




const About = () => {
    
    return (
        <div className="about-wrapper">
            <div className='about-container'>
                <div className="about-contents">
                    <div className="about-column-one" id="accordion-column">
                        <AccordionSection/>
                    </div>
                    <div className="about-column-two">
                        <img src={jolt}/>
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}

export default About;