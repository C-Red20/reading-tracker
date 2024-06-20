import { Outlet, Route, Routes } from 'react-router-dom'
import { Welcome } from '../components/welcome/Welcome'
import { NavBar } from '../components/nav/NavBar'
import { BookList } from '../components/books/BookList'
import { useNavigate } from 'react-router-dom'

export const CustomerViews = ({ currentUser }) => {
  const navigate = useNavigate()

  const handleAddBook = () => {
    navigate('/books/create')
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="/books" element={<BookList currentUser={currentUser} />} />
        <Route
          path="/books/create"
          element={<button onClick={handleAddBook}>Add New Book</button>}
        />
        <Route
          path="/books/edit/:bookId"
          element={<button onClick={() => navigate('/books/edit/:bookId')}>Edit Book</button>}
        />
        
      </Route>
    </Routes>
  )
}
