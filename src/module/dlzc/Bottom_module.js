import React from 'react';
import Get_code from '../grzx/Get_code'

var $ = require('jquery');



var Bottom_module = React.createClass({
  getInitialState: function() {
    return {
      login_state: 0
    }
  },
  componentDidMount: function(e) {

  },

  render: function() {
    var o = this;
    if (this.state.login_state == 0) {
      //注册页面
      return (
        <section className="bottom_module_wrapper">
           <section className="phone_wrapper">
              <span>手 机</span>
              <input type="text" className="input_phone"/>
           </section>
           <section className="password_wrapper">
              <span>密 码</span>
              <input type="text" className="input_password"/>
           </section>
           <section className="code_wrapper">
               <span>验证码</span>
               <input type="text" className="input_code"/>
               <Get_code/>
           </section>
           <button className="login_in">注册</button>
      </section>
      )

    } else {
      //登录页面
      return (
        <section className="bottom_module_wrapper">
           <section className="name_wrapper">
              <span>用户名</span>
              <input type="text" className="input_username"/>
           </section>
           <section className="password_wrapper">
              <span>密 码</span>
              <input type="text" className="input_password"/>
           </section>
           <section className="fun_wrapper">
               <div>忘记密码</div>
               <div>马上注册</div>
           </section>
           <button className="login_in">登录</button>
      </section>
      )
    }



  }
});

export default Bottom_module;