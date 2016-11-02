import React from 'react';
var $ = require('jquery');
var Swipeable = require('react-swipeable')


var Wd = React.createClass({
    render: function() {

        var modules = this.props.modules.map(function(elem) {
            return (
                <div className="module_wrapper" data-id={elem.id}>
                     <div className="module_icon"></div>
                     <span className="module_name">{elem.name}</span>
                 </div>
            )
        });

        return (
            <div>
                <section className="logo"></section>
                <section className="user_info">
                    <div className="welcome_wrapper">
                      <span>欢迎:</span>
                      <span>圆球球吗</span>
                    </div>
                    <div className="level_wrapper">
                       <span>用户等级：</span>
                       <span></span>
                    </div>
                </section>
                <section className="modules_wrapper">
                    {modules}
                </section>
                <section className="fun_wrapper">
                      <div className="fun_item_wrapper">
                             <img src="" alt="" className="icon"/>
                             <span className="title">关于我们</span>
                             <div className="confirm"></div>
                      </div>
                      <div className="fun_item_wrapper">
                             <img src="" alt="" className="icon"/>
                             <span className="title">关于我们</span>
                             <div className="confirm"></div>
                      </div>
                      <div className="fun_item_wrapper">
                             <img src="" alt="" className="icon"/>
                             <span className="title">关于我们</span>
                             <div className="confirm"></div>
                      </div>
                </section>
                <section className="bottom_nav">
                       <div><a href="">首页</a></div>
                       <div><a href="">开始定制</a></div>
                       <div><a href="">我的</a></div>
                </section>
            </div>
        )
    }
});

export default Wd;