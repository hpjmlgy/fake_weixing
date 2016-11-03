import React from 'react';
var $ = require('jquery');
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


var Hb = React.createClass({
  getInitialState: function() {
    return {
      null
    }
  },
  handleTap: function(e) {

  },
  render: function() {
    var o = this;
    var hb_num = this.props.hb.length;
    if (hb_num == 0) {


    } else {

      var hbs = this.props.hb.map(function(elem) {
        var item_style = {
          display: 'none'
        };

        return (
          <section className="hb_wrapper">
                 <div className="hb_top_module">
                    <div className="left_wrapper">
                       <span>￥</span>
                       <span>{elem.price}</span>
                    </div>
                    <div className="right_wrapper">
                       <span>使用规则:</span>
                       <span>1.不能与其他优惠同时使用</span>                     
                       <span>2.消费30元以上才能使用</span>
                    </div>
                 </div>
                 <div className="hb_bot_module">
                    <span>有效期至{elem.date}</span>
                 </div>
          </section>
        );
      });

      return (
        <section>{hbs}</section>
      )
    }

  }
});

export default Hb;