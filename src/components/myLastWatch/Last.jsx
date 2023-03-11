import React, { useEffect, useState } from 'react';
import Singlemovie from '../singleMovieItem/SingleMovie';
import last1 from '../../img/last1.jpg'

const Last = () => {
    const [last, setLast] = useState([])


    useEffect(async() => {
        const topProm = await fetch('https://omdbapi.com/?i=tt3896198&apikey=4b545227&s=avengers')
        
        const promJson = await topProm.json()
        console.log(promJson)

        console.log('res bu  ',promJson)

        setLast(promJson.Search)

    },[])
    
    return (
        <div className='top'>
            <div className='top__text'>
                <h3>Last Movies</h3>
                <a>View More</a>
            </div>
            <div className='top__cards'>

                {
                    last.map((item, index) => {
                        let isBig = (index === 0) ? true : false
                        if(index === 9){
                            return
                        }
                        if(index === 0){
                            item.Poster = last1
                            item.Title = 'Life is ...'
                        }
                        return <Singlemovie key={index} needBig={isBig} props={item}/>                    
                    })
                }
            </div>
        </div>
    );
}

export default Last;
