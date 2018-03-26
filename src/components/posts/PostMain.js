import React, {Component} from 'react'
import postCover1 from '../../static/img/img1.jpg'
import postCover2 from '../../static/img/img2.jpg'
import postCover3 from '../../static/img/img3.jpg'
import postImg01 from '../../static/img/post_img01.jpg'
import postImg02 from '../../static/img/post_img02.jpg'
import postImg03 from '../../static/img/post_img03.jpg'
import postImg04 from '../../static/img/post_img04.jpg'
import postImg05 from '../../static/img/post_img05.jpg'
import postImg06 from '../../static/img/post_img06.jpg'

class PostMain extends Component{
    render(){
        return (
            <div className="post-main-container">
                <div className="clear">
                    {/* 文章内容 */}
                    <div className="post-content-part fll">
                            <div className="detail-post-item cursor">
                                <div className="post-cover-part">
                                    <img src={postCover1} className="post-cover-img"/>
                                </div>
                                <div className="post-text-part">
                                    <h3 className="article-tit">
                                        Unity + AR 体验记
                                    </h3>
                                    <p className="article-summary">
                                        作为 iOS 11 重磅功能之一的 ARKit 在发布之初就引起了我强烈的兴趣，那段时间我正好也对著名的游戏引擎 Unity 很感兴趣，不满足于制作小游戏的我便开始琢磨如何将 ARKit 和 Unity 结合在一起来实现 AR 效果。
                                    </p>
                                    <p className="article-relate-info">
                                        <span>暖暖</span>
                                        <span> | </span>
                                        <span>两个星期前发布 </span>
                                        <span> | </span>
                                        <span>2000人阅读</span>
                                        <span> | </span>
                                        <span>14条评论</span>
                                    </p>
                                </div>
                            </div>
                            <div className="detail-post-item cursor">
                                <div className="post-cover-part">
                                    <img src={postCover2} className="post-cover-img"/>
                                </div>
                                <div className="post-text-part">
                                    <h3 className="article-tit">
                                        Unity + AR 体验记
                                    </h3>
                                    <p className="article-summary">
                                        作为 iOS 11 重磅功能之一的 ARKit 在发布之初就引起了我强烈的兴趣，那段时间我正好也对著名的游戏引擎 Unity 很感兴趣，不满足于制作小游戏的我便开始琢磨如何将 ARKit 和 Unity 结合在一起来实现 AR 效果。
                                    </p>
                                    <p className="article-relate-info">
                                        <span>暖暖</span>
                                        <span> | </span>
                                        <span>两个星期前发布 </span>
                                        <span> | </span>
                                        <span>2000人阅读</span>
                                        <span> | </span>
                                        <span>14条评论</span>
                                    </p>
                                </div>
                            </div>
                            <div className="detail-post-item cursor">
                                <div className="post-cover-part">
                                    <img src={postCover3} className="post-cover-img"/>
                                </div>
                                <div className="post-text-part">
                                    <h3 className="article-tit">
                                        Unity + AR 体验记
                                    </h3>
                                    <p className="article-summary">
                                        作为 iOS 11 重磅功能之一的 ARKit 在发布之初就引起了我强烈的兴趣，那段时间我正好也对著名的游戏引擎 Unity 很感兴趣，不满足于制作小游戏的我便开始琢磨如何将 ARKit 和 Unity 结合在一起来实现 AR 效果。
                                    </p>
                                    <p className="article-relate-info">
                                        <span>暖暖</span>
                                        <span> | </span>
                                        <span>两个星期前发布 </span>
                                        <span> | </span>
                                        <span>2000人阅读</span>
                                        <span> | </span>
                                        <span>14条评论</span>
                                    </p>
                                </div>
                            </div>
                            <div className="detail-post-item cursor">
                                <div className="post-cover-part">
                                    <img src={postCover1} className="post-cover-img"/>
                                </div>
                                <div className="post-text-part">
                                    <h3 className="article-tit">
                                        Unity + AR 体验记
                                    </h3>
                                    <p className="article-summary">
                                        作为 iOS 11 重磅功能之一的 ARKit 在发布之初就引起了我强烈的兴趣，那段时间我正好也对著名的游戏引擎 Unity 很感兴趣，不满足于制作小游戏的我便开始琢磨如何将 ARKit 和 Unity 结合在一起来实现 AR 效果。
                                    </p>
                                    <p className="article-relate-info">
                                        <span>暖暖</span>
                                        <span> | </span>
                                        <span>两个星期前发布 </span>
                                        <span> | </span>
                                        <span>2000人阅读</span>
                                        <span> | </span>
                                        <span>14条评论</span>
                                    </p>
                                </div>
                            </div>
                            <div className="detail-post-item cursor">
                                <div className="post-cover-part">
                                    <img src={postCover2} className="post-cover-img"/>
                                </div>
                                <div className="post-text-part">
                                    <h3 className="article-tit">
                                        Unity + AR 体验记
                                    </h3>
                                    <p className="article-summary">
                                        作为 iOS 11 重磅功能之一的 ARKit 在发布之初就引起了我强烈的兴趣，那段时间我正好也对著名的游戏引擎 Unity 很感兴趣，不满足于制作小游戏的我便开始琢磨如何将 ARKit 和 Unity 结合在一起来实现 AR 效果。
                                    </p>
                                    <p className="article-relate-info">
                                        <span>暖暖</span>
                                        <span> | </span>
                                        <span>两个星期前发布 </span>
                                        <span> | </span>
                                        <span>2000人阅读</span>
                                        <span> | </span>
                                        <span>14条评论</span>
                                    </p>
                                </div>
                            </div>
                            <div className="detail-post-item cursor">
                                <div className="post-cover-part">
                                    <img src={postCover3} className="post-cover-img"/>
                                </div>
                                <div className="post-text-part">
                                    <h3 className="article-tit">
                                        Unity + AR 体验记
                                    </h3>
                                    <p className="article-summary">
                                        作为 iOS 11 重磅功能之一的 ARKit 在发布之初就引起了我强烈的兴趣，那段时间我正好也对著名的游戏引擎 Unity 很感兴趣，不满足于制作小游戏的我便开始琢磨如何将 ARKit 和 Unity 结合在一起来实现 AR 效果。
                                    </p>
                                    <p className="article-relate-info">
                                        <span>暖暖</span>
                                        <span> | </span>
                                        <span>两个星期前发布 </span>
                                        <span> | </span>
                                        <span>2000人阅读</span>
                                        <span> | </span>
                                        <span>14条评论</span>
                                    </p>
                                </div>
                            </div>
                    </div>
                    <div className="post-slidebar-part fll">
                        {/* 关于我 */}
                        <div className="post-card-item">
                            <h3 className="post-card-tit">About Me</h3>
                            <p className="about-me">
                                <img src={postCover1} className="about-me-img" />
                            </p>
                            <p className="about-me-intro text-indent2">
                                爱好旅行以及一切富有创造性的事物，
                                尤其是摄影、设计和编程。这个世界就是我的学校。学自己之所想所爱。
                                自由的身心定能使我成为一个一直朝前行走的行者。
                            </p>
                        </div>
                        {/* 最热文章 */}
                        <div className="post-card-item">
                            <h3 className="post-card-tit">Popular</h3>
                            <div className="popular-posts">
                                <div className="popular-post-item">
                                        <div className="popular-post-pic">
                                            <img src={postCover1} className="popular-post-cover"/>
                                        </div>
                                        <div className="popular-post-tit cursor">
                                        那些激动人心的React,Webpack,Babel的新特性对于我们开发体验带来哪些提升
                                        </div>
                                </div>
                                <div className="popular-post-item">
                                        <div className="popular-post-pic">
                                            <img src={postCover2} className="popular-post-cover"/>
                                        </div>
                                        <div className="popular-post-tit cursor">
                                        JS修改css3背景渐变色linear-gradient代码为什么没效果呢
                                        </div>
                                </div>
                                <div className="popular-post-item">
                                        <div className="popular-post-pic">
                                            <img src={postCover3} className="popular-post-cover"/>
                                        </div>
                                        <div className="popular-post-tit cursor">
                                        css3问题求教,如果图片宽度大于上一层空白处而换行,怎样让空白处不显示并居中内容,从而更加美观
                                        </div>
                                </div>
                                <div className="popular-post-item">
                                        <div className="popular-post-pic">
                                            <img src={postCover1} className="popular-post-cover"/>
                                        </div>
                                        <div className="popular-post-tit cursor">
                                        那些激动人心的React,Webpack,Babel的新特性对于我们开发体验带来哪些提升
                                        </div>
                                </div>
                                <div className="popular-post-item">
                                        <div className="popular-post-pic">
                                            <img src={postCover2} className="popular-post-cover"/>
                                        </div>
                                        <div className="popular-post-tit cursor">
                                        JS修改css3背景渐变色linear-gradient代码为什么没效果呢
                                        </div>
                                </div>
                            </div>
                        </div>
                        {/* 标签 */}
                        <div className="post-card-item">
                            <h3 className="post-card-tit">Labels</h3>
                            <div className="post-labels">
                                <span  className="post-label-item cursor">Javascript</span>
                                <span  className="post-label-item cursor">Node</span>
                                <span  className="post-label-item cursor">生活</span>
                                <span  className="post-label-item cursor">旅行</span>
                                <span  className="post-label-item cursor">其他</span>
                                <span  className="post-label-item cursor">Java</span>
                                <span  className="post-label-item cursor">Python</span>
                                <span  className="post-label-item cursor">Javascript</span>
                                <span  className="post-label-item cursor">Node</span>
                                <span  className="post-label-item cursor">生活</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* footer */}
                <div className="post-footer-container clear">
                    <div className="post-footer-item cursor fll">
                       <a>
                          <img 
                            src={postImg01} 
                            className="post-footer-item-img"/>
                       </a>
                       <div className="post-footer-item-mask">
                           mask
                       </div>
                    </div>
                    <div className="post-footer-item cursor fll">
                       <a>
                          <img 
                            src={postImg02}
                            className="post-footer-item-img"/>
                       </a>
                       <div className="post-footer-item-mask">
                           mask
                       </div>
                    </div>
                    <div className="post-footer-item cursor fll">
                       <a>
                          <img 
                          src={postImg03}
                          className="post-footer-item-img"/>
                       </a>
                       <div className="post-footer-item-mask">
                           mask
                       </div>
                    </div>
                    <div className="post-footer-item cursor fll">
                       <a>
                          <img 
                            src={postImg04}
                            className="post-footer-item-img"/>
                       </a>
                       <div className="post-footer-item-mask">
                           mask
                       </div>
                    </div>
                    <div className="post-footer-item cursor fll">
                       <a>
                          <img 
                            src={postImg05}
                            className="post-footer-item-img"/>
                       </a>
                       <div className="post-footer-item-mask">
                           mask
                       </div>
                    </div>
                    <div className="post-footer-item cursor fll">
                       <a>
                          <img 
                            src={postImg06}
                            className="post-footer-item-img"/>
                       </a>
                       <div className="post-footer-item-mask">
                           mask
                       </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostMain