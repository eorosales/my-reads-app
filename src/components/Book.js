import BookShelfChanger from './BookShelfChanger';

const Book = ({ title, author, thumbnail, shelf }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage:
              `url(${thumbnail})`,
          }}
        ></div>
        <BookShelfChanger currentShelf={shelf}/>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{author}</div>
    </div>
  )
}

export default Book
