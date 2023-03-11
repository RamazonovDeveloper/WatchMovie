import React from 'react';
import Footer from '../../components/footer/Footer';
import Player from '../../components/moviePlayer/Player';
import Last from '../../components/myLastWatch/Last';
import Navbar from '../../components/navbar/Navbar';
import Top from '../../components/top/Top';
import Video from '../../components/videoSection/Video';
import './Movie.css'


const Movie = () => {
    return (
        <div className='video'>
            <Navbar/>
            <Video controls={true} className='my-video' src="/samle-video.mp4"/>
            <Top/>
            <Last/>
            <Footer/>
        </div>
    );
}

export default Movie;
