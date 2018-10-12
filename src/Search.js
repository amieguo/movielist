import React from 'react';
import './App.css';



var Search = (props) => (
    <div>
    
    <input className="form-control" type="text" onChange={props.handleSearch}></input>
    <label>Search Movie</label>
    <button className="undo" onClick={props.handleUndo}>Show All</button>
    </div>
)
            
        


export default Search;