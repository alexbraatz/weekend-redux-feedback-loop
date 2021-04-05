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
                    {/* nested map used because i'm putting my database which is an array into another array in redux, pls halp */}
                    {userFeedback.map( feedback => { return feedback.map( user=>{     
                        console.log( 'in user:', user )                
                        return (
                            <>
                                <tr>
                                    <td key={  user.id  }>{ user.feeling }</td>
                                    <td>{ user.understanding }</td>
                                    <td>{ user.support }</td>
                                    <td>{ user.comments }</td>
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
