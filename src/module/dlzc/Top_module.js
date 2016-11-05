import React from 'react';

var $ = require('jquery');



var Top_module = React.createClass({
  getInitialState: function() {
    return {
      null
    }
  },
  componentDidMount: function(e) {

  },

  render: function() {
    var o = this;


    return (
      <section className="top_module_wrapper">
          <section className="logo">
          </section>
          <section className="title_wrapper">
            <span></span>
            <span>第三方登录</span>
            <span></span>
          </section>
          <section className="login_wrapper">
               <div className="small_login_wrapper">
                   <img src="" alt=""/>
                   <span>QQ登录</span>
               </div>
               <div className="small_login_wrapper">
                  <img src="" alt=""/>
                  <span>微信登录</span>
               </div>
               <div className="small_login_wrapper">
                  <img src="" alt=""/>
                  <span>新浪登陆</span>
               </div>
          </section>
      </section>
    )


  }
});

export default Top_module;