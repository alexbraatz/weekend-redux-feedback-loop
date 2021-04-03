import { useSelector } from 'react-redux';

function Admin(){
    // let userFeedback = useSelector( ( store )=>{
    //     return store.feedback;
    // })
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
            </table>
        </>
    )
}

export default Admin;
