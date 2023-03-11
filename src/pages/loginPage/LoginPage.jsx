import React, { useEffect, useRef, useState } from 'react';
import './LoginPage.scss'
import ell1 from '../../img/Ellipse 1.png'
import ell2 from '../../img/Ellipse 2.png'
import img1 from '../../img/login_img_1.png'
import img2 from '../../img/login_img_2.png'
import { useNavigate } from 'react-router-dom';
import { CheckEmail, CheckPass } from '../../utlis/utils';

const Loginpage = () => {

    
    const emailRef = useRef()
    const passRef = useRef()
    const navigate = useNavigate()

    const [validEmail, SetValidEmail] = useState(true)
    const [validPass, SetValidPass] = useState(true)

    const checkEmail = () => {
        if(CheckEmail(emailRef.current.value)){
            SetValidEmail(true)
        }else{
            SetValidEmail(false)
        }
    }

    const checkPass = () => {
        if(CheckPass(passRef.current.value)){
            SetValidPass(true)
        }else{
            SetValidPass(false)
        }
    }


    const handleClick = () => {
        console.log("handleClick");
        if (emailRef.current.value != '') {
            if (emailRef.current.value != '') {
                
            }else{
                SetValidPass(false)
            }
        }else{
            SetValidEmail(false)
        }

        if (validEmail && validPass) {
            console.log("valid email");
            localStorage.setItem('token', 'salom')
            navigate(`/`)
        }
        
    }

    
    return (
        <div className='login'>
            <div className='desighn'>
                <img className='desighn__left' src={ell1} alt="" />
                <img className='desighn__right' src={ell2} alt="" />
            </div>
            <div className='login__text'>
                <p className='login__text__subtitle'>Free UI Kit</p>
                <h2 className='login__text__title'>Film & TV</h2>
                <div className='login__text__form'>
                    <input ref={emailRef} placeholder='Email' type="text" onBlur={() => {checkEmail()}}/>
                    <span className={!validEmail ? 'invalidMessage' : 'invalidMessage-invisible'}>Invalid Email</span>
                    {/* {
                        !validEmail ? <span className='invalidMessage'>Invalid Email</span> : ''
                    } */}
                    <input ref={passRef} placeholder='Password' type="password" onBlur={() => {checkPass()}} />
                    <span className={!validPass ? 'invalidMessage' : 'invalidMessage-invisible'}>Invalid Email</span>
                    {/* {
                        !validPass ? <span className='invalidMessage'>Invalid Password</span> : ''
                    } */}
                    <button className={'submitBtn'} onClick={() => handleClick()}>Login</button>
                </div>
            </div>
            <div className='login__img'>
                <img className='login__img__1' src={img1} alt="" />
                <img className='login__img__2' src={img2} alt="" />
            </div>
        </div>
    );
}

export default Loginpage;
