import React from 'react';
import img from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bg'>
            <div className='footer container'>
                <div>
                <img src={img} alt=''></img>
                <div>
                    <p className='fparagraph lh-base'>It is a long established fact that the read will been distracted by there readable an important content.
                    </p>
                    {/* <h4>Find Us On: </h4>
                    <div>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                            <FontAwesomeIcon icon={faFacebook} />
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faTrashCan} />
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faTrashCan} />
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faTrashCan} />
                        </span>
                    </div> */}
                </div>
            </div>
            <div className='my-3 my-lg-0'>
                <h3 className='column-title ms-lg-5 '>Pages</h3>
                <div className='footer-link ms-lg-5 lh-lg'>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='blog'>Blog</a>
                    </li>
                    <li>
                        <a href='contact'>Contact</a>
                    </li>
                    <li>
                        <a href='about'>About Us</a>
                    </li>
                </div>
            </div>
            <div className='my-3 my-lg-0'>
                <h3 className='column-title'>Recent Posts</h3>
                <div className=' lh-lg'>
                    <div>Post Here</div>
                    <div>Post Here</div>
                </div>
            </div>
            <div className='my-3 my-lg-0'>
                <h3 className='column-title '>Subscribe Us</h3>
                <div>
                    <input className='footer-email' type="text" id='' placeholder='Enter your email'/>
                    <button className='footer-button'>Subscribe</button>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Footer;