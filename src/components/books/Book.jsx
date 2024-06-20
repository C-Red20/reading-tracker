// import { useNavigate } from 'react-router-dom'
// import { deleteBookFromUser, updateBookStatus } from '../../services/bookService'

// export const Book = ({ book, getAndSetBooks }) => {
//   const navigate = useNavigate()

//   const handleDelete = () => {
//     deleteBookFromUser(book.id).then(() => {
//       getAndSetBooks()
//     })
//   }

//   const handleStatusChange = (statusId) => {
//     updateBookStatus(book.id, statusId).then(() => {
//       getAndSetBooks()
//     })
//   }

//   return (
//     <section className="book">
//       <header className="book-info">
//         {book.title}
//       </header>
//       <div>
//         {book.author}
//       </div>
//       <div className="btn-container">
//         <button
//           className="filter-btn btn-primary"
//           onClick={() => navigate(`/books/edit/${book.id}`)}
//         >
//           Edit
//         </button>
//         <button className="btn btn-secondary" onClick={handleDelete}>
//           Delete
//         </button>
//         {book.statusId === 1 && (
//           <button className="btn btn-primary" onClick={() => handleStatusChange(2)}>
//             Start
//           </button>
//         )}
//         {book.statusId === 2 && (
//           <button className="btn btn-primary" onClick={() => handleStatusChange(3)}>
//             Finished
//           </button>
//         )}
//       </div>
//     </section>
//   )
// }