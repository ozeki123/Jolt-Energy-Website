import React, { useEffect, useState } from 'react'
import './home.scss'
import Footer from '../footer/footer'
import Navbar from '../navbar/navbar'
import Accordion from '../accordion-page/accordion'
import About from '../about-page/about'

const Home = () => {
    return (
        <div class="wrapper">
            <div className="bg-container">
                <div className="main-container">
                    <div className="nav-container">
                        <Navbar/>
                        <hr />
                    </div>
                    <div className="home-container">
                        <div className="text-container">
                            <div className="flex-grid-container">
                                <div className="flex-large">
                                    <h1>A cleaner future through <br/>
                                    innovative technology</h1>
                                    <p>クリーンかつ効率的的な未来を築きます</p>
                                </div>
                                <div className="flex-grid-group-one">
                                </div>
                                <div className="flex-grid-group-two">
                                    <div className="flex-small">
                                        <h1>Completely sustainable</h1>
                                        <p>クリーンかつ効率的な未来<br/>を築きますリーンかつ的を<br/>クリーンかつ効率的な未来<br/>を築きますリーンかつ的を<br/></p>
                                    </div>
                                    <div className="flex-small">
                                        <h1>World</h1>
                                        <p>クリーンかつ効率的な未来<br/>を築きますリーンかつ的を<br/>クリーンかつ効率的な未来<br/>を築きますリーンかつ的を<br/></p>
                                    </div>
                                    <div className="flex-small">
                                        <h1>End.</h1>
                                        <p>クリーンかつ効率的な未来<br/>を築きますリーンかつ的を<br/>クリーンかつ効率的な未来<br/>を築きますリーンかつ的を<br/></p>
                                    </div>
                                </div>
                                <div className="flex-grid-group-three">
                                    <div className="flex-small">
                                    </div>
                                    <div className="flex-small">
                                    </div>
                                    <div className="flex-small">
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div> 
                    </div>
                    <div className="footer-section">
                        <hr/>
                        <Footer />
                    </div>
                </div>
            </div>
            
            <section className="about-container">
                <About />
            </section>          
                   
        </div>

    )
}
export default Home;
