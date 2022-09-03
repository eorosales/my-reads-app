import "./App.css";
import * as BooksAPI from './BooksAPI';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchBooks from './components/SearchBooks';
import BookShelves from './components/BookShelves';

function App() {
  // States
  const [ books, setBooks ] = useState([]);
  const [ searchedBooks, setSearchedBooks ] = useState([]);
  // Books filtered based on shelf
  const currentlyReading = books && books.filter(book => book.shelf === "currentlyReading");
  const wantToRead = books && books.filter(book => book.shelf === "wantToRead");
  const read = books && books.filter(book => book.shelf === "read");
  // Side effect on mount 
  useEffect(() => {
    const getBooks = async () => {  
      try {
        await BooksAPI.getAll().then(res => {
          setBooks(res);
        })
        }catch(err) {
      }
    }
    getBooks();
    },[books]);

  // Update book and UI on book shelf change
  const handleBookUpdate =  (book, shelf) => { 
    const updateBook = () => BooksAPI.update(book, shelf);
    updateBook();    
  }

  // Retrieve books from db based on query
  const handleSearchQuery = async (query) => {   
    if(query !== "") {
      await BooksAPI.search(query).then(res => {

        res.forEach(book => { // for each book on the main page
          const matchingBook = books.find(b => book.id === b.id); // find a book on the main page that is also in the search results
          if(matchingBook) { // if a match exists
            book.shelf = matchingBook.shelf // set the book in search results to the same as the one found on the main page
          } else { // if not
            book.shelf = "none" // mark all other books as 'None'
          }
        })
        setSearchedBooks(res)
      })
      .catch(() => {
        console.log('No book found')
      })
    } else {
      setSearchedBooks([]);
    }
  }

  return (
    <Routes className="app">
      <Route exact path="/" element=
        {
          <BookShelves 
            currentlyReading={currentlyReading}
            wantToRead={wantToRead}
            read={read}
            bookUpdate={handleBookUpdate}
          />
        } />
      <Route exact path="/search" element=
        {
          <SearchBooks 
            books={books}
            search={handleSearchQuery}
            searchedBooks={searchedBooks}
            bookUpdate={handleBookUpdate}
          />
        } />
    </Routes>
    
  );
}

export default App;