import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Admin(){
    let userFeedback = useSelector( ( store )=>{
        console.log( 'in useSelector, grabbing store:', store )
        return store.feedback
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
                    {userFeedback.map( feedback => { feedback.map( user=>{     
                        console.log( 'in user:', user )                
                        return (
                            <>
                            <h2>{ JSON.stringify( {user} )}</h2>
                                <tr key={  user.id  }>
                                    <td>{ user.feeling }</td>
                                    <td>{ user.understanding }</td>
                                    <td>{ user.support }</td>
                                    <td>{ user.commments }</td>
                                    <td><button>Delete</button></td>
                                </tr>
                            </>
                        )
                    })})}
                </tbody>
            </table>
        </>
    )
}

export default Admin;
