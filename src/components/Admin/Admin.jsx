import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Admin(){
    let userFeedback = useSelector( ( store )=>{
        console.log( 'in useSelector, grabbing store:', store )
        return store.feedback.flat()
    })

    useEffect( () =>{
        userFeedback
    }, [])

    return(
        <>
            <h2>Feedback Results!</h2>
            <table>
                <thead>
                    <tr>  
                        <th>Feeling</th>
                        <th>Comprehension</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {userFeedback.map( ( feedback, i )=>{
                        return (
                            <>
                                <tr key={ feedback.id }>
                                    <td>{ feedback.understanding }</td>
                                    <td>{ feedback.support }</td>
                                    <td>{ feedback.comments }</td>
                                    <td><button>Delete</button></td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Admin;
