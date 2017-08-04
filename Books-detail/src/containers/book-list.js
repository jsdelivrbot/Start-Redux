import React,{Component} from 'react';
import {connect} from "react-redux";
import {selectBook} from "../actions/index";
import {bindActionCreators} from "redux";


class BookList extends Component {
    renderList(){
      return this.props.book.map((book) => {
        return <li key = {book.title} onClick={() => this.props.selectBook(book)}>{book.title}</li>
      });
    }
    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
  return{
    book : state.book
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectBook:selectBook},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList)
