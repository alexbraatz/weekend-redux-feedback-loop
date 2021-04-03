import { useHistory } from 'react-router-dom';

function Feeling(){

    const history = useHistory();

    const goToUnderstand = () => {
        history.push('/understand');
    }

    return(
        <>
            <h2>How are you feeling today?</h2>

            <label>Feeling?</label><br />
            <input type='number'></input>
            <button onClick={ (event) => goToUnderstand() }>Next</button>
        </>
    )
};

export default Feeling;