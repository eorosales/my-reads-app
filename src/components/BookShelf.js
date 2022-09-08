import Book from "./Book";

const Bookshelf = ({ title, books, changeShelf }) => {
  return (
    <div>
      <div className='list-books-content'>
        <div className='bookshelf'>
          <h2 className='bookshelf-title'>{title}</h2>
          <div className='bookshelf-books'>
            <ol className='books-grid'>
              {books.map((b) => (
                <li key={b.id}>
                  <Book
                    book={b}
                    title={b.title}
                    author={b.authors}
                    thumbnail={b.imageLinks.thumbnail && b.imageLinks.thumbnail}
                    shelf={b.shelf}
                    changeShelf={changeShelf}
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookshelf;
