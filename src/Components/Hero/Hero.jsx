import React from 'react'
import './Hero.css'
import { motion } from "framer-motion";

function Hero() {
    return (
        <div className='hero-section'>
            <div className='hero-container'>
                <div className='hero-image'>
                    <img src="./images/hero_bg.png" alt="" />
                    <div className='hero-overly'>
                        <motion.h1
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            Welcome To The Place<br />
                            Where Luxury Meets<br />
                            Affordability
                        </motion.h1>
                        <motion.p
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                        >
                            In suscipit urna mi, vel rutrum metus consequat ac.<br />
                            Integer ac magna pharetra, vestibulum augue eget, pharetra<br />
                            mauris. Maecenas non elit viverra, sollicitudin quam.
                        </motion.p>
                        <motion.div
                            className="hero-button"
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 2, ease: "easeOut" }}
                        >
                            <button className="btn-primary">Work With Us</button>
                            <button className="btn-secondary">View Our Services</button>
                    </motion.div>
                </div>
            </div>
        </div>
        </div >
    )
}

export default Hero