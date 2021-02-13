import Try from "./Try";

const react = require("react");
const reactDom = require("react-dom");
import React, {Component} from 'react';

function getNumbers(){
    const candiate = [1,2,3,4,5,6,7,8,9]
    const array = [];
    for (let i = 0; i < 4; i++) {
        //배열에서 랜덤한 값을 뽑아서 1개만 splice 하겠다. 배열로 리턴 첫번째 값
        const chosen =candiate.splice(Math.floor(Math.random()*(9 - i)),1)[0]
        array.push(chosen);
    }
    return array;
}


class BaseBall extends Component {
    state = {
        result  : '',
        value   : '',
        answer  : getNumbers(),
        tries   : []
    };

    onSubmitForm  = (e) =>{

        const {value ,answer, tries, result} = this.state
        e.preventDefault()

        if(tries.length == 0 ){
            this.setState({
                result:''
            })
        }

        if(value === answer.join('')){ //[1,3,5,7]
            this.setState({
                result:'홈런',
                tries : [...tries, { try : value, result : '홈런'}],
            })
            alert('게임을 다시시작합니다.')
            this.setState({
                value:'',
                answer:getNumbers(),
                tries: []
            })
        }else{
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball   = 0 ;
            if(tries.length >= 9){
                this.setState({
                    result : `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}`,
                });
                alert('게임을 다시시작합니다.')
                this.setState({
                    value  :'',
                    answer :getNumbers(),
                    tries  : []
                })
            }else{
                for (let i = 0; i < 4; i++) {
                    if(answerArray[i] === answer[i]){
                        strike+=1;

                    }else if(answer.includes(answerArray[i])){
                        ball+=1;
                    }
                }
                this.setState({
                    tries: [...tries,{try : value, result :`Strike ${strike} ,Ball ${ball}`}],
                    value:''
                });

            }
        }
        console.log(value)
    };

    onChangeInput = (e) =>{
        this.setState({
            value : e.target.value
        })
    };

    render() {
          const {value ,answer, tries, result} = this.state
        return (
            <>
                <h1>{result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={value} onChange={this.onChangeInput}/>
                </form>
                <div>시도 : {tries.length}</div>
                <ul>
                    {
                        tries.map((v,i)=>
                            <Try key={`${i+1}차 시도`} tryInfo={v}/>
                        )
                    }
                    {/*여기가 만약 100줄이면 전체 코드가 많이 쓰기 때문에 이런 문제를 파일을 쪼개서 처리하기 위해 컴포넌트를 분리한다.*/}
                </ul>
            </>
        );
    }
}

export default BaseBall;
