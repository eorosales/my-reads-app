import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

const SearchBooks = ({ search, searchedBooks, bookUpdate }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {}, []);

  const updateQuery = (query) => {
    if (query !== "") {
      setQuery(query);
      search(query);
      return;
    } else {
      setQuery("");
      search(query);
      return;
    }

    // if(query === "") {
    //   setQuery("");
    //   search(query);
    //   return
    // }
  };

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link className='close-search' to='/'>
          Close
        </Link>
        <div className='search-books-input-wrapper'>
          <input
            type='text'
            placeholder='Search by title, author, or ISBN'
            name='query'
            value={query}
            onChange={(e) => updateQuery(e.target.value)}
          />
        </div>
      </div>
      <div className='search-books-results'>
        <ol className='books-grid'>
          {searchedBooks.length !== 0 &&
            searchedBooks.map((b) => (
              <li key={b.id}>
                <Book
                  book={b}
                  title={b.title}
                  author={b.authors}
                  thumbnail={b.imageLinks && b.imageLinks.thumbnail}
                  shelf={b.shelf}
                  bookUpdate={bookUpdate}
                />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchBooks;
