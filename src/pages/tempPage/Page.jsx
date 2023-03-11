import React, { useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';
import Slider from '../../components/homeSlider/Slider';
import Last from '../../components/myLastWatch/Last';
import Navbar from '../../components/navbar/Navbar';
import Top from '../../components/top/Top';
import './page.css'

const Page = () => {

    const [movies, setMovies] = useState('')

    useEffect(() => {
        fetch('https://omdbapi.com/?i=tt3896198&apikey=4b545227&s=mystery')
        .then(res => res.json())
        .then(res => {setMovies(res);console.log(res)})
        .catch(err => {console.log(err)})
    },[])

    return (
        <div className='Page'>
            <Navbar/>
            <Slider/>
            <Last/>
            <Top/>
            <Footer/>
        </div>
    );
}

export default Page;
