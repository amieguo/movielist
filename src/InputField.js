import React from 'react';
import './App.css';

class InputField extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        input: ''
      }
    }
    
    handleInputChange(event) {
        var text = event.target.value;
        this.setState({
            input: text
        })
    }

    render() {
        return (
            <div>
            <input className="form-control" type="text" value={this.state.input} onChange={this.handleInputChange.bind(this)}></input>
            <button className="input-button" type="submit" onClick={() => this.props.handleSubmit(this.state.input)}>Add Movie</button>
            </div>
        )

    }
}        
        


export default InputField;