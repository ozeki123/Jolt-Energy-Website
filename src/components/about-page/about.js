import React from 'react'
import './about.scss'
import AccordionSection from '../accordion-page/accordion'




const About = () => {
    
    return (
        <div className="about-wrapper">
            <div className='about-container'>
                <div className="about-contents">
                    <div className="about-column-one" id="accordion-column">
                        <AccordionSection/>
                    </div>
                    <div className="about-column-two">
                        <h1>Hello World.</h1>
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}

export default About;