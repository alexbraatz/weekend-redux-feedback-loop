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
    if( action.type === 'addfeelings' ){
        userFeedback.feeling = action.payload
    }
    if( action.type === 'addunderstanding'){
        userFeedback.understanding = action.payload
    }
    if( action.type === 'addsupported'){
        userFeedback.support = action.payload
    }
    if( action.type === 'addcomments' ){
        userFeedback.comments = action.payload
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
