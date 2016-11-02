import React from 'react';
var $ = require('jquery');
// var Swipeable = require('react-swipeable')
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

//全局变量

var Ddxq = React.createClass({

  getInitialState: function() {
    return {
      discount: "50元代金券"
    }
  },
  componentDidMount: function() {

  },
  handleTap: function(e) {

  },
  render: function() {
    var o = this;

    return (
      <div className={"ddxq_module_wrapper"}>
         <section className="Info_wrapper">
            <img src="" alt=""/>
            <div className="info_detail_wrapper">
                 <span>订单编号：AABCD3467lkijyg</span>
                 <span>名    称：时尚杂志</span>
                 <span>尺    寸：8寸</span>
                 <span>页    数：20页（封面）</span>
                 <span>数    量：2本</span>                      
            </div>    
         </section>
         <section className="ddxq_address_wrapper">
              <span className="ddxq_person">霍顿  先生   15311430428</span>
              <span className="ddxq_address">北京市海淀区信息路 501 彩虹家园</span>
              <div className="edit_info"></div>
              <div className="grey"></div>
              <span className="ddxq_consumeTime">制作周期： 5-7天</span>
         </section>
         <section className="ddxq_pay_wrapper">
             <div className="pay_method_wrapper">
                 <span>支付方式</span>
                 <span>在线支付</span>
             </div>
             <div className="pay_discount_wrapper">
                  <span>代金券</span>
                  <span>{this.state.discount}</span>

             </div>
             <div className="edit_discount"></div>   
         </section>
         <section className="submit_order_wrapper">
             <div className="white_space"></div>
             <span className="ddxq_price_info">结算详情:订单金额122元+运费：0元-优惠22元</span>
             <div className="ddxq_deliver_cargo_wrapper">
                  <div className="ddxq_price_info_wrapper">
                       <span>实付：</span>
                       <span>100元</span>
                  </div>
                  <button className="add_to_chart">加入购物车</button>
                  <button className="cargo_submit">提交订单</button>
             </div>
         </section>
      </div>
    );
  }


})


export default Ddxq;