import { useSelector } from 'react-redux';
import { useState } from 'react';

function Review(){

    const getUserFeedback = useSelector( ( store )=>{
        return store.userGiveFeedback
    })

    const goToThankYou = () => {
        history.push( '/thankyou' );
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
            <button onClick={ (event) => goToThankYou() }>Submit</button>
        </>

    )
}

export default Review;