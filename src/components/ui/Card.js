import classes from "./Card.module.css";

function Card(props) {

    //children will store meetup component
    return <div className={classes.card}>{props.children}</div>
}

export default Card;
