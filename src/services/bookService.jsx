export const getUserBooks = () => {
    return fetch(`http://localhost:8088/books?_expand=user&_expand=status&_expand=rating`).then(response => response.json())
}

export const createBook = (book) => {
  return fetch(`http://localhost:8088/books`, { 
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(book),
  })
}

export const getAllStatuses = () => {
    return fetch(`http://localhost:8088/statuses`).then(response => response.json())
}

export const getAllRatings = () => {
    return fetch(`http://localhost:8088/ratings`).then(response => response.json())
}

export const getCurBooks = () => {
    return fetch(`http://localhost:8088/books?_expand=user&_expand=status&_expand=rating`).then(response => response.json())
}

export const updateBook = (book) => {
    return fetch(`http://localhost:8088/books/${book.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
    })
}

export const getBookById = (id) => {
    return fetch(`http://localhost:8088/books/${id}?_expand=status&_expand=rating`).then(response => response.json())
}

export const deleteBook = (book) => {
    return fetch(`http://localhost:8088/books/${book}`, {
        method: "DELETE"
    })
}