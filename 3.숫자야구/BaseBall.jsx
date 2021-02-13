import Try from "./Try";

const react = require("react");
const reactDom = require("react-dom");
import React, {Component} from 'react';

function getNumbers(){

}


class BaseBall extends Component {
    state = {
        result  : '답',
        value   : '',
        ansewer : getNumbers(),
        tries   : []
    };

    onSubmitForm  = () =>{

    };

    onChangeInput = () =>{

    };


    fruit =[{
        fruit :'사과'
    }]

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>

                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>

                </form>
                <div>시도 : {this.state.tries.length}</div>
                <ul>
                    {
                        this.fruit.map((v,i)=>
                            <Try value={v} index={i}/>
                        )
                    }
                    {/*여기가 만약 100줄이면 전체 코드가 많이 쓰기 때문에 이런 문제를 파일을 쪼개서 처리하기 위해 컴포넌트를 분리한다.*/}
                </ul>
            </>
        );
    }
}

export default BaseBall;
