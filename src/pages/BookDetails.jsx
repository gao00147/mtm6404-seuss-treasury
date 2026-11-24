import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function BookDetails() {
  const { id } = useParams()
  const [book, setBook] = useState(null)

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
      .then(response => response.json())
      .then(data => setBook(data))
  }, [id])

  if (!book) {
    return <p>Loading...</p>
  }

  return (
    <section className="details">
      <img src={book.image} alt={book.title} />
      <div>
        <h2>{book.title}</h2>
        <p>{book.description}</p>
      </div>
    </section>
  )
}

export default BookDetails
