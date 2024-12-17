import React from 'react';
import '../../App.css';
import EmbeddedVideo from '../EmbeddedVideo'
import Carousel from '../Carousel'




const carousel_items = [
    {
        type: 'spotify',
        spotifyType: 'track',
        spotifyId: '3e4Xiux29pxsRaTHWFK44c',
        title: 'Death of the Popstar',
        subtitle: 'We had the opportunity to arrange and produce for Pitch, Please! and their release "Death of the Popstar :)'
    },
    { 
        type: 'youtube', videoId: 'S_kYFa8Wiew', 
        title: 'DaCadence 2024 ICCA Set',
        subtitle: 'We had the opportunity to arrange and produce for Pitch, Please! and their release "Death of the Popstar :)'},
    { type: 'youtube-playlist', playlistId: 'PLBxAcBEuRqUngW0fcESVjdS3OCTZhVO_Z'},
    { type: 'spotify', spotifyType: 'track', spotifyId: '3e4Xiux29pxsRaTHWFK44c'}
]

function About() {
    return (
        <>
            <div className="Paragraph-pink">
                <p className='Paragraph-header'>
                    WHO ARE WE?
                </p>
                <p className='Paragraph-text'>
                We are AarinxAndy, two arrangers who first met in college whose musical styles and convictions melded like hand in glove… if you didn’t go to USC, that is. Aarin brings technical acumen and a decade of jazz performance experience while Andrew brought a unique perspective based on structural patterns in EDM, and the audacity to apply it elsewhere. Their first arrangement - “E.T” by Katy Perry - won Outstanding Arrangement at ICCA for Pitch, Please! (from UCLA) and the two realized their potential together.
                </p>
                <p className='Paragraph-text'>
                Our specialty is crafting unique arrangements that breathe fresh life into every piece we touch, blending unexpected elements and fusing different genres to create something unique. With a deep appreciation for artistry and a flair for the unconventional, we aim to transform familiar tunes into unforgettable experiences.
                </p>
                <p className='Paragraph-text'>
                We’ve been absolutely grateful to work for some amazing groups, one of which is DaCadence from the University of Maryland. Our work on their closer in 2023 and the whole set in 2024 was brought to the ICCA Finals stage in New York. Anyways I hope you enjoy our creations and if you want to work with us, hit that Contact button :)

                </p>
            </div>
{/* 
            <div className="Paragraph-purple">
                <p className='Paragraph-header'>
                    EPIC MEOW
                </p>
                
            </div> */}
            
            

            <div className="Paragraph-text">
                <h1>LATEST PROJECT</h1>
                
            </div>
            {/* <div className="Paragraph-purple">
                <Carousel items={carousel_items} />
            </div>
             */}
            <EmbeddedVideo embedId="S_kYFa8Wiew" />

            
        </>
    );
}

export default About