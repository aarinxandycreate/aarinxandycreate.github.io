import React from 'react';
import '../../App.css';
import EmbeddedVideo from '../EmbeddedVideo'

function About() {
    return (
        <>
            <div className="Paragraph-pink">
                <p className='Paragraph-header'>
                    LOREM IPSUM
                </p>
                <p className='Paragraph-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id 
                    est laborum.
                </p>
            </div>

            <div className="Paragraph-purple">
                <p className='Paragraph-header'>
                    LOREM IPSUM
                </p>
                <p className='Paragraph-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id 
                    est laborum.
                </p>
            </div>
            
            

            <div className="Paragraph-text">
                <h1>LATEST PROJECT</h1>
                
            </div>

            <EmbeddedVideo embedId="GmCLttye9gA" />

            
        </>
    );
}

export default About