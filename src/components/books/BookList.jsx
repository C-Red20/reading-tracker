import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteBook, getCurBooks, getUserBooks } from '../../services/bookService.jsx'
import './Book.css'; // Import your CSS file for styling

// Define BookList component as a functional component receiving currentUser as props
export const BookList = ({ currentUser }) => {
  // State variables to manage component's dynamic data
    const [books, setBooks] = useState([]) // Stores all books fetched from the server
    const [filteredBooks, setFilteredBooks] = useState([]) // Stores books filtered based on search and user
    const [searchTerm, setSearchTerm] = useState('') // Holds the current search term input by the user

    const navigate = useNavigate() // Hook for navigation within the application

    // Function to fetch books for the current user
    const getBooks = () => {
      getCurBooks().then((booksArray) => {
        // Filter books to get only those belonging to the currentUser
        let userBooks = booksArray.filter((b) => b?.userId === currentUser);
        setBooks(userBooks) // Update state with filtered books
      })
    }

    // Effect to fetch all books on initial component load
    useEffect(() => {
      getBooks()
    }, [currentUser]) // Empty dependency array ensures this effect runs only once on component mount

  // Effect to filter books based on 'searchTerm'
  useEffect(() => {
    // Filter books whenever searchTerm or books array changes
    const filtered = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) || //These two lines will search in the author OR (||) the title.
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBooks(filtered); // Update filtered books based on search term
}, [books, searchTerm]) // Dependency array ensures this effect runs whenever 'books' or 'searchTerm' changes

  // Function to handle book deletion
  const handleDelete = (bookId) => {

    deleteBook(bookId).then(() => {
      // After successful deletion, fetch updated list of books
      getUserBooks().then((booksArray) => {
        setBooks(booksArray) // Update state with updated list of books
      })
    })
  }

// JSX rendering of the BookList component
return (
    <div className="book-list-container">
      {/* Title */}
      <h2>My Book List</h2> 
      {/* Search bar */}
      <div className="search-bar">
                {/* Input for the search bar. Where you can type and that connects to the above useEffect */}
                <input
                    type="text"
                    placeholder="Search by title or author"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on input change
                />
            </div>
      {/* Scrollable list of filtered books */}
      <div className="scrollable-list">
        {/* Map through filteredBooks and render each book item */}
        {filteredBooks?.map((b) => (
          <div key={b.id} className="book-item">
            <h3>{b?.title}</h3>
            <h3>By: {b?.author}</h3>
            <h3>Status: {b?.status?.status}</h3>
            <h3>Rating: {b?.rating?.rating}</h3>
            {/* Button container for edit and delete actions */}
              <div className="btn-container">
                  {/* Edit button */}
                  <button
                      className="btn filter-btn btn-primary"
                      onClick={() => {
                          navigate(`/books/edit/${b.id}`) // Navigate to edit page for the book
                      }}
                  >
                    Edit
                  </button>
                  {/* Delete button */}                
                  <button className="btn btn-secondary" onClick={() => handleDelete(b.id)}>
                    Delete
                  </button>
              </div>
          </div>
        ))}
      </div>
      {/* Add Book button */}
      <button 
      className="btn add-btn"
      onClick={() => {
        navigate("/books/create") // Navigate to create new book page
      }}>Add Book</button>
    </div>
  )
}
