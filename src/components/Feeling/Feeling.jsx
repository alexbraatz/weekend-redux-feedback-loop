import { useHistory, Link } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from "react-redux";

function Feeling(){

    const dispatch = useDispatch();

    // useEffect(()=>{
    //     // addFeelings()
    // }, [])

    let [ feelings, setFeelings ] = useState( '' );

    const history = useHistory();

    const addFeelingsTwo = useCallback(
        () => dispatch( {type: 'addfeelings', payload: userFeelings.feelings } ), [dispatch]
    )

    const addFeelings = () => {

        const userFeelings= {
            feelings: feelings 
        }
        console.log( 'in addFeelings', userFeelings )
        dispatch({ type: 'addfeelings', payload: userFeelings.feelings })
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