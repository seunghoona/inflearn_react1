const react = require("react");
const reactDom = require("react-dom");
import React, {Component} from 'react';

class Try extends Component {
    render() {
        return (
           <li key={this.props.index + this.props.value.fruit}>
               <b>{this.props.value.fruit}</b> - {this.props.index}
           </li>
        );
    }
}

export default Try;