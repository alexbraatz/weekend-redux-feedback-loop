import { useHistory, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";

function Understand(){

    const dispatch = useDispatch();

    let [ understand, setUnderstand ] = useState( '' );

    const history = useHistory();

    const addUnderstanding = () => {
        dispatch({ type: 'addunderstanding', payload: understand })
    }

    return(
        <>
            <h2>How well are you understading the content?</h2>

            <label>Understanding?</label><br />
            <input type='number' onChange={ ( event ) => setUnderstand( event.target.value ) }></input>
            <Link to='/supported'>
                <button onClick={ (event) => addUnderstanding() }>Next</button>
            </Link>
        </>

    )
}

export default Understand;