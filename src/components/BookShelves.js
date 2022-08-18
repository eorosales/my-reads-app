import { useState, useEffect } from 'react';
import BookShelf from './BookShelf';
import * as BooksAPI from '../BooksAPI';

const BookShelves = () => {
  const [ currentlyReading, setCurrentlyReading ] = useState([]);
  const [ wantToRead, setWantToRead ] = useState([]);
  const [ read, setRead ] = useState([]); 

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setCurrentlyReading(res.filter(book => book.shelf === "currentlyReading"));
      setWantToRead(res.filter(book => book.shelf === "wantToRead"));
      setRead(res.filter(book => book.shelf === "read"));
    }
    getBooks()
  }, []);

  return (
    <>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div> 
        
        <BookShelf category={"Currently Reading"} books={currentlyReading} />
        <BookShelf category={"Want to Read"} books={wantToRead} />
        <BookShelf category={"Read"} books={read} />

      </div>
      <div className="open-search">
        {/* <a onClick={() => {}}>Add a book</a> */}
      </div>
    </>
  )
}

export default BookShelves
