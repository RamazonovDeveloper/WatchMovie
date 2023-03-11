import React, { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
import './Top.scss'
import duration from '../../img/duration.png'
import rating from '../../img/ratings.png'
import img from '../../img/login_img_1.png'
import Singlemovie from '../singleMovieItem/SingleMovie';

import top1 from '../../img/top1.jpg'

const Top = () => {

    const [top, setTop] = useState([])

    

    useEffect(async() => {
        const topProm = await fetch('https://omdbapi.com/?i=tt3896198&apikey=4b545227&s=iron')
        
        const promJson = await topProm.json()
        console.log(promJson)

        console.log('res bu  ',promJson)

        setTop(promJson.Search)


        // fetch('https://omdbapi.com/?i=tt3896198&apikey=4b545227&s=iron')
        // .then(res => res.json())
        // .then(res => {console.log('res bu  ',res)})
        // .then(res => {setTop(res)})
        // .catch(err => {console.log(err)})

    },[])
    
    console.log('top bu  ' ,top)


    return (
        <div className='top'>
            <div className='top__text'>
                <h3>Top Movies</h3>
                <a>View More</a>
            </div>
            <div className='top__cards'>
                
                {
                    top.map((item, index) => {
                        let isBig = (index === 0) ? true : false
                        if(index === 0){
                            item.Poster = top1
                            item.Title = 'Soldier'
                        }
                        if(index === 9){
                            return
                        }
                        return <Singlemovie key={index} needBig={isBig} props={item}/>                    
                    })
                }

                {/* <div className='top__cards__item'>
                        
                        <span className='genre'>Fantasy</span>
                        <img src={img}/>
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
                            <h4 className='title'>The Ring’s Lord</h4>
                        </div>

                    
                </div>
                <div className='top__cards__item'>
                        
                        <span className='genre'>Fantasy</span>
                        <img src={img}/>
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
                            <h4 className='title'>The Ring’s Lord</h4>
                        </div>

                    
                </div>

                <div className='top__cards__item'>
                        
                        <span className='genre'>Fantasy</span>
                        <img src={img}/>
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
                            <h4 className='title'>The Ring’s Lord</h4>
                        </div>

                    
                </div>

                <div className='top__cards__item'>
                        
                        <span className='genre'>Fantasy</span>
                        <img src={img}/>
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
                            <h4 className='title'>The Ring’s Lord</h4>
                        </div>

                    
                </div>
                <div className='top__cards__item'>
                        
                        <span className='genre'>Fantasy</span>
                        <img src={img}/>
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
                            <h4 className='title'>The Ring’s Lord</h4>
                        </div>

                    
                </div> */}
            </div>
        </div>
    );
}

export default Top;
