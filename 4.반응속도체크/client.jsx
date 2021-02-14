import React, {Component} from 'react';
import ReactDom   from 'react-dom'
import ResponseCheck from "./ResponseCheck";
import {hot} from 'react-hot-loader/root';
import ResponseCheckHooks from "./ResponseCheckHooks";
const Hot = hot(ResponseCheckHooks)

ReactDom.render(<ResponseCheckHooks/> , document.querySelector('#root'))