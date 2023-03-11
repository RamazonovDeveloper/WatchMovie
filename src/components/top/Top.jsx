import React, { useEffect, useState } from 'react';
import './Top.scss'
import Singlemovie from '../singleMovieItem/SingleMovie';

import top1 from '../../img/top1.jpg'

const Top = () => {

    const [top, setTop] = useState([])

    const salomRamazonov = () => {
        console.log("Hello Ramazonov!!!");
    }

    useEffect(async() => {
        const topProm = await fetch('https://omdbapi.com/?i=tt3896198&apikey=4b545227&s=iron')
        
        const promJson = await topProm.json()
        console.log(promJson)

        console.log('res bu  ',promJson)

        setTop(promJson.Search)


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

            </div>
        </div>
    );
}

export default Top;
