import React, { Component } from 'react';
import SearchBar from "../containers/search-bar";
import WeatherList from "../containers/weather-list";

export default class App extends Component {
  render() {
    return (
        <div className="row row-content">
          <SearchBar/>
          <WeatherList/>
        </div>
    );
  }
}
