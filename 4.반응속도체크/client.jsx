import React, {Component} from 'react';
import ReactDom   from 'react-dom'
import ResponseCheck from "./ResponseCheck";
import {hot} from 'react-hot-loader/root';
const Hot = hot(ResponseCheck)

ReactDom.render(<ResponseCheck/> , document.querySelector('#root'))