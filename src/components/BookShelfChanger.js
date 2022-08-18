import { useState } from 'react';

const BookShelfChanger = ({ currentShelf }) => {
  const [ selectedShelf, setSelectedShelf ] = useState(currentShelf)

  const handleChange = (e) => {
    e.preventDefault();
    setSelectedShelf(e.target.value);
  }

  return (
    <div className="book-shelf-changer">
      <select defaultValue={selectedShelf} onChange={handleChange}>        
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
}

export default BookShelfChanger
