import {  Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from "react-redux";

function Supported(){

    const dispatch = useDispatch();

    let [ support, setSupport ] = useState( '' );

    const addSupported = () => {
        dispatch({ type: 'addsupported', payload: support })
    }
    return (
        <>
            <h2>How well are you being supported?</h2>

            <label>Support?</label><br />
            <input type='number' onChange={ ( event ) => setSupport( event.target.value ) }></input>
            <Link to='/comments'>
            <button onClick={ (event) => addSupported () }>Next</button>
            </Link>
        </>

    )
}

export default Supported;