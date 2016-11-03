import React from 'react';
var $ = require('jquery');
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


var Yhj = React.createClass({
  render: function() {
    var ticket_num = this.props.coupon.length;
    if (ticket_num == 0) {

      return (
        <section className={"no_coupon_wrapper"}>
            <img src="" alt=""/>
            <span>你的账户空空如也</span>
            <a href="">记得每个月都来领取30张照片免费冲印券哦>></a>
        </section>
      )

    } else {

      var tickets = this.props.tickets.map(function(elem) {
        return (
          <section className="coupon_wrapper">
                 <div className="ticket_top_module">
                    <div className="left_wrapper">
                       <span>elem.name</span>
                       <span>代金券</span>
                       <span>elem.condition</span>
                    </div>
                    <div className="right_wrapper">
                       <span>elem.price</span>
                       <span>￥</span>
                    </div>
                 </div>
                 <div className="ticket_bot_module">
                    <span>有效期至{elem.date}</span>
                    <span>使用规则</span>
                 </div>
          </section>
        );



      });

      return (
        <section>{tickets}</section>
      )
    }

  }
});

export default Yhj;