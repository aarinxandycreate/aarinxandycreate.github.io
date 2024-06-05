// import React from 'react';
import '../../App.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Contact.css'


function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, form.current, {
                publicKey: process.env.REACT_APP_EMAIL_PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <>

            {/* <p className='App-title-text'>
                PAGE IN PROGRESS
            </p> */}
            {/* <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form> */}

            <div className='paragraph-pink'>
                {/* <form className="form" ref={form} onSubmit={sendEmail}> */}
                <form className="form" ref={form} onSubmit={sendEmail}>
                    <div className='form-h2'>CONTACT US</div>
                    <p type="Name:"><input name="user_name" placeholder="Write your name here.."></input></p>
                    <p type="Email:"><input name="user_email" placeholder="Let us know how to contact you back.."></input></p>
                    <p type="Message:"><input name="message" placeholder="What would you like to tell us.."></input></p>
                    <button type="submit">Send Message</button>
                </form>
            </div>
            



        </>
    );
}

export default Contact