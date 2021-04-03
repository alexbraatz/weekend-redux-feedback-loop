import {  Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from "react-redux";

function Comments(){

    const dispatch = useDispatch();

    let [ comments, setComments ] = useState( '' );

    const addComments= () => {
        dispatch({ type: 'addcomments', payload: comments })
    }

    return(
        <>
            <h2>Any comments you want to leave?</h2>

            <label>Comments</label><br />
            <input type='text' onChange={ ( event ) => setComments( event.target.value ) }></input>
            <Link to='/review'>
            <button onClick={ addComments() }>Next</button>
            </Link>
        </>
    )
}

export default Comments;