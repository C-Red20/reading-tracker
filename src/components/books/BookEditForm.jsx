import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Button } from 'reactstrap'

export const BookEditForm = () => {
  const { bookId } = useParams()
  const history = useHistory()

  const handleSave = () => {
    // Logic to save edited book
    // Redirect to book list after saving
    history.push('/books')
  }

  return (
    <div>
      <h2>Edit Book</h2>
      {/* Form inputs pre-filled with book details */}
      <Button onClick={handleSave}>Save Changes</Button>
    </div>
  )
}