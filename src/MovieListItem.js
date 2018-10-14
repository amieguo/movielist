import React from 'react';


class MovieListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            watched: "To Watch"
        }
    }

    changeWatchStatus = (movie) => {
        this.setState({
            watched: "Watched"
        })
        // console.log(movie)
        this.props.handleChangeWatchStatus(movie)
        
    }

    
    render() {
        return (
            <div>
                <div className="item">
                <li>{this.props.movie.title} 
                <button className="towatch" onClick={() => this.changeWatchStatus(this.props.movie)}>{this.state.watched}</button>
                </li>
                </div>
            </div>
        );
    }
    
}

export default MovieListItem;