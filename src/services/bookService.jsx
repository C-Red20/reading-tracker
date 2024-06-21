export const getUserBooks = () => {
    return fetch(`http://localhost:8088/userBooks?_expand=user&_expand=book&_expand=status&_expand=rating`).then(response => response.json())
}

export const createEvent = (book) => {
  return fetch(`http://localhost:8088/userBooks?_expand=user&_expand=book&_expand=status&_expand=rating`, { 
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(book),
  })
}

export const getCurBooks = () => {
    return fetch(`http://localhost:8088/userBooks?_expand=user&_expand=book&_expand=status`)
}

// export const getNotStartedBooks = () => {
//     return fetch(`http://localhost:8088/userBooks?_expand=user&_expand=book&_expand=status&statusId=1`)
//       .then(response => response.json())
// }

// export const getReadingBooks = () => {
//     return fetch(`http://localhost:8088/userBooks?_expand=user&_expand=book&_expand=status&statusId=2`)
//       .then(response => response.json())
// }

// export const getFinishedBooks = () => {
//     return fetch(`http://localhost:8088/userBooks?_expand=user&_expand=book&_expand=status&statusId=3`)
//       .then(response => response.json())
// }

// export const addBookToUser = (userId, bookId, statusId, ratingId) => {
//     const newUserBook = {
//       userId,
//       bookId,
//       statusId,
//       ratingId,
//     }
  
//     return fetch(`http://localhost:8088/userBooks`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newUserBook),
//     })
//       .then(response => response.json())
// }

// export const updateBookStatus = (userBookId, statusId) => {
//     return fetch(`http://localhost:8088/userBooks/${userBookId}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ statusId }),
//     })
//       .then(response => response.json())
//   }
  
//   export const deleteBookFromUser = (userBookId) => {
//     return fetch(`http://localhost:8088/userBooks/${userBookId}`, {
//       method: 'DELETE',
//     })
//   }