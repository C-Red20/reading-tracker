import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteBook, getUserBooks } from '../../services/bookService.jsx'
import './Book.css'; // Import your CSS file for styling


export const BookList = ({ currentUser }) => {
    const [books, setBooks] = useState([])
    const [filteredBooks, setFilteredBooks] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const navigate = useNavigate()

    const getBooks = () => {
      getUserBooks().then((booksArray) => {
        let userBooks = booksArray.filter(b => b?.user?.id === currentUser);
        setBooks(userBooks)
      })
    }

    useEffect(() => {
        getUserBooks().then((booksArray) => {
          setBooks(booksArray)
        })
    }, [])

    useEffect(() => {
      let fbooks = books?.filter((currentBook) => currentBook.user.id === currentUser)
        setFilteredBooks(fbooks)
  }, [books])

  useEffect(() => {
    // Filter books whenever searchTerm or books array changes
    const filtered = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);
}, [books, searchTerm])

  const handleDelete = (bookId) => {

    deleteBook(bookId).then(() => {
      getUserBooks().then((booksArray) => {
        setBooks(booksArray)
      })
    })
  }


return (
    <div className="book-list-container">
      <h2>My Book List</h2>
      <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search by title or author"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
      <div className="scrollable-list">
        {filteredBooks?.map((b) => (
          <div key={b.id} className="book-item">
            <h3>{b?.title}</h3>
            <h3>By: {b?.author}</h3>
            <h3>Status: {b?.status?.status}</h3>
            <h3>Rating: {b?.rating?.rating}</h3>
              <div className="btn-container">
                  <button
                      className="btn filter-btn btn-primary"
                      onClick={() => {
                          navigate(`/books/edit/${b.id}`)
                      }}
                  >
                    Edit
                  </button>                
                  <button className="btn btn-secondary" onClick={() => handleDelete(b.id)}>
                    Delete
                  </button>
              </div>
          </div>
        ))}
      </div>
      <button 
      className="btn add-btn"
      onClick={() => {
        navigate("/books/create")
      }}>Add Book</button>
    </div>
  )
}
