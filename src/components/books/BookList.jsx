import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteBookFromUser } from '../../services/bookService'

export const BookList = ({ currentUser, books, getAndSetBooks }) => {
    const [book, getAndSetBooks] = useState([])

    const navigate = useNavigate()

    const handleEditBook = (bookId) => {
        navigate(`/books/edit/${bookId}`)
    }

    const handleDeleteBook = (userBookId) => {
            deleteBookFromUser(userBookId).then(() => {
            getAndSetBooks()
        })
    }

    useEffect(() => {
        
    }, [])

return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-item">
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <button onClick={() => handleEditBook(book.id)}>Edit</button>
          <button onClick={() => handleDeleteBook(book.userBookId)}>Delete</button>
        </div>
      ))}
    </div>
  )
}
