import React, { Component } from 'react';
import './App.css';
import MoviesList from './containers/MoviesList'

class App extends Component {

  render() {
    return (
      <div className="App">
        <MoviesList/>
      </div>
    );
  }
}

export default App;
