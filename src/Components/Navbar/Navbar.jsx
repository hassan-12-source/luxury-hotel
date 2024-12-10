import React, { useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MobileNav from '../NavbarMobile/NavbarMobile';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className='navbar'>
            <img src="./images/logo.png" alt="logo" className='logo' />
            <div className='hamburger' onClick={toggleMenu}>
                <FontAwesomeIcon icon={ faBars } />
            </div>
            <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                <li><a href="">Home</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">Reviews</a></li>
                <li><a href="">Contact</a></li>
            </div>

            <button className='nav-btn'>Book Now</button>
            <MobileNav isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
    )
}

export default Navbar;