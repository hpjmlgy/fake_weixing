import React from 'react';
var $ = require('jquery');
// var Swipeable = require('react-swipeable')
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

//全局变量

var Zffs = React.createClass({

  getInitialState: function() {
    return {
      price: "50.00元"
    }
  },
  componentDidMount: function() {

  },
  handleTap: function(e) {

  },
  render: function() {
    var o = this;

    return (
    <div className={"zffs_module_wrapper"}>
         <section className="price_wrapper">
            <span>订单金额：</span>
            <span>{this.state.price}</span>    
         </section>
         <section className="pay_zone">
              <div className="pay_type_wrapper">
                 <img src="" alt="" className="icon"/>
                 <span className="title">微信支付</span>
                 <div className="confirm"></div>
              </div>
         </section>
    <section className="blank_space"></section>
       
      </div>
    );
  }


})


export default Zffs;