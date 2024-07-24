import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteBook, getCurBooks } from '../../services/bookService.jsx' // Functions for fetching and deleting books
import './Book.css'; // Import your CSS file for styling

// Define CurBook component as a functional component receiving currentUser as props
export const CurBook = ({ currentUser }) => {
  // State variables to manage component's dynamic data
  const [books, setBooks] = useState([]) // Stores all currently being read books fetched from the server
  const [filteredBooks, setFilteredBooks] = useState([]) // Stores books filtered based on search and user
  const [searchTerm, setSearchTerm] = useState('') // Holds the current search term input by the user

  const navigate = useNavigate(); // Hook for navigation within the application

  // Function to fetch currently being read books for the current user
  const fetchCurBooks = () => {
    // Filter books to get only those being read by the currentUser with status id 2. Currently Reading
    getCurBooks().then((booksArray) => {
      let filteredBooks = booksArray.filter((b) => b?.user?.id === currentUser && b?.status?.id === 2)
      setBooks(filteredBooks); // Update state with filtered books
    });
  };

  // Effect to filter books based on 'searchTerm' whenever 'books' or 'searchTerm' changes
  useEffect(() => {
    // Filter books whenever searchTerm or books array changes
    const filtered = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) || //These two lines will search in the author OR (||) the title.
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
        let fbooks = books?.filter((currentBook) => currentBook.user.id === currentUser && currentBook?.status?.id === 2)
        setFilteredBooks(fbooks)
    }, [books])

  

  const handleDelete = (bookId) => {
    deleteBook(bookId).then(() => {
      fetchCurBooks()
    })
  }

  return (
    <div className="book-list-container">
      <h2>Currently Being Read</h2>
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