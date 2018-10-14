import React from 'react';


class MovieListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            watched: "To Watch"
        }
    }

    changeWatchStatus = () => {
        this.setState({
            watched: "Watched"
        })
        // console.log(this.state, this)
    }

    
    render() {
        return (
            <div>
                <div className="item">
                <li>{this.props.movie.title} 
                <button className="towatch" onClick={this.changeWatchStatus}>{this.state.watched}</button>
                </li>
                </div>
            </div>
        );
    }
    
}

export default MovieListItem;