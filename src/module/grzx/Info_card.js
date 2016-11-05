import React from 'react';
var $ = require('jquery');



var Info_card = React.createClass({
  getInitialState: function() {
    return {
      null
    }
  },
  handle_edit: function(e) {
    //隐藏显示界面，显示编辑界面
    $('.nickName').css("display", "none")
    $('.edit_phone').css("display", "none")
    $('.edit_mobile_wrapper').css("display", "block")
  },
  render: function() {
    var o = this;

    return (
      <section className={this.props.class_name}>
        <span>{this.props.title}</span>
         <div onTouchTap={o.handle_edit}></div>
        <span>{this.props.data.name}</span>
      </section>
    )

  }
});

export default Info_card;