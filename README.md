# MyReads Project

Based on the starter template provided for the final assessment project for Udacity's React Fundamentals course. The project tracks the categories of books under 'Currently Reading', 'Want to Read', and 'Read'. Users can change the category 'shelf' of each book. Users can also navigate to a search view to look up books based on a query input. The resulting searched books that appear can be added to the 'shelves' main page via the chosen cateogory.

## Getting Started

To interact with the application:

- Download or clone the project via git clone
  `git clone https://github.com/eorosales/my-reads-app.git`
- cd into the project root directory
  `cd my-reads-app`
- install all project dependencies
  `npm install`
- start the development server with
  `npm start`

## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.
