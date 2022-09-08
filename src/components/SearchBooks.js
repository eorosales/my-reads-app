import { useState } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";

const SearchBooks = ({ books, changeShelf, search }) => {
  const [query, setQuery] = useState("");

  const handleQuery = (query) => {
    if (query !== "") {
      setQuery(query);
      search(query);
      return;
    }
    if (query === "") {
      setQuery("");
      search(query);
      return;
    }
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
            value={query}
            onChange={(e) => handleQuery(e.target.value)}
          />
        </div>
      </div>
      <div className='search-books-results'>
        <ol className='books-grid'>
          {books.map((b) => (
            <li key={b.id}>
              <Book
                book={b}
                title={b.title}
                author={b.authors}
                thumbnail={b.imageLinks && b.imageLinks.thumbnail}
                shelf={b.shelf}
                changeShelf={changeShelf}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchBooks;
