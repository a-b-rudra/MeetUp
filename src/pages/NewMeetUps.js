import NewMeetupForm from './layout/NewMeetupForm'
import { useHistory } from 'react-router-dom'

function NewMeetUps() {
    const history = useHistory()
    function submitHandler(MeetupData)
    {
        fetch('https://project-r-bdf6f-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST' ,
            body: JSON.stringify(MeetupData) ,
            headers:
            {
                'Content-Type' : 'application/json'
            }
        }).then(() => history.replace('/'))
    }
    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm addMeetupData={submitHandler}/>
        </section>
    )
}

export default NewMeetUps