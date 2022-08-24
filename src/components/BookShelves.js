import { Link } from 'react-router-dom';  
import BookShelf from './BookShelf';

const BookShelves = ({ currentlyReading, wantToRead, read, bookUpdate }) => {
  return (
    <>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div> 
        
        <BookShelf category={"Currently Reading"} books={currentlyReading} bookUpdate={bookUpdate} />
        <BookShelf category={"Want to Read"} books={wantToRead} bookUpdate={bookUpdate} />
        <BookShelf category={"Read"} books={read} bookUpdate={bookUpdate} />

      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </>
  )
}

export default BookShelves
