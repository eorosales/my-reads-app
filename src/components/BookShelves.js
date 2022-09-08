import { Link } from "react-router-dom";
import Bookshelf from "../components/Bookshelf";

const Bookshelves = ({ categories, books, changeShelf }) => {
  const shelves = ["currentlyReading", "wantToRead", "read"];

  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      {categories.map((category) => (
        <Bookshelf
          key={categories.indexOf(category)}
          title={category}
          books={books.filter(
            (book) => book.shelf === shelves[categories.indexOf(category)]
          )}
          changeShelf={changeShelf}
        />
      ))}
      <div className='open-search'>
        <Link to='/search'>Add a book</Link>
      </div>
    </div>
  );
};

export default Bookshelves;
