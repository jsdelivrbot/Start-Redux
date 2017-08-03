import React, { Component } from 'react';
import BookList from "../containers/book-list";
import BookActive from "../containers/book-active";
export default class App extends Component {
  render() {
    return (
      <div>
          <BookList/>
          <BookActive/>
      </div>
    );
  }
}
