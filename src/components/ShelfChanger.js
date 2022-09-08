import { useState } from "react";

const ShelfChanger = ({ shelf, book, changeShelf }) => {
  const [selectedShelf, setSelectedShelf] = useState(shelf);

  const onShelfSelect = (e) => {
    e.preventDefault();
    setSelectedShelf(e.target.value);
    changeShelf(book, e.target.value);
  };

  return (
    <div className='book-shelf-changer'>
      <select defaultValue={selectedShelf} onChange={onShelfSelect}>
        <option disabled>Move to...</option>
        <option value='currentlyReading'>Currently Reading</option>
        <option value='wantToRead'>Want to Read</option>
        <option value='read'>Read</option>
        <option value='none'>None</option>
      </select>
    </div>
  );
};

export default ShelfChanger;
