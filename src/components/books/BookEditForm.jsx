import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { updateBook, getAllRatings, getAllStatuses, getBookById } from "../../services/bookService.jsx"


export const BookEditForm = ({ currentUser }) => {
    const [currentBook, setCurrentBook] = useState({
        title: "",
        author: "",
        statusId: "",
        ratingId: ""})
    const [statusState, setStatusState] = useState([])
    const [ratingState, setRatingState] = useState([])

    const navigate = useNavigate()

    const {bookId} = useParams()

    useEffect(() => {
        getAllStatuses().then((statuses)=>{setStatusState(statuses)})
    }, [])

    useEffect(() => {
        getAllRatings().then((ratings) => {setRatingState(ratings)})
    }, [])

    useEffect (() => {
        getBookById(bookId).then((book) => {
            setCurrentBook({
                title: book.title || "",
                author: book.author || "",
                statusId: book.statusId || "",
                ratingId: book.ratingId || ""
            })
        })
    }, [bookId])

    const handleSave = (event) => {
        event.preventDefault()

        if (currentBook.title && currentBook.author && currentBook.statusId && currentBook.ratingId) {
            const editedBook = {
                id: bookId,
                title: currentBook.title,
                author: currentBook.author,
                userId: currentUser,
                statusId: currentBook.statusId,
                ratingId: currentBook.ratingId
            }

            updateBook(editedBook).then(() => {
                navigate("/books")
            })
        } else {
            window.alert("Please fill out all sections")
        }
    }

    const handleInputChange = (event) => {
        const stateCopy = { ...currentBook }
        stateCopy[event.target.name] = event.target.value
        setCurrentBook(stateCopy)
    }

    
    
    return (
        <form>
            <h2>Edit Book</h2>     
            <fieldset>
                <div className="form-group">
                    <label>Title : 
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            value={currentBook.title}
                            onChange={handleInputChange}
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
                            name="author"
                            value={currentBook.author}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Status : 
                        <select
                            className="form-control"
                            name="status"
                            value={currentBook.statusId}
                            onChange={(event) => {
                                const copy = {...currentBook}
                                copy.statusId = event.target.value
                                setCurrentBook(copy)
                            }}
                        >
                            {/* <option>{currentBook.status}</option> */}
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
                            name="rating"
                            value={currentBook.ratingId}
                            onChange={(event) => {
                                const copy = {...currentBook}
                                copy.ratingId = event.target.value
                                setCurrentBook(copy)
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
                        onClick={(b) => {handleSave(b)}}
                    >
                        Save Changes
                    </button>
                </div>
            </fieldset>                     
        </form>
    )
}