import React, { Component } from 'react';
import './App.css';
import MovieList from './MovieList.js';
import Search from './Search.js';
import InputField from './InputField.js';
import movieData from "./movieData";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      movies: [],
      search: ''
    }
  }

  handleSearch(event) {
    var query = event.target.value;
    var search = this.state.movies.filter((movie) => movie.toLowerCase().includes(query));
    // console.log(search);
    this.setState({
      movies: search
    })
  }

  handleUndo() {
    this.setState({
      movies: this.props.movies
    })
  }

  // handleAdd(event) {
  //   var newMovie = event.target.value;
  //   this.setState({
  //     search: newMovie
  //   })
  //   // this.state.movies.push(newMovie);
  //   // console.log(this.state.movies)
  // }
  /* handleAdd={this.handleAdd.bind(this)} */

  handleSubmit(movie) {
    var movieList = this.state.movies;
    movieList.push(movie)
    this.setState({
      movies: movieList
    })
    // this.props.handleadd(this.state)
  }

  render() {
    return (
      <div className="app">
        <h1 className="heading">My Movie List</h1>
        <div><InputField handleSubmit={this.handleSubmit.bind(this)}/></div>  
        <div><Search handleSearch={this.handleSearch.bind(this)} handleUndo={this.handleUndo.bind(this)}/></div>
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