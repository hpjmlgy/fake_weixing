import React from 'react';
var $ = require('jquery');
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


var Gwc = React.createClass({
  getInitialState: function() {
    return {
      edit: "编辑",
      price: "179元",
      price_detail: "产品179元 优惠19元 运费10元"
    }
  },
  render: function() {
    var o = this;
    var order_num = this.props.orders.length;
    if (order_num == 0) {
      return (
        <section className={"no_order_wrapper"}>
            <img src="" alt=""/>
            <span>你的购物车空空如也</span>
        </section>
      )

    } else {

      var orders = this.props.orders.map(function(elem) {
        return (
          <section className="order_wrapper">
                 <div className="order_top_module">
                    <div className="icon"></div>
                    <span>{elem.name}</span>
                    <span>{o.state.edit}</span>
                 </div>
                 <div className="order_mid_module">
                    <img src="" alt=""/>
                    <div className="mid_wrapper">
                       <span>{elem.price}</span>
                       <span>{elem.product_type}</span>
                       <div className="order_num_wrapper">
                           <div className="minus"></div>
                           <input type="text" className="product_num"/>
                           <div className="add"></div>
                       </div>
                    </div>   
                 </div>
          </section>
        );

      });

      return (
        <section>
         {orders}
             <div className="order_bot_module">
                    <span>合计：</span>
                    <span className="price">{o.state.price}</span>
                    <span className="price_detail">{o.state.price_detail}</span>
                    <button className="pay"><a href="">去结算</a></button>
                 </div>
        </section>
      )
    }

  }
});

export default Gwc;