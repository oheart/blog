import React, {Component} from 'react'
import Nav from './Nav'
import SecondNav from './SecondNav'
import avatarImg from '../../static/img/avatar.jpg'

class UserOperate extends Component{
    constructor(){
        super();
        this.state = {
            showSecondNav: false
        }
    }
    handleMouseEnter(){
        this.setState({
            showSecondNav: !this.state.showSecondNav
        })
    }
    handleMouseLeave(e){
        console.log('e')
        this.setState({
            showSecondNav: false
        })
    }

    render(){
        return (
            <div className="hd-operate-container clear">
                <div className="hd-operate clear">
                    {/* 导航 */}
                    <Nav />
                    <div className="blog-related-operate flr">
                        <input type="text" placeholder="请输入" className="search-blog-input"/>
                        <a className="search-icon cursor"><i className="icon iconfont">&#xe64a;</i></a>
                        <div className="user-operate flr">
                            <a className="user-signin  cursor">登录</a>
                            <a className="user-signup  cursor">注册</a> 
                            <div
                                className="user-center-nav flr"
                                onMouseLeave={(e) => this.handleMouseLeave(e)}>
                                <a className="cursor" 
                                    onMouseEnter={(e) => this.handleMouseEnter(e)}
                                    >
                                    <img src={avatarImg} className="user-logined-avatar"/>
                                </a>                        
                                <SecondNav 
                                    show={this.state.showSecondNav} 
                                    />
                            </div>                       
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserOperate