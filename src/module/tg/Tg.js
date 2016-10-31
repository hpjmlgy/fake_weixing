import React from 'react';
var $ = require('jquery');
import Cropper from 'react-cropper';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var Tg = React.createClass({

  handleFileLoadTap: function(e) {
    e.preventDefault();
    $(this.refs.img_uploader).click()
  },
  componentDidMount: function() {

  },
  handleChange: function(e) {

  },
  render: function() {
    var o = this;
    return (
      <div>
         <div className="fileload_wrapper" onTouchTap={o.handleFileLoadTap}>
              <input className="img_uploader" type="file"  accept="image/*" ref="img_uploader"/>
         </div>
         <span className="desc">{this.props.desc}</span>
         <textarea ref="text_area" className="deliver_cargo" placeholder="输入故事，最多不超过300字..." maxLength="300" onChange={o.handleChange}></textarea>
         <div className="button_wrapper">
             <button>投稿</button>
             <button>邀请好友为我点赞</button>
         </div>
         
      </div>
    )
  }



})


export default Tg;