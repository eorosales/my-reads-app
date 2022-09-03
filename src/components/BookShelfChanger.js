import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookShelfChanger = ({ currentShelf, bookUpdate, book }) => {
  const [selectedShelf, setSelectedShelf] = useState(currentShelf);
  const toMainPage = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setSelectedShelf(e.target.value);
    bookUpdate(book, e.target.value);
    toMainPage("/");
  };

  return (
    <div className='book-shelf-changer'>
      <select defaultValue={currentShelf} onChange={handleChange}>
        <option disabled>Move to...</option>
        <option value='currentlyReading'>Currently Reading</option>
        <option value='wantToRead'>Want to Read</option>
        <option value='read'>Read</option>
        <option value='none'>None</option>
      </select>
    </div>
  );
};

export default BookShelfChanger;
