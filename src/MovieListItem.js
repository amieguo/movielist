import React from 'react';

var MovieListItem = (props) => (
    <div>
        <div className="item">
        <li onClick={() => props.getMovieInfo(props.movie)}>{props.movie.title} 
        <button className="towatch" onClick={() => props.changeWatchStatus(props.movie)}>{props.movie.watchStatus}</button>
        </li>
        </div>
    </div>
)

export default MovieListItem;

