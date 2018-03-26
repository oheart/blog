import React, {Component} from 'react'
import UserOperate from './UserOperate'
import BlogUinfo from './BlogUinfo'

class Header extends Component{
    render(){
        return (
            <div className="blog-hd-container">
               <UserOperate />
               <BlogUinfo />
            </div>
        )
    }
}

export default Header