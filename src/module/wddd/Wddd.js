import React from 'react';
var $ = require('jquery');
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


var Wddd = React.createClass({
  render: function() {
    var ticket_num = this.props.tickets.length;
    if (ticket_num == 0) {

      return (
        <section className={"no_ticket_wrapper"}>
            <img src="" alt=""/>
            <span>没有相关订单</span>
        </section>
      )

    } else {

      var tickets = this.props.tickets.map(function(elem) {
        switch (elem.type) {
          case 0:
            //type0 未支付
            return (
              <section className="ticket_wrapper">
                 <div className="ticket_top_module">
                    <span>{elem.name}</span>
                    <span>{elem.state}</span>
                 </div>
                 <div className="ticket_mid_module">
                    <img src="" alt=""/>
                    <div className="mid_wrapper">
                       <span>{elem.price}</span>
                       <span>{elem.product_type}</span>
                    </div>   
                 </div>
                 <div className="ticket_bot_module">
                    <button className="pay">去支付</button>
                 </div>
              </section>
            );

            break;
          case 1:
            return (
              <section className="ticket_wrapper">
              <div className="ticket_top_module">
                 <span>{elem.name}</span>
                 <span>{elem.state}</span>
              </div>
              <div className="ticket_mid_module">
                 <img src="" alt=""/>
                 <div className="mid_wrapper">
                       <span>{elem.price}</span>
                       <span>{elem.product_type}</span>
                 </div>
              </div>
              <div className="ticket_bot_module">
                 <button className="check_flow">查看物流</button>
              </div>
            </section>
            );
            break;
          case 2:
            return (
              <section className="ticket_wrapper">
              <div className="ticket_top_module">
                 <span>{elem.name}</span>
                 <span>{elem.state}</span>
              </div>
              <div className="ticket_mid_module">
                 <img src="" alt=""/>
                 <div className="mid_wrapper">
                       <span>{elem.price}</span>
                       <span>{elem.product_type}</span>
                 </div>
              </div>
              <div className="ticket_bot_module">
                 <button className="evaluate" data-id={elem.id}>去评价</button>
              </div>
            </section>
            );
            break;
        }


      });

      return (
        <section>{tickets}</section>
      )
    }

  }
});

export default Wddd;