import React from 'react';
import searchIMDB from './searchIMDB';

// class MovieListItem extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             active: false,
//             results: []
//         }
//     }
    
//     getMovieInfo = (movie) => {
//         searchIMDB(movie, (data) => {
//             // console.log(data.results[0].vote_average)
//             this.setState({
//                 results: [{Release: data.results[0].release_date, Vote: data.results[0].vote_average}]
//             })
//         });
//     }
    
//     render() {
//         return (
//             // console.log(this.state),
//             <div>
//                 <div className="item">
//                 <li onClick={() => this.getMovieInfo(this.props.movie)}>{this.props.movie.title} {this.state.results.Release}
//                 <button className="towatch" onClick={() => this.props.changeWatchStatus(this.props.movie)}>{this.props.movie.watchStatus}</button>
//                 {/* <div>{this.state.results.Release}</div>
//                 <div>{this.state.results.Vote}</div> */}
//                 </li>
                
//                 </div>
//             </div>
//         )
//     }
    
// }

// export default MovieListItem;


var MovieListItem = (props) => (
    <div>
        <div className="item">
        <li onClick={() => props.getMovieInfo(props.movie)}>{props.movie.title} 
        <button className="towatch" onClick={() => props.changeWatchStatus(props.movie)}>{props.movie.watchStatus}</button>
        <div></div>
        </li>
        </div>
    </div>
)

export default MovieListItem;

