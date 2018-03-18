import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {HashRouter} from 'react-router-dom'
import Routers from './routers'

let div = document.createElement('div');
div.setAttribute('id', 'root');
document.body.appendChild(div);

const mountNode = document.getElementById('root');

ReactDOM.render(
    <HashRouter>
        <Routers />
    </HashRouter> 
    ,
    mountNode
)