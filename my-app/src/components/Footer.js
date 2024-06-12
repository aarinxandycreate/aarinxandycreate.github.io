import React from 'react'
import './Footer.css';
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { Button } from './Button';

import { Link } from 'react-router-dom';

function Footer() {
    return (
        
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Check out our creations!!
                </p>
                {/* <p className='footer-subscription-text'>
                    But, this email prompt does nothing... unfortunately...
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
                <a
                    className="App-link"
                    href="https://www.instagram.com/aarinxandycreate/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    text-decoration="none"
                >
                    CHECK US OUT
                </a> */}

            </section>
            <div class="footer-icons">
                
                    <a href="https://www.instagram.com/aarinxandycreate/?hl=en" class="fa fa-instagram"><TiSocialInstagram /></a>
                    <a href="https://youtube.com/playlist?list=PLBxAcBEuRqUngW0fcESVjdS3OCTZhVO_Z&si=8ACJx3Nq4xhGA-YD" class="fa fa-youtube"><TiSocialYoutube /></a>
                
            </div>
            {/* <section className='footer-subscription'>
                <p className='footer-subscription-text'>
                    Photo: Andre Liu (2019)
                </p>
            </section> */}
        </div>
    );
}

export default Footer