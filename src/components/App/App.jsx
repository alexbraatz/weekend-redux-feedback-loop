// import frameworks and middleware
import React from 'react';
import axios from 'axios';
import { HashRouter, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//import styling
import './App.css';

// import components 
import Admin from '../Admin/Admin';
import Feeling from '../Feeling/Feeling';
import Understand from '../Understand/Understand';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';


function App() {

  const dispatch = useDispatch();

  useEffect( ()=>{
    getFeedback()
  }, [])

  const getFeedback = () =>{
    axios.get( '/feedback').then( ( response )=>{
      // this dispatch is needed to update redux store globally
      dispatch( { type: 'setFeedback', payload: response.data })
    }).catch( ( error )=>{
      console.log( error );
      alert( 'getFeedback function in app.jsx error!')
    })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <HashRouter>

        <Route exact path='/' component={ Feeling } />

        <Route exact path='/admin' component={ Admin } />

        <Route exact path='/understand' component={ Understand } />

        <Route exact path='/supported' component={ Supported } />

        <Route exact path='/comments' component={ Comments } />

      </HashRouter>
      
    </div>
  );
}

export default App;
