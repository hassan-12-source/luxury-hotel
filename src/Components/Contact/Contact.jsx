import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocation } from '@fortawesome/free-solid-svg-icons'

function Contact() {
    return (
        <div className='contact-section'>
            <div className='info-container'>
                <h1>Contact Information</h1>
                <p>Contact us directly using the form, or reach out with this information.</p>
                <div className='contact-icons'>
                    <h2><FontAwesomeIcon icon={faEnvelope} /> Example@mail.com</h2>
                </div>
                <div className='contact-icons'>
                    <h2><FontAwesomeIcon icon={faPhone} /> +123456789</h2>
                </div>
                <div className='contact-icons'>
                    <h2><FontAwesomeIcon icon={faLocation} /> Marrakesh, Morocco</h2>
                </div>
            </div>

            <div className='contact-form'>
                <div className='form-row'>
                    <div className='form-group'>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" name="phone" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" />
                    </div>
                </div>
                <div className='btn-send'>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;