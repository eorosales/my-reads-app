import { useState, useEffect } from 'react';
import BookShelf from './BookShelf';
import * as BooksAPI from '../BooksAPI';

const BookShelves = () => {
  const [ books, setBooks ] = useState([]);

  const currentlyReading = books && books.filter(book => book.shelf === "currentlyReading");
  const wantToRead = books && books.filter(book => book.shelf === "wantToRead");
  const read = books && books.filter(book => book.shelf === "read");

  useEffect(() => {
    let mounted = true;

    const getBooks = async () => {  
      try {
        await BooksAPI.getAll().then(res => {
          setBooks(res);
        })
        }catch(err) {
          console.log(err)
        }
      }

      mounted && getBooks();

      return () => ( mounted = false );

    },[books]);



  
  const handleBookUpdate =   (book, shelf) => { 
    const updateBook = () => BooksAPI.update(book, shelf);
    updateBook(); 
  }

  return (
    <>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div> 
        
        <BookShelf category={"Currently Reading"} books={currentlyReading} bookUpdate={handleBookUpdate} />
        <BookShelf category={"Want to Read"} books={wantToRead} bookUpdate={handleBookUpdate} />
        <BookShelf category={"Read"} books={read} bookUpdate={handleBookUpdate} />

      </div>
      <div className="open-search">
        {/* <a onClick={() => {}}>Add a book</a> */}
      </div>
    </>
  )
}

export default BookShelves
