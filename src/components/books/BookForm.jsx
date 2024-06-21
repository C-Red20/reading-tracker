import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { createBook, getAllRatings, getAllStatuses } from "../../services/bookService.jsx"


export const BookForm = ({ currentUser }) => {
    const [newBook, setNewBook] = useState({title: "", author: "", status: "", rating: ""})
    const [statusState, setStatusState] = useState([])
    const [ratingState, setRatingState] = useState([])

    useEffect(() => {
        getAllStatuses().then((statuses)=>{setStatusState(statuses)})
    })

    useEffect(() => {
        getAllRatings().then((ratings) => {setRatingState(ratings)})
    })

    const navigate = useNavigate()

    const handleSave = (event) => {
        event.preventDefault()

        if (newBook.title && newBook.author && newBook.status && newBook.rating) {
            const theBook = {
                userId: currentUser,
                title: newBook.title,
                author: newBook.author,
                status: newBook.status,
                rating: newBook.rating
            }

            createBook(theBook).then(() => {
                navigate("/books")
            })
        } else {
            window.alert("Please fill out all sections")
        }
    }

    return (
        <form>
            <h2>New Book</h2>
            <fieldset>
                <div className="form-group">
                    <label>Title :
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title of book"
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
                    <label>Author :
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Author of book"
                            onChange={(event) => {
                                const bookCopy = {...newBook }
                                eventCopy.book.title = event.target.value
                                setEvent(bookCopy)
                            }}
                        />
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Status :
                        <select
                            className="form-control"
                            placeholder="status of book"
                            onChange={(event) => {
                                const bookCopy = {...newBook }
                                eventCopy.location = event.target.value
                                setEvent(eventCopy)
                            }}
                        >
                            {}
                        </select>
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Rating :
                        <select
                            className="form-control"
                            placeholder="rating of book"
                            onChange={(event) => {
                                const bookCopy = {...newBook }
                                eventCopy.book.title = event.target.value
                                setEvent(bookCopy)
                            }}
                        />
                    </label>
                </div>
            </fieldset> 
            <fieldset>
                <div className="form-group">
                    <button className="form-btn btn-info"
                        onClick={()=>{handleSave(theBook)}}
                    >
                        Add Book
                    </button>
                </div>
            </fieldset>                     
        </form>
    )
}