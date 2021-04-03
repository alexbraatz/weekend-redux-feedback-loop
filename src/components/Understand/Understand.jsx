import { useHistory } from 'react-router-dom';

function Understand(){

    const history = useHistory();

    const goToSupported = () => {
        history.push('/supported');
    }

    return(
        <>
            <h2>How well are you understading the content?</h2>

            <label>Understanding?</label><br />
            <input type='number'></input>
            <button onClick={ (event) => goToSupported() }>Next</button>
        </>

    )
}

export default Understand;