import React from 'react'
import './navbar.scss';

const Navigation = () => {
    return (
        <nav>
            <ul className="container">
                <li className="list-left">Jolt Energy</li>
                <ul className="list-right">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </ul>
        </nav>
        
    )
}

export default Navigation;