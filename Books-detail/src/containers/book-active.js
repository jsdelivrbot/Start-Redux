import React,{Component} from "react";
import {connect} from "react-redux";

class BookActive extends Component{
    render(){
      if(!this.props.book){
        return <div>Select a book to view the detail</div>;
      }
      return (
        <div>
          <h1>{this.props.book.title}</h1>
          <h3><sup>{this.props.book.author}</sup></h3>
        </div>
      )
    }
}

function mapStateToProps(state) {
  return {
    book:state.activeBook
  }
}
export default connect(mapStateToProps)(BookActive);
