import React, { useState } from 'react';
import slider1 from '../../img/slide1.jpg'
import slider2 from '../../img/slide4.jpg'
import slider3 from '../../img/slide3.jpg'
import slider4 from '../../img/slide5.jpg'
import exit from '../../img/exit.png'
import play from '../../img/playLast.png'
import './Slider.scss'
import { useNavigate } from 'react-router-dom';

const Slider = () => {

    const navigate = useNavigate()
    
    const handleLogOut = () => {
        localStorage.clear()
        navigate('login')
    }

    const [slider, setSlider] = useState(3)

    return (
        <div className='slider'>
            <img className='slider__img' src={ slider==1?slider1:(slider==2?slider2:(slider==3?slider3:slider4))} alt="" />
            <div className='slider__comp'>
                <div className='slider__comp__logout'>
                    <button onClick={() => {handleLogOut()}}>
                        <img src={exit} alt="" /> Logout
                    </button>
                </div>
                <div className='slider__comp__main'>
                    <button onClick={() => {navigate('movie')}} className='slider__comp__main__left'>
                        <img src={play} alt="" />
                    </button>
                    <div className='slider__comp__main__right'>
                        <h3>The Legend of Sunrise</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <span>Genre : Adventure</span>
                        <span>Duration : 2 hr 45 mins</span>
                        <span>Ratings : 4.5</span>
                    </div>
                </div>
                <div className='slider__comp__items'>
                    <h4>Trailers</h4>
                    <div className='slider__comp__items__images'>
                        <div onClick={() => {setSlider(1)}}>
                            <img src={slider1} alt="" />
                            <span>01</span>
                        </div>
                        <div onClick={() => {setSlider(2)}}>
                            <img src={slider2} alt="" />
                            <span>02</span>
                        </div>
                        <div onClick={() => {setSlider(3)}}>
                            <img src={slider3} alt="" />
                            <span>03</span>
                        </div>
                        <div onClick={() => {setSlider(4)}}>
                            <img src={slider4} alt="" />
                            <span>04</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;
