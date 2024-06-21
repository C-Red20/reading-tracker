import { Outlet, Route, Routes } from 'react-router-dom'
import { Welcome } from '../components/welcome/Welcome.jsx'
import { NavBar } from '../components/nav/NavBar.jsx'
import { useNavigate } from 'react-router-dom'
import { BookList } from '../components/books/BookList.jsx'
import { BookForm } from '../components/books/BookForm.jsx'


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
          path="books/create"
          element={<BookForm currentUser={currentUser} />}
        />
        
      </Route>
    </Routes>
  )
}
