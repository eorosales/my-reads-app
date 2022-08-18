import Book from './Book';

const BookShelf = ({ category, books }) => {

  return (    
    <div className="list-books-content">
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{category}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {
                books.map(b => 
                  <li key={b.id}>
                    <Book 
                      title={b.title} 
                      author={b.authors}
                      thumbnail={b.imageLinks.thumbnail} 
                      shelf={b.shelf}
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
