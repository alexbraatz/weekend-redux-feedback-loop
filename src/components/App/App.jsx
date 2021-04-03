// import frameworks and middleware
import React from 'react';
import axios from 'axios';
import { HashRouter, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//import styling
import './App.css';

// import components 
import Feeling from '../Feeling/Feeling';
import Admin from '../Admin/Admin';

function App() {

  const [ feedback, setFeedback ] = useState( [] );

  useEffect( ()=>{
    getFeedback()
  }, [])

  const getFeedback = () =>{
    axios.get( '/feedback').then( ( response )=>{
      console.log( 'back from GET in getFeedback', response.data );
      setFeedback( response.data );
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

      </HashRouter>
      
    </div>
  );
}

export default App;
