import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedback = ( state=[], action )=>{
    if( action.type === 'setFeedback'){
        state = [ ...state, action.payload ]
    }
    return state;
}

let userFeedback = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: ""
}

const userGiveFeedback = ( state=userFeedback, action )=>{
    console.log( 'in userGiveFeedback state:', state );
    if( action.type === 'addfeelings' ){
        console.log( 'in userGiveFeedback action:', action.payload );
        userFeedback.feeling = action.payload
    }
    return state;
}

const store = createStore(
    combineReducers({
        feedback: feedback,
        userGiveFeedback: userGiveFeedback
    }),
    applyMiddleware( logger )
)

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
