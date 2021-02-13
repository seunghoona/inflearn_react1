import React, {Component} from 'react';

class WordReplay extends Component {
    constructor(props) {
        super(props);
        this.state ={
            text:'hello webpack'
        }
    }
    render() {
        return (
            <>
                <h1>{this.state.text}</h1>
            </>
        );
    }
}

export default WordReplay;