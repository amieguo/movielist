import React from 'react';
import './App.css';



var InputField = (props) => (
    <div>
        <input className="form-control" type="text" onChange={props.handleAdd}></input>
        <button className="input-button" type="submit" value="Submit">Add Movie</button>
    </div>
)
            
        


export default InputField;