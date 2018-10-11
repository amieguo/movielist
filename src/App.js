import React, { Component } from 'react';
import './App.css';
import MovieList from './MovieList.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      movies: this.props.movies
    }
  }

  handleInputChange(e) {
    console.log(e.target.value)
    e.preventDefault();
    this.setState({
      movies: e.target.value
    })
  }

  componentDidMount() {
    this.setState({
      movies: this.props.movies
    })
  }
 
  render() {
    return (
      <form className="form">
        <h1 className="heading">My Movie List</h1>
        <nav className="navbar"></nav>
        <input className="form-control" type="text" value={this.state.movies}></input>
        <button className="submit" onClick={this.handleInputChange.bind(this)}>Search Movie</button>
      <div><MovieList movies={this.state.movies}/></div>
     </form>
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