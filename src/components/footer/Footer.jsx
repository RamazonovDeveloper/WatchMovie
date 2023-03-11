import React from 'react';
import vector from '../../img/Vector.png'
import './Footer.scss'


const Footer = () => {
    return (
        <div className='foot'>
            <div className='foot__left'>
                <h3 className='foot__left__title'>Watchflix</h3>
                <p className='foot__left__text'>Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                <span className='foot__left__name'>Join Newsletters</span>
                <div className='foot__left__input'>
                    <input placeholder='Insert your mail here' type="text" />
                    <button><img src={vector} alt="" /></button>
                </div>
            </div>
            <div className='foot__right'>
                <div className='foot__right__lists'>
                    <ul>
                        <li>Product</li>
                        <li>Movies</li>
                        <li>TV show</li>
                        <li>Videos</li>
                    </ul>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
