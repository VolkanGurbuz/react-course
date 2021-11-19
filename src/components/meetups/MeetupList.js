import classes from "./MetupList.module.css";
import MeetUpItem from "./MeetUpItem";
import Card from "../ui/Card";

function MeetupList(props) {
    return (
        <ul className={classes.list}>
            {props.meetsup.map((meetup) => (
                <Card>
                    <MeetUpItem
                        key={meetup.id}
                        id={meetup.id}
                        image={meetup.image}
                        title={meetup.title}
                        address={meetup.address}
                        description={meetup.description}
                    />
                </Card>
            ))}
        </ul>
    );
}


export default MeetupList;
