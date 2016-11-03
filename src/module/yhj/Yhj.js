import React from 'react';
var $ = require('jquery');
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


var Yhj = React.createClass({
  getInitialState: function() {
    return {
      null
    }
  },
  handleTap: function(e) {
    var target = $(e.target).parent().next();

    switch (target.css("display")) {
      case "none":
        target.css("display", "block")
        break;
      case "block":
        target.css("display", "none")
        break;
    }
  },
  render: function() {
    var o = this;
    var coupon_num = this.props.coupon.length;
    if (coupon_num == 0) {

      return (
        <section className={"no_coupon_wrapper"}>
            <img src="" alt=""/>
            <span>你的账户空空如也</span>
            <a href="">记得每个月都来领取30张照片免费冲印券哦>></a>
        </section>
      )

    } else {

      var coupons = this.props.coupon.map(function(elem) {
        var item_style = {
          display: 'none'
        };

        return (
          <section className="coupon_wrapper">
                 <div className="ticket_top_module">
                    <div className="left_wrapper">
                       <span>{elem.name}</span>
                       <span>代金券</span>
                       <span>{elem.condition}</span>
                    </div>
                    <div className="right_wrapper">

                       <span>{elem.price}</span>
                       <span>￥</span>
                       
                    </div>
                 </div>
                 <div className="ticket_bot_module">
                    <span>有效期至{elem.date}</span>
                    <span className="arrow" onTouchTap={o.handleTap}></span>
                    <span  >使用规则</span>
                 </div>
                 <div className="condition_desc" style={item_style}>
                    <span>使用规则使用规则使用规则使用规则使用规则使用规则使用规则</span>
                 </div>
          </section>
        );



      });

      return (
        <section>{coupons}</section>
      )
    }

  }
});

export default Yhj;