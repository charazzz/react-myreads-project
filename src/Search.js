import React, { Component} from 'react';
import { Link } from 'react-router-dom';

import { search } from './BooksAPI';
import Book from './Book';

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: '',
      searchedBooks: []
    }
    this.handleSearch = this.handleSearch.bind(this)
  }
  handleSearch(query) {
    if(!query) {
      this.setState({query: '', searchedBooks: []});
    } else  {
      this.setState({query});

    search(query)
    .then((searchedBooks) =>{
      if (searchedBooks.error) {
        this.setState({searchedBooks: []});
      } else {
        searchedBooks.map(searchedBooks => (this.props.books.filter((b) => b.id === searchedBooks.id).map(b => searchedBooks.shelf = b.shelf)))
        this.setState({searchedBooks});
        }
      })
    }
  }

  render() {
    return (
      <div>
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                <input
                    type="text"
                    placeholder="Search by title or author"
                    onChange={(event) => this.handleSearch(event.target.value)}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {this.state.searchedBooks.map((searchedBooks) => (
            <li key={searchedBooks.id}>
              <Book book={searchedBooks} handleChange={this.props.handleChange}/>
            </li>
          ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;
