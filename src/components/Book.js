import ShelfChanger from "./ShelfChanger";

const Book = ({ book, title, author, thumbnail, shelf, changeShelf }) => {
  return (
    <div className='book'>
      <div className='book-top'>
        <div
          className='book-cover'
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${thumbnail})`,
          }}></div>
        <ShelfChanger shelf={shelf} book={book} changeShelf={changeShelf} />
      </div>
      <div className='book-title'>{title}</div>
      <div className='book-authors'>{author}</div>
    </div>
  );
};

export default Book;
