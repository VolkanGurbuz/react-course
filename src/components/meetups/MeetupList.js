import classes from "./MetupList.module.css";
import MeetUpItem from "./MeetUpItem";

function MeetupList(props) {
    return (
        <ul className={classes.list}>
            {props.meetsup.map((meetup) => (
                <MeetUpItem
                    key={meetup.id}
                    id={meetup.id}
                    image={meetup.image}
                    title={meetup.title}
                    address={meetup.address}
                    description={meetup.description}
                />
            ))}
        </ul>
    );
}


export default MeetupList;
