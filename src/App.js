import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Singlemovie from './components/singleMovieItem/SingleMovie';
import Video from './components/videoSection/Video';
import Loginpage from './pages/loginPage/LoginPage';
import Movie from './pages/moviesPage/Movie';
import Search from './pages/searchingPage/Search';
import Page from './pages/tempPage/Page';
import Mainprotect from './providers/mainProtect/MainProtect';
import Protected from './providers/protected/Protected';

function App() {
  return (
    <div className="App">


{/* iframe src="//www.hd-trailers.net/embed/spider-man-no-way-home/1-trailer-old-1-1080p/" width="1920px" height="1100px"></iframe> */}

      <BrowserRouter>
          
        <Routes>

          <Route path='login' element={
            // <Loginpage/>

            localStorage.getItem('token') ? <Navigate to={'/'}/>:<Loginpage/>
            
            // <Mainprotect>
            //   <Loginpage/>
            // </Mainprotect>
          } />
          <Route path='/' element={
            <Protected>
              <Page/>
            </Protected>
          }/>
          <Route path='/movie' element={
            <Protected>
              <Movie/>
            </Protected>
          }/>
          <Route path='/search' element={
            <Protected>
              <Search/>
            </Protected>
          }/>

          
          
        </Routes>
        
      </BrowserRouter>

    </div>
  );
}

export default App;
