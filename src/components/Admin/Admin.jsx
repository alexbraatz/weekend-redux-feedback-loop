import { useSelector } from 'react-redux';

function Admin(){
    let userFeedback = useSelector( ( store )=>{
        return store.feedback
    })

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
                    {userFeedback.map( ( feedback, i ) =>{
                        return (
                            <tr key={  feedback[i].id  }>
                                <td>{ feedback[i].feeling }</td>
                                <td>{ feedback[i].understanding }</td>
                                <td>{ feedback[i].support }</td>
                                <td>{ feedback[i].commments }</td>
                                <td><button>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Admin;
