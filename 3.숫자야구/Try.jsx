import React, {PureComponent} from 'react';

class Try extends PureComponent {
    state ={
        result : this.props.tryInfo.result,
        try    : this.props.tryInfo.try,
    }
    render() {
        const { tryInfo } = this.props
        return (
           <li>
               <b>{this.props.tryInfo.try}</b> - {this.props.tryInfo.result}
           </li>
        );
    }
}

export default Try;