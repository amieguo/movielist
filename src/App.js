import React, { Component } from 'react';
import './App.css';



// class MovieListItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {     
//     }
//   }
//   render() {
//     return (
//     );
//   }
// }

var MovieListItem = (props) => (
    <li className="movie">{props.movie}</li>
)

var MovieList = (props) => (
    <ul className="movieList">
    {props.movies.map((movie) => <MovieListItem movie={movie} />)}
    </ul>
)

var App = (props) => (
  <div>
  <h2 className="heading">My Movie List</h2>
    <MovieList movies={props.movies}/>
 </div>
)


export default App;