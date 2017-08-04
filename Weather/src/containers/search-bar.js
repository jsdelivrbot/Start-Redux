import React,{Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchWeather} from "../actions/index";

class SearchBar extends Component {
    constructor(props){
    	super(props);
    	this.state = {
        term : '',
      };
      this.HandleInput = this.HandleInput.bind(this);
      this.HandleForm = this.HandleForm.bind(this);
    }
    HandleInput(event){
      this.setState({
        term:event.target.value,
      });
    }
    HandleForm(event){
      event.preventDefault();
      this.props.fetchWeather(this.state.term);
      this.setState({term:''});
    }

    render() {
        return (
            <form className = "input-group" onSubmit={this.HandleForm}>
              <input
                value={this.state.term}
                onChange={this.HandleInput}
                placeholder="Get Forcast!"
                className="form-control"/>
              <span className="input-group-btn">
                <button type = "submit" className="btn btn-primary">Search</button>
              </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather},dispatch);
}
export default connect(null,mapDispatchToProps)(SearchBar);
