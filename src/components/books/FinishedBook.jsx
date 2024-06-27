import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteBook, getCurBooks } from '../../services/bookService.jsx'
import './Book.css'; // Import your CSS file for styling

export const FinishedBook = ({ currentUser }) => {
  const [books, setBooks] = useState([])
  const [filteredBooks, setFilteredBooks] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const navigate = useNavigate();

  const fetchFinishedBooks = () => {
    getCurBooks().then((booksArray) => {
      let filteredBooks = booksArray.filter((b) => b?.user?.id === currentUser && b?.status?.id === 3)
      setBooks(filteredBooks);
    });
  };

  useEffect(() => {
    // Filter books whenever searchTerm or books array changes
    const filtered = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered);
}, [books, searchTerm])

  useEffect(() => {
    getCurBooks().then((booksArray) => {
      setBooks(booksArray)
    })
    }, [])

    useEffect(() => {
        let fbooks = books?.filter((currentBook) => currentBook.user.id === currentUser && currentBook?.status?.id === 3)
        setFilteredBooks(fbooks)
    }, [books])


  const handleDelete = (bookId) => {
    deleteBook(bookId).then(() => {
      fetchFinishedBooks()
    })
  }

  return (
    <div className="book-list-container">
      <h2>Finished Books</h2>
      <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search by title or author"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
      <div className="scrollable-list">
        {filteredBooks.map((b) => (
          <div key={b.id} className="book-item">
            <h3>{b?.title}</h3>
            <h3>By: {b?.author}</h3>
            <h3>Status: {b?.status?.status}</h3>
            <h3>Rating: {b?.rating?.rating}</h3>
            <div className="btn-container">
              <button
                className="btn filter-btn btn-primary"
                onClick={() => {
                  navigate(`/books/edit/${b.id}`);
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
      onClick={() => navigate("/books/create")}>Add Book</button>
    </div>
  );
};