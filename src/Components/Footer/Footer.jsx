import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-section'>
            <div className='footer-container'>
                <img src="./images/logo.png" alt="logo" />
                <p>Bigwall Technology is a dynamic agency based in Marrakech, Morocco, leading the charge in digital transformation and web development since its establishment in 2020. Despite its relatively recent entry into the market, Bigwall has swiftly garnered acclaim for its prowess in these domains.</p>

            </div>
            <div className='footer-icons'>
                <h1>Follow Us</h1>
                <div className='social-media-icons'>
                    <img src="./images/logo-facebook.svg" alt="" />
                    <img src="./images/logo-instagram.svg" alt="" />
                    <img src="./images/logo-tiktok.svg" alt="" />
                </div>
            </div>

            <div className='bottom-text'>
                <p>Copyright © 2024 All Right Reserved HASSAN ADAHCHOUR</p>
            </div>

        </div>
    )
}

export default Footer