import NewMeetupForm from "../components/meetups/NewMeetupForm";
import {useHistory} from "react-router-dom";

function NewMeetupPage() {

    const history = useHistory();

    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-getting-started-39d9b-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(r => {
            history.replace('/');
        });
    }

    return <section>
        <h1>Meet up new</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>;

}

export default NewMeetupPage;
