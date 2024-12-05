import React from 'react'
import './Footer.css';
import {
    TiSocialInstagram,
    TiSocialYoutube,
    TiSocialInstagramCircular,
    TiSocialYoutubeCircular,
} from "react-icons/ti";
import { AiFillSpotify } from "react-icons/ai";
import { HiMusicalNote, } from "react-icons/hi2";


import { Button } from './Button';
import { Link } from 'react-router-dom';
// import '../App.css'


function Footer() {
    return (

        <div className="footer-container">
            <div className='footer-row'>
                <div className='left-column'>
                    <div className='box'>
                        <div className='footer-subscription'>
                            <div className='footer-logo'>
                                Aarin x Andy
                            </div>
                            <div className='footer-subscription-text left'>
                                Thoughtful arrangements for thoughtful groups
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right-column'>
                    <div className='box'>
                        <div className='footer-subscription'>
                            <div className='footer-subscription-text right'>
                                Check out our creations!
                            </div>
                        </div>

                        <div className="footer-icons">
                            {/* <ul>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/aarinxandycreate/?hl=en" class="fa fa-ig"><TiSocialInstagram /></a>
                                <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/playlist?list=PLBxAcBEuRqUngW0fcESVjdS3OCTZhVO_Z&si=8ACJx3Nq4xhGA-YD" class="fa fa-yt"><TiSocialYoutube /></a>
                                <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/playlist/4CLdUK0eff4vEaoptx9GvF?si=0530166dd74d4fba" class="fa fa-spotify"><AiFillSpotify /></a>
                                <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/playlist?list=PLBxAcBEuRqUngW0fcESVjdS3OCTZhVO_Z&si=8ACJx3Nq4xhGA-YD" class="fa fa-music"><HiMusicalNote /></a>
                            </ul> */}

                            <ul>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/aarinxandycreate/?hl=en" class="fa fa-ig"><TiSocialInstagram /></a>
                                <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/playlist?list=PLBxAcBEuRqUngW0fcESVjdS3OCTZhVO_Z&si=8ACJx3Nq4xhGA-YD" class="fa fa-yt"><TiSocialYoutube /></a>
                                <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/playlist/4CLdUK0eff4vEaoptx9GvF?si=0530166dd74d4fba" class="fa fa-spotify"><AiFillSpotify /></a>
                            </ul>

                            {/* <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/aarinxandycreate/?hl=en" class="fa fa-music" ><HiMusicalNote /></a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='hline'></div>
            <div className='footer-subscription footer-subscription-text'>2024 Aarin x Andy Create</div>
        </div>

    );
}

export default Footer