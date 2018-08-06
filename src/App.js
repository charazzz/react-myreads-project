import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { getAll, update } from './BooksAPI';

import BookCollection from './BookCollection';
import Search from './Search';

import './App.css';

class BooksApp extends Component {

  constructor(props) {
    super(props)

    this.state={
      books: []
    }
    this.handleAllBooks = this.handleAllBooks.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

//Gets all the books that are currently on the app
  handleAllBooks() {
    getAll()
      .then(books => this.setState({ books }))
      .catch(err => console.log(err));
  }

//Called when component is rendered to the DOM
  componentDidMount() {
    this.handleAllBooks();
  }

//Updates the books on the shelves
  handleChange(book, shelf) {
    update(book, shelf)
      .then(() => this.handleAllBooks())
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="app">
      <Switch>
          <Route path='/search' render={() => (
            <Search
              books={this.state.books}
              handleChange={this.handleChange}/>
          )}/>
          <Route exact path='/' render={() => (
            <BookCollection
              books={this.state.books}
              handleChange={this.handleChange}/>
          )}/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp;
