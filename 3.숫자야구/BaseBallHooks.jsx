import Try from "./Try";

import React, {useState} from 'react'
import ReactDom from 'react-dom'
import TryHooks from "./TryHooks";


function getNumberHooks(){
    const candiateHook = [1,2,3,4,5,6,7,8,9]
    const arrayHook = [];
    for (let i = 0; i < 4; i++) {
        //배열에서 랜덤한 값을 뽑아서 1개만 splice 하겠다. 배열로 리턴 첫번째 값
        const chosen =candiateHook.splice(Math.floor(Math.random()*(9 - i)),1)[0]
        arrayHook.push(chosen);
    }
    return arrayHook;
}

const BaseBallHooks = () =>{

    const [result , setResult]    = useState('')
    const [value  , setValue]     = useState('')
    const [answer3, setAnswer3]   = useState(getNumberHooks())
    const [tries  , setTries]     = useState([])

    const onSubmitForm  = (e) =>{
        e.preventDefault()

        if(tries.length == 0 ){
            setResult('')
        }

        if(value === answer3.join){ //[1,3,5,7]
            /* this.setState({
                 result:'홈런',
                 //이전의 값을 현재의 값으로 바꿀 때는 아래와같이 사용하지 말고
                 tries : [...tries, { try : value, result : '홈런'}],
             })*/
            setResult('홈런')
            setTries((prevTries) => {
                return [...prevTries, { try : value, result : '홈런'}]
            });

            alert('게임을 다시시작합니다.')
            setValue('')
            setAnswer3(getNumberHooks())
            setTries([])
        }else{
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball   = 0 ;
            if(tries.length >= 9){
                console.log(typeof answer3)
                setResult(`10번 넘게 틀려서 실패! 답은 ${answer3.join(',')}`)
                alert('게임을 다시시작합니다.')
                setValue('')
                setAnswer3(getNumberHooks())
                setTries([])
            }else{
                for (let i = 0; i < 4; i++) {
                    if(answerArray[i] === answer3[i]){
                        strike+=1;

                    }else if(answer3.includes(answerArray[i])){
                        ball+=1;
                    }
                }

                setValue('')
                setTries((prevTries)=>{
                    return [...tries,{try : value, result :`Strike ${strike} ,Ball ${ball}`}]
                })
            }
        }
        console.log(value)
    };

    const onChangeInput = (e) =>{
        setValue(e.target.value)
    };

    return (
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input maxLength={4} value={value} onChange={onChangeInput}/>
            </form>
            <div>시도 : {tries.length}</div>
            <ul>
                {
                    tries.map((v,i)=>
                        <TryHooks key={`${i+1}차 시도`} tryInfo={v}/>
                    )
                }
            </ul>
        </>
    );
}
export default BaseBallHooks