import React from 'react';
import { Button } from 'reactstrap'; // Adjust imports based on your UI library

const NotStartedBooks = ({ books, onStartClick, onEditClick, onDeleteClick }) => {
  return (
    <div>
      <h2>Not Started Books</h2>
      {books.map(book => (
        <div key={book.id}>
          <p>{book.title} by {book.author}</p>
          <Button onClick={() => onStartClick(book.id)}>Start</Button>
          <Button onClick={() => onEditClick(book.id)}>Edit</Button>
          <Button onClick={() => onDeleteClick(book.id)}>Delete</Button>
        </div>
      ))}
      <Button href="/books/create">Add New Book</Button>
    </div>
  );
};

export default NotStartedBooks;