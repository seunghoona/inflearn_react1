const React = require('react')
const ReactDom = require('react-dom')

const Try = ({tryInfo}) =>{
    return (
        <li>
            <b>{tryInfo.try}</b> - {tryInfo.result}
        </li>
    );
}

export default Try