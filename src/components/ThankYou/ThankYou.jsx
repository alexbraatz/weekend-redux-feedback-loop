import { useHistory } from 'react-router-dom';

function ThankYou(){

    const history = useHistory();

    const goToHome = () => {
        history.push( '/' );
    }

    return(
        <>
            <h2>Thank you!</h2>

            <button onClick={ (event) => goToHome() }>Leave New Feedback</button>
        </>
    )
}

export default ThankYou;