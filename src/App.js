import React, { Component } from 'react';
import './App.css';
import Header from './containers/header/header.container';
import SelectedMovie from './containers/selected-movie/selected-movie.container';
import CarouselContainer from './containers/carousel/carousel.container';
import MovieList from './containers/movie-list/movie-list.container';

class App extends Component {
  render() {
    return (
      <div className="app">
          <Header />
          <div className="app__content">
              <SelectedMovie />
              <CarouselContainer />
              <MovieList />
          </div>
      </div>
    );
  }
}

export default App;
