import React, {Component} from 'react'

class Nav extends Component{
    render(){
        return (
            <ul className="blog-hd-nav clear fll">
                <li className="blog-nav-item cursor">
                    主页
                </li>
                <li className="blog-nav-item cursor">
                    关于
                </li>
                <li className="blog-nav-item cursor">
                    联系
                </li>
                <li className="blog-nav-item cursor">
                    作者
                </li>
                <li className="blog-nav-item cursor">
                    特性
                </li>
            </ul>
        )
    }
}

export default Nav