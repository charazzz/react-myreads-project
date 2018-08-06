import React from 'react';

import Book from './Book';

function bookshelf (props) {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {props.books.map((book) =>{
              return(
              <li key={book.id}>
                <Book
                  book={book}
                  handleChange={props.handleChange}
                />
            </li>
              )
            })}
            </ol>
          </div>
        </div>
    )
  }

export default bookshelf;
