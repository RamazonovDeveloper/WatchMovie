import React from 'react';
import './SingleMovie.scss'
import img from '../../img/login_img_1.png'
import duration from '../../img/duration.png'
import rating from '../../img/ratings.png'
import { useNavigate } from 'react-router-dom';

const Singlemovie = ({props,needBig}) => {

    const navigate = useNavigate()



    return (
        <div onClick={() => {navigate('/movie')}}>
            <div className={`top__cards__item ${needBig?'top__cards__item--big':''}` }>
                        
                        <span className='genre'>Fantasy</span>
                        <img src={props.Poster}/>
                        <div className='texts'>
                            <div>
                                <span className='duration'>
                                    <img src={duration} alt="" />
                                    1hr 24mins
                                </span>
                                <span className='rating'>
                                    <img src={rating} alt="" />
                                    21.3K views
                                </span>
                            </div>
                            <h4 className='title'>{props.Title}</h4>
                        </div>

                    
                </div>
        </div>
    );
}

export default Singlemovie;
