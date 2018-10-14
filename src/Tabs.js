import React from 'react';
import Tab from './Tab.js';

var Tabs = (props) => (
  // console.log(props.)
  <ul className="tab">
    {props.tabs.map(tab => <Tab tab={tab} handleSwitchTab={props.handleSwitchTab}/>)}
  </ul>
)


export default Tabs;
