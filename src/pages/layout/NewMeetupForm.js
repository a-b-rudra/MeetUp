import Card from './Card'
import classes from './NewMeetupForm.module.css'
import { useRef } from 'react'

function NewMeetupForm(props) {
    const titleInput = useRef()
    const imageInput = useRef()
    const addressInput = useRef()
    const descriptionInput = useRef()
    function submitHandler(event) {
        event.preventDefault()
        const enteredTitle = titleInput.current.value
        const enteredImage = imageInput.current.value
        const enteredAddress= addressInput.current.value
        const enteredDescription = descriptionInput.current.value
        const meetup = {
            title:enteredTitle,
            image:enteredImage,
            address:enteredAddress,
            description:enteredDescription
        }
        
        props.addMeetupData(meetup)
    }
    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control} >
                <label htmlFor='title'>Meetup Title</label>
                <input type='text' required id='title' ref={titleInput} />
                </div>
                <div className={classes.control}>
                <label htmlFor='image'>Meetup Image</label>
                <input type='url' required id='image' ref={imageInput}/>
                </div>
                <div className={classes.control}>
                <label htmlFor='address'>Address</label>
                <input type='text' required id='address' ref={addressInput}/>
                </div>
                <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea required id='description' rows='5' ref={descriptionInput}/>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm