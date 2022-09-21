import { createSignal } from 'solid-js'
import { BookList } from './components/BookList'
import { AddBook } from './components/AddBook'

function Bookshelf(props) {
  return (
    <div>
      <h1>{props.name}'s Bookshelf</h1>
      <BookList />
      <AddBook />
    </div>
  )
}

function App() {
  const [count, setCount] = createSignal(0)
  return (
    <div>
      <Bookshelf name='Danny' />
    </div>
  )
}

export default App
