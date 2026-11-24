import { Routes, Route, Link } from 'react-router-dom'
import Books from './pages/Books'
import BookDetails from './pages/BookDetails'
import Quotes from './pages/Quotes'

function App() {
  return (
    <>
      <header>
        <h1>Seuss Treasury</h1>
        <nav>
          <Link to="/">Books</Link>
          <Link to="/quotes">Quotes</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </main>
    </>
  )
}

export default App
