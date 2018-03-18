import React, {Component} from 'react'
import avatarImg from '../../static/img/avatar.jpg'

class Header extends Component{
    render(){
        return (
            <div className="blog-hd-container">
                <div className="hd-operate-container clear">
                    <div className="hd-operate clear">
                        {/* 导航 */}
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
                        <div className="blog-related-operate flr">
                            <a className="cursor"><i className="icon iconfont search-icon">&#xe64a;</i></a>
                            <input type="text" placeholder="请输入" className="search-blog-input"/>
                            <span className="user-operate">
                                <a className="create-post  cursor">写文章</a>
                                <a className="user-signin  cursor">登录</a>
                                <a className="user-signup  cursor">注册</a> 
                                <img src={avatarImg} className="user-logined-avatar cursor" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="blog-uinfo-container">
                    <div className="blog-user-info">
                        <div className="user-intro-part clear">
                            <div className="fll">
                                <img src={avatarImg} className="user-avatar-img"/>
                            </div>
                            <div className="fll">
                                <p>亚腾的博客</p>
                                <p>oheart's Blog</p>
                            </div>
                        </div>
                        <div className="user-icon-part">
                            <a>
                                <i className="icon iconfont  user-info-icon">&#xe61e;</i>
                            </a>
                            <a>
                                <i className="icon iconfont  user-info-icon">&#xeee2;</i>
                            </a>
                            <a>
                                <i className="icon iconfont  user-info-icon">&#xe64c;</i> 
                            </a>
                            <a>
                                <i className="icon iconfont  user-info-icon">&#xe79d;</i>
                            </a>
                            <a>
                                <i className="icon iconfont  user-info-icon">&#xe6d9;</i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header