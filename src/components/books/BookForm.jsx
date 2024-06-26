import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { createBook, getAllRatings, getAllStatuses } from "../../services/bookService.jsx"


export const BookForm = ({ currentUser }) => {
    const [newBook, setNewBook] = useState({})
    const [statusState, setStatusState] = useState([])
    const [ratingState, setRatingState] = useState([])

    useEffect(() => {
        getAllStatuses().then((statuses)=>{setStatusState(statuses)})
    }, [])

    useEffect(() => {
        getAllRatings().then((ratings) => {setRatingState(ratings)})
    }, [])

    const navigate = useNavigate()

    const handleSave = (event) => {
        event.preventDefault()

        if (newBook.title && newBook.author && newBook.status && newBook.rating) {
            const theBook = {
                title: newBook.title,
                author: newBook.author,
                userId: currentUser,
                statusId: newBook.status,
                ratingId: newBook.rating
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
            <h4>*Please fill out everything</h4>
            <fieldset>
                <div className="form-group">
                    <label>Title : 
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title of book"
                            onChange={(event) => {
                                const bookCopy = {...newBook }
                                bookCopy.title = event.target.value
                                setNewBook(bookCopy)
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
                                bookCopy.author = event.target.value
                                setNewBook(bookCopy)
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
                                bookCopy.status = event.target.value
                                setNewBook(bookCopy)
                            }}
                        >
                            {statusState.map((statusObj) => {
                                return <option key={statusObj.id} value={statusObj.id}>{statusObj.status}</option> })}
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
                                bookCopy.rating = event.target.value
                                setNewBook(bookCopy)
                            }}
                        >
                            {ratingState.map((ratingObj) => {
                                return <option key={ratingObj.id} value={ratingObj.id}>{ratingObj.rating}</option> })}
                        </select>
                    </label>
                </div>
            </fieldset> 
            <fieldset>
                <div className="form-group">
                    <button className="form-btn btn-info"
                        onClick={handleSave}
                    >
                        Add Book
                    </button>
                </div>
            </fieldset>                     
        </form>
    )
}