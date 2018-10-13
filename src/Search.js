import React from 'react';
import './App.css';



class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
    }

    handleSearch(event) {
        var text = event.target.value;
        this.setState = {
            search: text
        }
        this.props.handleSearchInputChange(text);
        
    }
    
    
    render() {
    return (
        <div>
        <input className="form-control" type="text" onChange={this.handleSearch.bind(this)}></input>
        <label className="label">Search Movie</label>
        <button className="undo" onClick={this.props.handleUndo}>Show All</button>
        </div>
    )
    }
}
            
        


export default Search;