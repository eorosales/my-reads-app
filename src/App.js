import "./App.css";
import * as BooksAPI from "./BooksAPI";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Bookshelves from "./components/Bookshelves";
import SearchBooks from "./components/SearchBooks";

function App() {
  const [booksOnShelves, setBooksOnShelves] = useState([]);
  const [searchedBooks, setSearchedBooks] = useState([]);

  const categories = ["Currently Reading", "Want to Read", "Read"];

  useEffect(() => {
    BooksAPI.getAll().then((res) => setBooksOnShelves(res));
  }, [booksOnShelves]);

  const handleShelfChanger = (book, shelf) => {
    const update = async () => {
      try {
        await BooksAPI.update(book, shelf);
      } catch (error) {
        throw new Error(`${error}`);
      }
    };
    update();
  };

  const handleSearch = (query) => {
    if (query === "" || query === undefined) {
      return setSearchedBooks([]);
    }

    if (query !== "" || query.length !== undefined) {
      const searchBooks = () => {
        BooksAPI.search(query)
          .then((res) => {
            res.forEach((book) => {
              const matchingBook = booksOnShelves.find((b) => book.id === b.id);
              if (matchingBook) {
                book.shelf = matchingBook.shelf;
              } else {
                book.shelf = "none";
              }
            });
            setSearchedBooks(res);
          })
          .catch(() => {
            setSearchedBooks([]);
          });
      };
      searchBooks();
    }
  };

  return (
    <Routes className='app'>
      <Route
        exact
        path='/'
        element={
          <Bookshelves
            categories={categories}
            books={booksOnShelves}
            changeShelf={handleShelfChanger}
          />
        }
      />
      <Route
        exact
        path='/search'
        element={
          <SearchBooks
            books={searchedBooks}
            changeShelf={handleShelfChanger}
            search={handleSearch}
          />
        }
      />
    </Routes>
  );
}

export default App;
