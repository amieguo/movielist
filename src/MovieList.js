import React from 'react';
import MovieListItem from './MovieListItem.js';

var MovieList = (props) => (
  <ul className="movie">
    {props.movies.map(movie => <MovieListItem movie={movie} handleChangeWatchStatus={props.handleChangeWatchStatus}/>)}
  </ul>
)


export default MovieList;
