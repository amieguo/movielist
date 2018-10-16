import React from 'react';

var MovieListItem = (props) => (
    <div>
        <div className="item">
        <li onClick={props.getMovieInfo}>{props.movie.title} 
        <button className="towatch" onClick={() => props.changeWatchStatus(props.movie)}>{props.movie.watchStatus}</button>
        </li>
        </div>
    </div>
)

export default MovieListItem;


// class MovieListItem extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             watched: "To Watch",
//             isOpen: false
//         }
//     }

//     changeWatchStatus = (movie) => {
//         this.setState({
//             watched: "Watched"
//         })

//         // console.log(movie)
//         this.props.handleChangeWatchStatus(movie)
        
//     }

//     // getMovieInfo() {
//     //     this.setState({
//     //         isOpen: !this.state.isOpen
//     //     })
//     //     this.props.getInfo()
//     // }
    
//     render() {
//         return (
//             <div>
//                 <div className="item">
//                 <li onClick={this.getMovieInfo}>{this.props.movie.title} 
//                 <button className="towatch" onClick={() => this.changeWatchStatus(this.props.movie)}>{this.state.watched}</button>
//                 </li>
//                 </div>
//             </div>
//         );
//     }
    
// }

// export default MovieListItem;