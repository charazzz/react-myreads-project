import React, { Component } from 'react';

class Book extends Component {
  constructor(props) {
    super(props)
    this.changeShelf = this.changeShelf.bind(this)
  }

  //Changes the shelves of the books
  changeShelf(event) {
    const shelf = event.target.value;
    const book = this.props.book;
    this.props.handleChange(book, shelf);
  }



  render() {
    const { book } = this.props;
    console.log(book.canonicalVolumeLink);

    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks !== undefined ? book.imageLinks.thumbnail: ''})`}}></div>
            <a href={book.canonicalVolumeLink} target="_blank" className="book-info">Book Info</a>
            <div className="book-shelf-changer">
            <select value={this.props.book.shelf || 'none'} onChange={this.changeShelf}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}

export default Book;
