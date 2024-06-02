import React from 'react';
import '../../App.css';
import EmbeddedVideo from '../EmbeddedVideo'

function About() {
    return (
        <> 
            <p className='paragraph'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id 
                est laborum.
            </p>
            
            <p className='App-title-text'>
            <div className="App">
                <h1>Latest Project</h1>
                <EmbeddedVideo embedId="GmCLttye9gA" />
                </div>
            </p>
            
        </>
    );
}

export default About