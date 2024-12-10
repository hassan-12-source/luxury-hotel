import React, { useState } from 'react'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faTimes, faBuilding, faPerson, faGear } from '@fortawesome/free-solid-svg-icons'

function About() {


    const [isVideoVisible, setIsVideoVisible] = useState(false);
    const handlePlayVideo = () => {
        setIsVideoVisible(true);
    }
    return (
        <div className='about-section'>
            <div className='about-container'>
                <div className='about'>
                    <span>About us</span>
                    <h1>At Diamond Luxury Hotels</h1>
                </div>
                <div className='paragraph-about'>
                    <p>Discover the epitome of elegance and comfort at Diamond Luxury Hotels. Our<br />
                        establishments offer unparalleled luxury with meticulously designed rooms<br />
                        and exceptional service. Indulge in exquisite dining experiences, rejuvenate<br />
                        at our world-class spas, and enjoy personalized service tailored to your needs. Whether<br />
                        you're here for business or leisure, our hotels provide a sanctuary of tranquility<br />
                        and sophistication. Explore our exclusive amenities and make your stay unforgettable.</p>
                </div>
            </div>
            <div className='video-container'>
                <div className='video-button'>
                    <button onClick={handlePlayVideo}>
                        <FontAwesomeIcon icon={faPlay} />Play Video
                    </button>
                </div>

                {isVideoVisible && (
                    <div className='video-popup'>
                        <button className='close-button' onClick={() => { setIsVideoVisible(false) }}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
            </div>
            <div className='about-icons'>
                <div className='icons-item'>
                    <FontAwesomeIcon icon={faBuilding} className='fa-icon' />
                    <p>We prioritize building long-term<br /> relationships with our clients<br /> and always put their needs first.</p>
                </div>
                <div className='icons-item'>
                    <FontAwesomeIcon icon={faPerson} className='fa-icon' />
                    <p>We prioritize building<br /> long-term relationships with our clients<br /> and always put their needs first.</p>
                </div>
                <div className='icons-item'>
                    <FontAwesomeIcon icon={faGear} className='fa-icon' />
                    <p>We prioritize building long-term<br /> relationships with our clients<br /> and always put their needs first.</p>
                </div>
            </div>
        </div>
    )
}

export default About;