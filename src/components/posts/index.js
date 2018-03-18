import React, {Component} from 'react'
import Header from '../common/Header'
import PostMain from './PostMain'

class Posts extends Component{
    render(){
        return (
            <div>
                <Header />
                <PostMain />
            </div>
        )
    }
}

export default Posts