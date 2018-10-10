import React from 'react';
import MovieListItem from './MovieListItem.js';

var MovieList = (props) => (
  <ul>
    {props.movies.map(movie => <MovieListItem movie={movie}/>)}
  </ul>
)


export default MovieList;
