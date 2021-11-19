import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import React, {useRef} from "react";


function NewMeetupForm() {
    const titleInputRef = React.useRef();
    const imageInputRef = React.useRef();
    const addressInputRef = React.useRef();
    const descInputRef = React.useRef();

    function submitHandler(event) {
        event.preventDefault();
        const enteredTitle = titleInputRef.current.valueOf().value;
        const enteredImage = imageInputRef.current.valueOf().value;
        const enteredAddress = addressInputRef.current.valueOf().value;
        const enteredDesc = descInputRef.current.valueOf().value;
        const meetUpData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            desc: enteredDesc
        }

        console.log(meetUpData)

    }

    return (<Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Meetup Title</label>
                <input type='text' required id='title' ref={titleInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Meetup Image</label>
                <input type='url' required id='image' ref={imageInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Address</label>
                <input type='text' required id='address' ref={addressInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea id='description' required rows='5' ref={descInputRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
        </form>
    </Card>);

}


export default NewMeetupForm;
