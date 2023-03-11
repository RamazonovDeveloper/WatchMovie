import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../../img/searchIcon.png'
import prev from '../../img/prevpag.png'
import next from '../../img/nextpag.png'

import Singlemovie from '../singleMovieItem/SingleMovie';

import './SearchCom.scss'

const Searchcom = () => {

    const [res, setRes] = useState('iron')
    const [movie, setMovie] = useState([])
    const [page, setPage] = useState(1)
    const search = useRef()
    const navigate = useNavigate()
    let totalPages = 1

    useEffect(async() => {
        const myreponse = await fetch(`https://omdbapi.com/?i=tt3896198&apikey=4b545227&s=${res}&page=${page}`)
        const reponseJson = await myreponse.json()
        console.log(reponseJson)
        totalPages = reponseJson.totalResults%10 == 0 ? reponseJson.totalResults/10 : (reponseJson.totalResults/10+1)
        setMovie(reponseJson.Search)
        console.log(movie)
    },[res, page])

    return (
        <div className='search'>
            <div className='search__input'>
                <input className='' ref={search}  type="text" placeholder='Enter search phrase..'/>
                <button className='btn' onClick={() => {setRes(search.current.value)}}><img src={searchIcon} alt="" /></button>
            </div>
            <div className='search__box'>
                {
                    movie.map((item, index) => {
                        return <Singlemovie key={index} props={item}/>
                    })
                }
            </div>
            <div className='search__pagination'>
                <button onClick={() => {if(page != 1){setPage(page => page-1);console.log(page)}}}><img src={prev} alt="" /></button>
                <button onClick={() => {if(page != 1)setPage(1)}}>1</button>
                <button onClick={() => {if(page != 2)setPage(2)}}>2</button>
                <button onClick={() => {if(page != 3)setPage(3)}}>3</button>
                <button onClick={() => {if(page != totalPages){setPage(page => page+1);console.log(page)}}}><img src={next} alt="" /></button>
            </div>
        </div>
        
    );
}

export default Searchcom;
