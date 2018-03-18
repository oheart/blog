import React, {Component} from 'react'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import Posts from '../components/posts'

import '../static/style/reset.css'
import '../static/style/style.less'
import '../static/iconfont/iconfont.css'


class Routers extends Component{
    render(){
        return (
            <Switch>
                <Route exact path='/' component={Posts} />
                <Redirect to='/' />
            </Switch>
        )
    }
}

export default Routers