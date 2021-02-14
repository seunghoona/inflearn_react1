import React, {PureComponent} from 'react';

class Try extends PureComponent {
    render() {
        return (
           <li>
               <b>{this.props.tryInfo.try}</b> - {this.props.tryInfo.result}
           </li>
        );
    }
}

export default Try;