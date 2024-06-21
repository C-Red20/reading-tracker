//author: Caila Linger this will add new events
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createBook } from "../../services/eventService.jsx"

export const BookForm = ({ currentUser }) => {
    const [newBook, setNewBook] = useState({title: "", author: "", status: "", rating: ""})

    const navigate = useNavigate()

    const handleSave = (event) => {
        event.preventDefault()

        if (newBook?.book.title && newBook?.book.author && newBook?.status.status && newBook?.rating.rating) {
            const theBook = {
                userId: currentUser,
                title: newBook?.book.title,
                author: newBook?.book.author,
                status: newBook?.status.status,
                rating: newBook?.rating.rating
            }

            createEvent(theBook).then(() => {
                navigate("/books")
            })
        } else {
            window.alert("Please fill out all sections")
        }
    }

    return (
        <form>
            <h2>New Books</h2>
            <fieldset>
                <div className="form-group">
                    <label>Book
                        <input
                            type="text"
                            className="form-control"
                            placeholder="book"
                            onChange={(event) => {
                                const bookCopy = {...newBook }
                                eventCopy.event = event.target.value
                                setEvent(bookCopy)
                            }}
                        />
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Title
                        <input
                            type="text"
                            className="form-control"
                            placeholder="title of book"
                            onChange={(event) => {
                                const bookCopy = {...newBook }
                                eventCopy?.book.title = event.target.value
                                setEvent(bookCopy)
                            }}
                        />
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Location
                        <input
                            type="text"
                            className="form-control"
                            placeholder="location of event"
                            onChange={(event) => {
                                const eventCopy = {...newEvent }
                                eventCopy.location = event.target.value
                                setEvent(eventCopy)
                            }}
                        />
                    </label>
                </div>
            </fieldset> 
            <fieldset>
                <div className="form-group">
                    <button className="form-btn btn-info"
                        onClick={()=>{handleSave(event)}}
                    >
                        Create Event
                    </button>
                </div>
            </fieldset>                     
        </form>
    )
}