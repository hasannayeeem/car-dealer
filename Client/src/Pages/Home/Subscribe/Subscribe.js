import React from 'react';
import './Subscribe.css'
import cycle from '../../../images/bicycle.png'

const Subscribe = () => {
    return (
        <div className='subscribe container-float'>
            <h1 className='header1'>SUBSCRIBE NEWSLETTER</h1>
            <img src={cycle} alt="" className='cycle'></img>
            <p className='paragraph'>subscribe and get in touch with us and get regular updates from us</p>
            <div className='form'>
                <input type="email" name='' className='input-email' placeholder='Enter your email..' />
                <button className='main-btn'>Subscribe</button>
            </div>
        </div>
    );
};

export default Subscribe;