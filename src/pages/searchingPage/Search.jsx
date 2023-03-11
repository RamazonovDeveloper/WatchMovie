import React from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Searchcom from '../../components/searchingComp/SearchCom';
import Singlemovie from '../../components/singleMovieItem/SingleMovie';

const Search = () => {
    return (
        <div>
            <Navbar/>
            <Searchcom/>
            <Footer/>
        </div>
    );
}

export default Search;
