import React from 'react';
import './Gallary.css';

function Gallary() {
    return (
        <div className='gallary-container'>
            <div className='top-row'>
                <div className='image-container'>
                    <img src="./images/1.png" alt="image 1" className='vertical-image' />
                    <div className='price-label'>$20</div>
                </div>
                <div className='image-container'>
                    <img src="./images/2.png" alt="image 2" className='wide-image' />
                    <div className='price-label'>$30</div>
                </div>
            </div>
            <div className='bottom-row'>
                <div className='image-container'>
                    <img src="./images/3.png" alt="image 3" className='normal-image' />
                    <div className='price-label'>$15</div>
                </div>
                <div className='image-container'>
                    <img src="./images/4.png" alt="image 4" className='normal-image' />
                    <div className='price-label'>$25</div>
                </div>
                <div className='image-container'>
                    <img src="./images/5.png" alt="image 5" className='normal-image' />
                    <div className='price-label'>$18</div>
                </div>
            </div>
        </div>
    );
}

export default Gallary;
