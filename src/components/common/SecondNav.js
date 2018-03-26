import React, {Component} from 'react'

class SecondNav extends  Component{
    render(){
        const {show} = this.props;
        return (
            <ul className="user-center-dropdown"
                style={{display: (show ? 'block' : 'none')}}
               >
                <li className="user-menu-item cursor"> 
                    <a>个人主页</a>
                </li>
                <li className="user-menu-item cursor"> 
                    <a>发表文章</a>
                </li>
                <li className="user-menu-item cursor">
                    <a>退出</a>
                </li>
            </ul>
        )
    }
}

export default SecondNav