import React from 'react';
import Info_card from './Info_card';
import Edit_mobile from './Edit_mobile'
var $ = require('jquery');
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


var Grzx = React.createClass({
  getInitialState: function() {
    return {
      null
    }
  },
  componentDidMount: function(e) {
    $('.edit_mobile_wrapper').css("display", "none")
  },

  render: function() {
    var o = this;


    return (
      <section className="grzx_wrapper">
          <Info_card class_name="nickName" title="设置昵称" data={{name:"王小明"}}/>
          <Info_card  class_name="edit_phone" title="更改登陆手机" data={{name:"15811360584"}}/>
          <Edit_mobile/>
      </section>
    )


  }
});

export default Grzx;