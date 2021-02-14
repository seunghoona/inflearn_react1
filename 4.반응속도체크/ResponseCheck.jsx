import React, {Component} from 'react';

class ResponseCheck extends Component {

    state = {
         state   : 'waiting'
        ,message : '클릭해서 시작하세요'
        ,result  : []
    };
    timeout
    startTime
    onClickScreen = () =>{
        const {state, message, result} = this.state;
        //준비 상태일 때
        if(state ==='waiting'){
            this.setState({
                state  : 'ready',
                message: '초록색이 되면 클릭하세요 '
            });
            this.timeout = setTimeout(()=>{
                this.setState({
                    state: 'now',
                    message: '지금 클릭',
                })
                this.startTime = new Date();
            },Math.floor(Math.random() * 1000) +2000)// 2초 3초 랜덤
        }else if(state ==='ready'){ //성급하게 클릭
            clearTimeout(this.timeout);
            this.setState({
                state  : 'waiting',
                message: '이런 성급하셨군요',
                result : []
            })

        }else if(state === 'now'){ // 반응속도 체크
            this.endTime = new Date();
            this.setState((prevSate) =>{
                return{
                    state   : 'waiting',
                    message : '클릭해서 시작하세요',
                    result  : [...prevSate.result,this.endTime - this.startTime]
                }

            })
        }
    }


    onReset = () =>{
        this.setState({
            result:[]
        })
    }

    renderAverage = () =>{
        const {result} = this.state
        return result.length === 0
            ? null
            : <>
                <div>평균 시간 : {result.reduce((a,b)=> a + b) / result.length}ms</div>
                <button onClick={this.onReset}>리셋</button>
                </>
    }


    render() {
        const {state, message} = this.state
        return (
            <>
                <div id='screen'
                    className={state}
                     onClick={this.onClickScreen}
                >
                    {message}
                </div>
                {this.renderAverage()}
            </>
        );
    }
}

export default ResponseCheck;