import React from 'react';



var $ = require('jquery');
var Swipeable = require('react-swipeable')
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

//全局变量
var current_size = null;
var current_type = null;
var type_queue = [];
var size_queue = [];

var Btcc = React.createClass({

    componentDidMount: function() {

    },

    getInitialState: function() {
      return {
        price: "￥0元"
      };
    },
    handleTap: function(e) {

      // last_target.css('border-color', '#e52e04');
      switch ($(e.target).data("type")) {
        case "size":
          if (size_queue.length > 0) {
            var last_target = size_queue.pop();
            last_target.css('border-color', 'grey');
            var current_target = $(e.target);
            current_target.css('border-color', '#e52e04');
            size_queue.push(current_target)
          } else {
            var current_target = $(e.target);
            current_target.css('border-color', '#e52e04');
            size_queue.push(current_target)
          }
          current_size = $(e.target).html();
          break;
        case "type":
          if (type_queue.length > 0) {
            var last_target = type_queue.pop();
            last_target.css('border-color', 'grey');
            var current_target = $(e.target);
            current_target.css('border-color', '#e52e04');
            type_queue.push(current_target)
          } else {
            var current_target = $(e.target);
            current_target.css('border-color', '#e52e04');
            type_queue.push(current_target)

          }
          current_type = $(e.target).html();
          break;
      }
      if (current_size && current_type != null) {
        this.setState({
          price: "￥1元"
        })
      } else {
        this.setState({
          price: "￥0元"
        })
      }
    },
    render: function() {
      var o = this;
      var size_items = this.props.size_items.map(function(elem) {
        return (
          <div data-id={elem.id} data-type="size"  onTouchTap={o.handleTap} >{elem.name}</div>
        )
      })
      var type_items = this.props.type_items.map(function(elem) {
        return (
          <div data-id={elem.id} data-type="type"  onTouchTap={o.handleTap} >{elem.name}</div>
        )
      })

      return (
        <div className={"btcc_item_wrapper"}>

         <section className="introduce">
            <span className="type_title">摆台版画</span>
         </section>

         <section className="photo_wrapper">
             <img src="" alt=""/> 
         </section>
     
         <section className="size_wrapper">
           <span className="size_title">{this.props.size_title}</span>
           <div className="size_items_wrapper">{size_items}</div>
         </section>
         <section className="type_wrapper">
           <span className="type_title">{this.props.type_title}</span>
           <div className="type_items_wrapper">{type_items}</div>
         </section>
         <section className="price_wrapper">
             <div className="price_items_wrapper">
                 <span>产品价格:</span>
                 <span>{this.state.price}</span>
             </div> 
         </section>
      </div>
      );
    }


  })
  // 

export default Btcc;