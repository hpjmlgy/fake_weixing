import React from 'react';
import Get_code from '../grzx/Get_code'

var $ = require('jquery');



var Bottom_module = React.createClass({
  getInitialState: function() {
    return {
      login_state: 1
    }
  },
  componentDidMount: function(e) {
    if (this.state.login_state == 0) {
      $('.bottom_module_wrapper2').css('display', 'none');
    } else {
      $('.bottom_module_wrapper').css('display', 'none');
    }
  },
  go_login: function(e) {
    $('.bottom_module_wrapper').css('display', 'none');
    $('.bottom_module_wrapper2').css('display', 'block');


  },
  go_register: function(e) {
    $('.bottom_module_wrapper').css('display', 'block');
    $('.bottom_module_wrapper2').css('display', 'none');

  },
  render: function() {
    var o = this;
    if (this.state.login_state == 0) {

      //注册页面
      return (
        <section>
        <section className="bottom_module_wrapper">
           <section className="phone_wrapper">
              <span>手 机</span>
              <input placeholder="输入用户名" type="text" className="input_phone"/>
           </section>
           <section className="password_wrapper">
              <span>密 码</span>
              <input placeholder="输入密码" type="password" className="input_password"/>
           </section>
           <section className="code_wrapper">
               <span className="yzm">验证码</span>
               <input type="text" className="input_code"/>
               <Get_code/>
           </section>
            <section className="registered_wrapper">
               <div onTouchTap={o.go_login}>已有账户</div>
           </section>
           <button className="register">注册</button>
      </section>
       <section className="bottom_module_wrapper2">
           <section className="name_wrapper">
              <span>用户名</span>
              <input placeholder="输入用户名" type="text" className="input_username"/>
           </section>
           <section className="password_wrapper">
              <span>密 码</span>
              <input placeholder="输入密码" type="text" className="input_password"/>
           </section>
           <section className="fun_wrapper">
               <div>忘记密码</div>
               <div onTouchTap={o.go_register}>马上注册</div>
           </section>
           <button className="login_in">登录</button>
      </section>
      </section>
      )

    } else {
      //登录页面

      return (
        <section>
      <section className="bottom_module_wrapper">
           <section className="phone_wrapper">
              <span>手 机</span>
              <input placeholder="输入用户名" type="text" className="input_phone"/>
           </section>
           <section className="password_wrapper">
              <span>密 码</span>
              <input placeholder="输入密码" type="password" className="input_password"/>
           </section>
           <section className="code_wrapper">
               <span className="yzm">验证码</span>
               <input type="text" className="input_code"/>
               <Get_code/>
           </section>
            <section className="registered_wrapper">
               <div onTouchTap={o.go_login}>已有账户</div>
           </section>
           <button className="register">注册</button>
      </section>
       <section className="bottom_module_wrapper2">
           <section className="name_wrapper">
              <span>用户名</span>
              <input placeholder="输入用户名" type="text" className="input_username"/>
           </section>
           <section className="password_wrapper">
              <span>密 码</span>
              <input placeholder="输入密码" type="text" className="input_password"/>
           </section>
           <section className="fun_wrapper">
               <div>忘记密码</div>
               <div onTouchTap={o.go_register}>马上注册</div>
           </section>
           <button className="login_in">登录</button>
      </section>
      </section>
      )
    }



  }
});

export default Bottom_module;