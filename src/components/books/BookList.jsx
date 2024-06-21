import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUserBooks } from '../../services/bookService.jsx'

export const BookList = ({ currentUser }) => {
    const [books, setBooks] = useState([])

    const navigate = useNavigate()

    const getBooks = () => {
      getUserBooks().then((booksArray) => {
        let userBooks = booksArray.filter(b => b?.user?.id === currentUser);
        setBooks(userBooks)
      })
    }

    useEffect(() => {
        getBooks()
    }, [])

return (
    <div className="book-list">
      {books.map((b) => (
        <div key={b.id} className="book-item">
          <h3>{b?.book?.title}</h3>
          <h3>by: {b?.book?.author}</h3>
          <h3>status: {b?.status?.status}</h3>
          <h3>rating: {b?.rating.rating}</h3>

        </div>
      ))}
      <button onClick={() => console.log(books)}>Good Game</button>
    </div>
  )
}
