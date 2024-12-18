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
        subtitle: 'Our first producing credits are for Pitch, Please! and their release "Death of the Popstar", which we also arranged \
                    large portions. For this set, we loved Son Lux\'s "Dream State" and found unique ways to weave motifs from Rina Sawayama\'s \
                    music throughout the set. Check out their spotify release here!'
    },
    { 
        type: 'youtube', videoId: 'S_kYFa8Wiew', 
        title: 'DaCadence 2024 ICCA Set (Whole Set)',
        subtitle: 'We had the opportunity to arrange and produce for DaCadence from the University of Maryland and watched them \
                    take our work all the way to ICCA Finals! For this set, we took a lot of inspiration from J-Pop and K-Pop, \
                    also looked to integrate some extra songs for narrative purposes, notably "Washing Machine Heart" by Mitski \
                    and "Like That" by Fox Stevenson. See if you can find those references ;)'},
    { 
        type: 'youtube', videoId: 'vuF5npEOKYs', 
        title: 'DaCadence 2023 ICCA Closer (Me and Your Mama)',
        subtitle: 'Our first work for DaCadence was a short-notice replacement to help out with their closer rendition of Me and Your Mama \
                    for their 2023 ICCA Set. They also brought this piece all the way to New York for ICCA Finals \
                    and showcased how they can wow the audience with tremendouse power.'},
    { 
        type: 'youtube', videoId: 'D6Hi55AljCo', 
        title: 'Pitch, Please! 2020 ICCA Opener (E.T.)',
        subtitle: 'Our first arrangement together was a beautiful, dark, rendition of Katy Perry\'s "ET," that established the early seeds \
                    for our style. We won our first ICCA Outstanding Arrangement award for this and this really fueled our love for a cappella \
                    and helped us realize that we had potential within this space'},
    { 
        type: 'youtube', videoId: 'Z5yGdtJi9FY', 
        title: 'Pitch, Please 2021 ICCA Submission (Bad Dream)',
        subtitle: 'During the COVID year, we took our skills digitally and lent our skills to video production as well as arranging \
                    for this cover of Ruelle\'s "Bad Dream." This was nominated for three (3) A Cappella Video Awards (AVA) and netted \
                    the group 3rd place in their ICCA quaterfinal.'},
    { 
        type: 'youtube', videoId: 'b9pYO5NnRwQ', 
        title: 'Pitch, Please 2022 ICCA Application (Trampoline)',
        subtitle: ''},
    { 
        type: 'youtube', videoId: 'mtn1hUvmODQ', 
        title: 'Pitch, Please 2022 ICCA Set (Whole Set)',
        subtitle: ''},
    { 
        type: 'youtube', videoId: 'IV-vzNsJG5U', 
        title: 'Merry Christmas, Happy Holidays',
        subtitle: 'Yes that is me reacting to the Kyle Trask -> Kyle Pitts connection against Bama.'},
]
// https://youtu.be/vuF5npEOKYs?si=u6LOG541aXYfjaQ3&t=466

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