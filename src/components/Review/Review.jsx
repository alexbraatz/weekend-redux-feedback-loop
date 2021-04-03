import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function Review(){

    

    const history = useHistory();

    const goToThankYou = () => {
        history.push( '/thankyou' );
    }
    return (
        <>
            <h2>Review Your Feedback</h2>
            <div>
                <p>Feelings:</p>
                <p>Understanding:</p>
                <p>Support:</p>
                <p>Comments:</p>
            </div>
            <button onClick={ (event) => goToThankYou() }>Submit</button>
        </>

    )
}

export default Review;