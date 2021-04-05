import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from "react-redux";

function Feeling(){

    const dispatch = useDispatch();

    let [ feelings, setFeelings ] = useState( '' );


    const addFeelings = () => {

        dispatch({ type: 'addfeelings', payload: feelings })
    }

    return(
        <>
            <h2>How are you feeling today?</h2>

            <label>Feeling?</label><br />
            <input type='number' onChange={ ( event ) => setFeelings( event.target.value ) }></input>
            <Link to={ feelings ? '/understand' : '/'}>
                <button onClick={ addFeelings() }>Next</button>
            </Link>
        </>
    )
};

export default Feeling;