// import { useNavigate } from "react-router-dom"
// // import { deleteArticle } from "../../services/articleService.jsx"
// import { getCurBooks } from "../../services/bookService.jsx"

// export const Book = ({ book, getAndSetArticles}) => {

//     // const navigate = useNavigate()

//     // const handleDelete = () => {
//     //     deleteArticle(article.id).then(() => {
//     //         getAndSetArticles()
//     //     })
//     // }

//     return (
//         <section className="book" >
//             <header className="book-info">
//                 {book.title}
//             </header>
//             <div>
//                 {book.author}
//             </div>
//             <div>
//                 {book.statusId}
//             </div>
//             <div className="btn-container">
//                  {/* <button
//                     className="filter-btn btn-primary"
//                     onClick={() => {
//                         navigate(`/articles/edit/${article.id}`)
//                     }}
//                   >
//                     Edit
//                 </button>                
//                 <button className="btn btn-secondary" onClick={handleDelete}>
//                     Delete
//                 </button> */}
//             </div>
//         </section>
//     )
// }