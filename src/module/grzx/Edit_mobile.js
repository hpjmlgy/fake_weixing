import React from 'react';
var $ = require('jquery');
import Get_code from './Get_code'



var Edit_mobile = React.createClass({
  getInitialState: function() {
    return {
      null
    }
  },
  handle_deliver: function(e) {
    //updat data in remoteDatabase
    //
    //
    //
    //in callback handle UI change,here is the example code
    $('.nickName').css("display", "block")
    $('.edit_phone').css("display", "block")
    $('.edit_mobile_wrapper').css("display", "none")


  },
  render: function() {
    var o = this;

    return (
      <section className="edit_mobile_wrapper">
         <input placeholder="输入新手机号" type="text" className="new_phone"/>
         <section className="mid_wrapper">
            <input placeholder="输入验证码" type="text" className="check_code"/>
            <Get_code/>
         </section>       
         <button onTouchTap={o.handle_deliver} className="confirm"><a href="">确定</a></button>
      </section>
    )

  }
});

export default Edit_mobile;