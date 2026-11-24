import { useState, useEffect } from 'react'

function Quotes() {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    fetch('https://seussology.info/api/quotes/random/10')
      .then(response => response.json())
      .then(data => setQuotes(data))
  }, [])

  return (
    <section>
      <h2>Quotes</h2>
      <ul className="quotes">
        {quotes.map(quote => (
          <li key={quote.id}>
            <p>"{quote.text}"</p>
            <span>{quote.book.title}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Quotes
