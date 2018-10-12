import React, { Component } from 'react';
import './App.css';
import MovieList from './MovieList.js';
import Search from './Search.js';
import movieData from './movieData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      movies: movieData,
      // searchedMovie: ''
    }
  }

  handleSubmit(event) {
    let query = event.target.value
    let search = this.state.movies.filter((movie) => movie.includes(query))
    console.log(search);
    this.setState({
      movies: search
    })
  }

  render() {
    return (
      <div className="app">
        <h1 className="heading">My Movie List</h1>
        <div><Search handleSubmit={this.handleSubmit.bind(this)}/></div>
        <div className="movies"><MovieList movies={this.state.movies}/></div>
     </div>
    )
  }
}

// var MovieListItem = (props) => (
//     <li className="movie">{props.movie}</li>
// )

// var MovieList = (props) => (
//     <ul className="movieList">
//     {props.movies.map((movie) => <MovieListItem movie={movie} />)}
//     </ul>
// )




export default App;