import { useHistory } from 'react-router-dom';

function Understand(){

    const history = useHistory();

    const goToComments = () => {
        history.push( '/comments' );
    }
    return (
        <>
            <h2>How well are you being supported?</h2>

            <label>Support?</label><br />
            <input type='number'></input>
            <button onClick={ (event) => goToComments() }>Next</button>
        </>

    )
}

export default Understand;