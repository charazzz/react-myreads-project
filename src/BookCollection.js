import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Bookshelf from './Bookshelf';
import Title from './Title';
import Logo from './Logo';

class BookCollection extends Component {
  render() {
    return (
      <div>
        <header className="toolbar">
          <Title/>
          <Logo />
        </header>
        <div className="list-books-content">
          <div>
          <Bookshelf
            name='Currently Reading'
            books={this.props.books.filter(book => book.shelf === "currentlyReading")}
            handleChange={this.props.handleChange}
            />
          <Bookshelf
            name='Want To Read'
            books={this.props.books.filter(book => book.shelf === "wantToRead")}
            handleChange={this.props.handleChange}
            />
          <Bookshelf
            name='Read'
            books={this.props.books.filter(book => book.shelf === "read")}
            handleChange={this.props.handleChange}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>

      </div>
    )
  }
}

export default BookCollection;
