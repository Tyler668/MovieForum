import React from 'react';
import './App.css';
import NavBar from './Components/NavBar.js';
import MoviePage from './Components/MoviePage.js'
import Login from './Components/Login.js'
import Signup from './Components/Signup.js'

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* Always rendered */}
      <NavBar></NavBar>
      {/* <Route exact path='/' component={Dashboard}></Route> */}
      {/* 
      <Route path='/movies' component={Profile}></Route>

      <Route path='/profile' component={Movies}></Route> */}

      <Route path='/movie/:id' component={MoviePage}></Route>

      <Route path='/login' component={Login}></Route>
      <Route path='/signup' component={Signup}></Route>

    </div>
  );
}

export default App;
