import "./App.css";
import { Routes, Route } from 'react-router-dom';
import SearchBooks from './components/SearchBooks';
import BookShelves from './components/BookShelves';

function App() {
  return (
    <Routes className="app">
      <Route exact path="/" element={<BookShelves />} />
      <Route exact path="/search" element={<SearchBooks />} />
    </Routes>
  );
}

export default App;