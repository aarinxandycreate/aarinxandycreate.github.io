import React from 'react'
import './Footer.css';
import { Button } from './Button';

import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Aarin x Andy newsletter to receive our best arrangement deals
                </p>
                <p className='footer-subscription-text'>
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
            </section>
            <section className='footer-subscription'>
                <p className='footer-subscription-text'>
                    Photo: Andre Liu (2019)
                </p>
            </section>
        </div>
    );
}

export default Footer