import { useHistory } from 'react-router-dom';

function Comments(){

    const history = useHistory();

    const goToReview = () => {
        history.push( '/review' );
    }

    return(
        <>
            <h2>Any comments you want to leave?</h2>

            <label>Comments</label><br />
            <input type='text'></input>
            <button onClick={ (event) => goToReview() }>Next</button>
        </>
    )
}

export default Comments;