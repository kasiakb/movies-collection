import React, { Component } from 'react';
import './App.css';
import MoviesList from './containers/MoviesList';
import Header from './components/Header'
import {AppContainer} from '../src/components/Style/AppContainer';

class App extends Component {

  render() {
    return (
      <AppContainer>
        <Header/>
        <MoviesList/>
      </AppContainer>
    );
  }
}

export default App;
