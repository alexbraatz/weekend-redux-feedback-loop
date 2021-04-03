import { useHistory, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";

function Feeling(){

    const dispatch = useDispatch();

    let [ feelings, setFeelings ] = useState( '' );

    const history = useHistory();

    const addFeelings = () => {

        dispatch({ type: 'addfeelings', payload: feelings })
    }


    return(
        <>
            <h2>How are you feeling today?</h2>

            <label>Feeling?</label><br />
            <input type='number' onChange={ ( event ) => setFeelings( event.target.value ) }></input>
            <Link to='/understand'>
                <button onClick={ addFeelings() }>Next</button>
            </Link>
        </>
    )
};

export default Feeling;