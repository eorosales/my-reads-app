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
  const handleSearchQuery = (query) => {   
    const searchedBookResults = () => {
        query !== "" 
        ? 
        BooksAPI.search(query, 20)
          .then(res => setSearchedBooks(res))
        :
        setSearchedBooks([]); 
    }
    searchedBookResults();
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
            search={handleSearchQuery}
            searchedBooks={searchedBooks}
            bookUpdate={handleBookUpdate}
          />
        } />
    </Routes>
    
  );
}

export default App;