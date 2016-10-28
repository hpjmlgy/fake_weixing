import React from 'react';


var Blog = React.createClass({
  render: function() {

    return (
      <div>
        <div className={"blog_head_wrapper"}>
            <div className="icon"></div>
            <div className="info">
               <p>怨天天马</p>
               <p>2016-9-18</p>
            </div> 
            <div className="ricon"></div>
        </div>
        <div className="blog_photo"></div>
        <div className="message">一张照片，记载着一个故事！一张照片，记载着一个故事！一张照片，记载着一个故事！一张照片，记载着一个故事！一张照片，记载着一个故事！一张照片，记载着一个故事！</div>
        <div className="blog_button_wrapper">
            <button><a href="">投票</a></button>
            <button><a href="">我要投稿</a></button>
            <button><a href="">分享</a></button>
        </div>
      </div>

    )
  }
});

export default Blog