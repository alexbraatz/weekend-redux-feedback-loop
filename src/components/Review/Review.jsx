import { useSelector } from 'react-redux';
import { useState } from 'react';
import {  Link } from 'react-router-dom';
import axios from 'axios';

function Review(){

    const getUserFeedback = useSelector( ( store )=>{
        return store.userGiveFeedback
    })

    const submitFeedback = () => {
        console.log( 'in submitFeedback', getUserFeedback );
        axios.post( '/feedback', getUserFeedback ).then( ( response )=>{
            console.log( 'back from POST with', response );
        }).catch( ( error )=>{
            console.log( error );
            alert( 'oi! issue with submitFeedback POST route');
        })
    }
    return (
        <>
            <h2>Review Your Feedback</h2>
            <div>
                <p>Feelings: { getUserFeedback.feeling }</p>
                <p>Understanding: { getUserFeedback.understanding }</p>
                <p>Support: { getUserFeedback.support }</p>
                <p>Comments: { getUserFeedback.comments }</p>
            </div>
            <Link to='/thankyou'>
                <button onClick={ (event) => submitFeedback() }>Submit</button>
            </Link>
        </>

    )
}

export default Review;