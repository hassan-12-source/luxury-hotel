import React from 'react'
import './ContactDown.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocation } from '@fortawesome/free-solid-svg-icons'

function ContactDown() {
    return (
        <div className='contact-container'>
            <div className='icon-container'>
                <div className='icon-location'>
                    <FontAwesomeIcon icon={faLocation} />
                </div>
                <div className='text-contact'>
                    <span>Address</span>
                    <p>N 5, res Firdaous, Bd Moulay Rachid, Marrakech 40000</p>
                </div>
            </div>

            <div className='icon-container'>
                <div className='icon-location'>
                    <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className='text-contact'>
                    <span>Phone</span>
                    <p>08086-01751</p>
                </div>
            </div>

            <div className='icon-container'>
                <div className='icon-location'>
                    <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className='text-contact'>
                    <span>Email</span>
                    <p>example@yourdomain.net</p>
                </div>
            </div>
        </div>
    )
}

export default ContactDown