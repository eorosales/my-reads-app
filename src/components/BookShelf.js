import Book from './Book';

const BookShelf = ({ category, books, bookUpdate }) => {

  return (    
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{category}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {
                books && books.map(b => 
                  <li key={b.id}>
                    <Book 
                      book={b}
                      title={b.title} 
                      author={b.authors}
                      thumbnail={b.imageLinks && b.imageLinks.thumbnail } 
                      shelf={b.shelf}
                      bookUpdate={bookUpdate}
                    />
                  </li>)
                }
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookShelf
