import React, { useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.scss'
import searchIcon from '../../img/searchIcon.png'

const Navbar = () => {


    const [click, setClick] = useState(false)
    const navigate = useNavigate()

    const search = useRef()

    const handleClick = () => {
        setClick(click => !click)
        // console.log('All fine',click)
    }

    const handleInputChange = () => {

        if(search.current.value){
            navigate('/search')
        }
        else{
            handleClick()
        }

        // console.log('Men Input change bolaman');
    }


    // console.log('salom salom')



    return (
        <div className='nav'>

            {/* salom dunyo */}
            <h3 className='nav__logo'>Watchflix</h3>
            <ul className='nav__menu'>
                <li className='nav__menu__item'>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                {/* className={(isActive) => {return !isActive ? 'link--active' : '' }} */}
                <li className='nav__menu__item'>
                    <NavLink to={'/movie'}>Movies</NavLink>
                </li>
                <li className='nav__menu__item'>
                    <NavLink to={'/search'}>TV show</NavLink>
                </li>
            </ul>

            <div className='nav__search'>
                <div className={!click ? 'nav__search__cr' : 'nav__search__cr nav__search__cr--active'}>
                    {click ? <input id='searchInput' ref={search}  type="text" placeholder='Enter search phrase..'/> : ''}
                    {/* onChange={search.current.value != '' ? handleInputChange() : ''} */}
                    {/* onChange={() => {navigate('/search')}}  */}
                    <button className={!click ? 'btn' : 'btn btn--active'} onClick={() => { (document.getElementById('searchInput') ? handleInputChange() : handleClick())}}><img src={searchIcon} alt="" /></button>
                </div>
                {/* !document.getElementById('searchInput') ? handleClick() : console.log('search does no t exist !!!') */}
                <div className='nav__search__user'>
                    <div className='nav__search__user__img'></div>
                    <div className='nav__search__user__text'>
                        John Glich
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Navbar;
