import React, {Component} from 'react'
import avatarImg from '../../static/img/avatar.jpg'

class BlogUinfo extends Component{
    render(){
        return (
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
        )
    }
}

export default BlogUinfo