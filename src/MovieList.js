import React from 'react';
import MovieListItem from './MovieListItem.js';

var MovieList = (props) => (
  <ul className="movie">
    {props.movies.map(movie => <MovieListItem movie={movie} changeWatchStatus={props.handleChangeWatchStatus} getInfo={props.getInfo}/>)}
  </ul>
)


export default MovieList;
