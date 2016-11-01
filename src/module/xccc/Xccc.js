import React from 'react';
var $ = require('jquery');
// var Swipeable = require('react-swipeable')
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

//全局变量
var item_queue = [];

var Xccc = React.createClass({

    componentDidMount: function() {

    },
    handleTap: function(e) {
      var last_target = item_queue.pop();
      console.log(last_target);
      if (last_target != undefined) {
        last_target.css('border-color', 'grey');
      };
      var current_target = $(e.target);
      console.log(current_target);
      current_target.css('border-color', '#e52e04');
      item_queue.push(current_target)
    },
    render: function() {
      var o = this;
      var size_tra_items = this.props.size_tra_items.map(function(elem) {
        return (
          <div data-id={elem.id} data-type="size-tra"  onTouchTap={o.handleTap} >{elem.name}</div>
        )
      })
      var size_big_items = this.props.size_big_items.map(function(elem) {
        return (
          <div data-id={elem.id} data-type="size-big"  onTouchTap={o.handleTap} >{elem.name}</div>
        )
      })
      var size_rec_items = this.props.size_rec_items.map(function(elem) {
        return (
          <div data-id={elem.id} data-type="size-big"  onTouchTap={o.handleTap} >{elem.name}</div>
        )
      })

      return (
        <div className={"xc_item_wrapper"}>
         <section className="action_wrapper">
              <button className="single_button">单张</button>
              <span className="choose_title">{this.props.title}</span>
              <button className="all_button">全部</button>
         </section>
         <section className="photo_wrapper">
             <img src="" alt=""/>
         </section>
         <section className="size_tra_wrapper">
              <span className="size_tra_title">传统</span>
              <div className="size_tra_items_wrapper">{size_tra_items}</div>
         </section>
         <section className="size_big_wrapper">
              <span className="size_big_title">大尺寸</span>
              <div className="size_big_items_wrapper">{size_big_items}</div>
         </section>
        <section className="size_rec_wrapper">
              <span className="size_rec_title">方尺寸</span>
              <div className="size_rec_items_wrapper">{size_rec_items}</div>
         </section>
      </div>
      );
    }


  })
  // 

export default Xccc;