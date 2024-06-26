import { Outlet, Route, Routes } from 'react-router-dom'
import { Welcome } from '../components/welcome/Welcome.jsx'
import { NavBar } from '../components/nav/NavBar.jsx'
import { useNavigate } from 'react-router-dom'
import { BookList } from '../components/books/BookList.jsx'
import { BookForm } from '../components/books/BookForm.jsx'
import { BookEditForm } from '../components/books/BookEditForm.jsx'
import { CurBook } from '../components/books/CurBook.jsx'
import { FinishedBook } from '../components/books/FinishedBook.jsx'
import { NotStartedBook } from '../components/books/NotStartedBook.jsx'


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
        <Route path="books">
          <Route
            index
            element={<BookList currentUser={currentUser} />}
          />
          <Route
            path=":create"
            element={<BookForm currentUser={currentUser} />}
          />
          <Route
            path="edit/:bookId"
            element={<BookEditForm currentUser={currentUser} />}
          />
          
        </Route>
        <Route path="/reading">
          <Route
            index
            element={<CurBook currentUser={currentUser} />}
          />
        </Route>
        <Route path="/finished">
          <Route
            index
            element={<FinishedBook currentUser={currentUser} />}
          />
        </Route>
        <Route path="/not-started">
          <Route
            index
            element={<NotStartedBook currentUser={currentUser} />}
          />
        </Route>
      </Route>
    </Routes>
  )
}
