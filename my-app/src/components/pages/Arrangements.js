import React from 'react';
import '../../App.css';
import '../TwoColumn.css'
import Carousel from '../Carousel'

const carousel_items = [
    {
        type: 'spotify',
        spotifyType: 'track',
        spotifyId: '3e4Xiux29pxsRaTHWFK44c',
        title: 'Death of the Popstar',
        subtitle: 'We had the opportunity to arrange and produce for Pitch, Please! and their release "Death of the Popstar :) \
                    For this set, we loved Son Lux\'s "Dream State" and found unique ways to weave motifs from Rina Sawayama\'s \
                    music throughout the set. Check out their spotify release here!'
    },
    { 
        type: 'youtube', videoId: 'S_kYFa8Wiew', 
        title: 'DaCadence 2024 ICCA Set',
        subtitle: 'We had the opportunity to arrange and produce for DaCadence from the University of Maryland and watched them \
                    take our work all the way to ICCA Finals! For this set, we took a lot of inspiration from J-Pop and K-Pop, \
                    also looked to integrate some extra songs for narrative purposes, notably "Washing Machine Heart" by Mitski \
                    and "Like That" by Fox Stevenson. See if you can find those references ;)'},
]


function Arrangements() {
    return (
        <>
            <div className="Paragraph-pink">
                <p className='Paragraph-header'>
                    ARRANGEMENTS
                </p>
            </div>
            <div className="Paragraph-purple">
                    <Carousel items={carousel_items} />
            </div>
        </>
        
    );
}

export default Arrangements