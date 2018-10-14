import React, { Component } from 'react';
import './App.css';

var Tab = (props) => {
    return (
  
            <li className="tabitem" onClick={() => props.handleSwitchTab(props.tab)}>{props.tab}
            </li>

      );
}
//create three tabs, all, watched, to watch
//default is all
//on click on watched or to watch, filter through the movie status, to only render w/e we clicked

export default Tab;