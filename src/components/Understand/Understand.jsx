import {  Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from "react-redux";

function Understand(){

    const dispatch = useDispatch();

    let [ understand, setUnderstand ] = useState( '' );

    const addUnderstanding = () => {
        dispatch({ type: 'addunderstanding', payload: understand })
    }

    return(
        <>
            <h2>How well are you understading the content?</h2>

            <label>Understanding?</label><br />
            <input type='number' onChange={ ( event ) => setUnderstand( event.target.value ) }></input>
            <Link to={ understand ? '/supported' : '/understand'}>
                <button onClick={ addUnderstanding() }>Next</button>
            </Link>
        </>

    )
}

export default Understand;