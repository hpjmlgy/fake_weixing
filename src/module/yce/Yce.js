import React from 'react';
var $ = require('jquery');
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


var Yce = React.createClass({
  getInitialState: function() {
    return {
      null
    }
  },
  handleTap: function(e) {

  },
  render: function() {
    var o = this;
    return (
      <div>
         <section className="yce_top_wrapper">
           <div className="yce_title">账户余额</div>
           <div className="yce_zhye"><span>{this.props.data.zhye}</span></div>
         </section>
         <section className="yce_mid_wrapper">
           <section className="yhj">
             <span>优惠券</span>
             
             <a href=""></a>
             <span>{this.props.data.yhj_num}</span>
           </section>
           <section className="hb">
             <span>红包</span>
             
             <a href=""></a>
             <span>{this.props.data.hb_num}</span>
           </section>
         </section>
         <section className="yce_bottom_wrapper">
             <button><a href="">充值</a></button>
             <button><a href="">提现</a></button>
         </section>
      </div>
    )

  }
});

export default Yce;