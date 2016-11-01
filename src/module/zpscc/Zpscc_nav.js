import React from 'react';



var $ = require('jquery');
var Swipeable = require('react-swipeable')
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

//全局变量
var current_size = null;
var current_paper_num = null;
var paper_queue = [];
var size_queue = [];

var Zpscc_nav = React.createClass({

    componentDidMount: function() {

    },

    getInitialState: function() {
      return {
        mb_current: 1,
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
        case "paper":
          if (paper_queue.length > 0) {
            var last_target = paper_queue.pop();
            last_target.css('border-color', 'grey');
            var current_target = $(e.target);
            current_target.css('border-color', '#e52e04');
            paper_queue.push(current_target)
          } else {
            var current_target = $(e.target);
            current_target.css('border-color', '#e52e04');
            paper_queue.push(current_target)

          }
          current_paper_num = $(e.target).html();
          break;
      }
      if (current_size && current_paper_num != null) {
        this.setState({
          price: "￥1元"
        })
      } else {
        this.setState({
          price: "￥0元"
        })
      }


    },
    handleLeftSwipe: function(e) {
      e.preventDefault();
      var elem = $(e.currentTarget);
      var current_item = elem.attr('data-id');
      var num_item = elem.attr('data-num');
      if (current_item < num_item) {
        var mv_px = parseInt($(this.refs.whole_nav).css('margin-left').slice(0, -2)) - 590 + "px"
        $(this.refs.whole_nav).css('margin-left', mv_px)
        this.setState({
          mb_current: this.state.mb_current + 1
        });
      }

    },
    handleRightSwipe: function(e) {
      e.preventDefault();
      var elem = $(e.currentTarget);
      var current_item = elem.attr('data-id');
      var num_item = elem.attr('data-num');
      if (current_item > 1) {
        var mv_px = parseInt($(this.refs.whole_nav).css('margin-left').slice(0, -2)) + 590 + "px"
        $(this.refs.whole_nav).css('margin-left', mv_px)
        this.setState({
          mb_current: this.state.mb_current - 1
        });
      }
    },
    render: function() {
      var o = this;
      var num_items = this.props.mb.length;
      var width_whole = num_items * 570 + (num_items - 1) * 20 + 80 * 2;
      var style_whole = {
        width: width_whole + "px"
      };
      var size_items = this.props.size_items.map(function(elem) {
        return (
          <div data-id={elem.id} data-type="size"  onTouchTap={o.handleTap} >{elem.name}</div>
        )
      })
      var paper_num_items = this.props.paper_num_items.map(function(elem) {
        return (
          <div data-id={elem.id} data-type="paper"  onTouchTap={o.handleTap} >{elem.name}</div>
        )
      })

      var video_items = this.props.mb.map(function(elem) {
        var item_style = null
        if (elem.id == 1) {
          item_style = {
            left: 80 + "px"
          }
        } else if (elem.id < num_items) {
          item_style = {
            left: (80 + (570 + 20) * (elem.id - 1)) + "px"
          }

        } else if (elem.id == num_items) {
          item_style = {
            right: 80 + "px"
          }
        }
        return (
          <Swipeable  style={item_style} onSwipedLeft={o.handleLeftSwipe} onSwipedRight={o.handleRightSwipe} delta={80} stopPropagation={true} className="mb_item"  data-id={elem.id} data-num={num_items} ref={"mb_item"+elem.id} ><img src="" alt=""/></Swipeable>
        )
      });
      return (
        <div className={"mb_item_wrapper"}>
         <section className="introduce">
            <span className="type_title">产品规格</span>
            <button className="next">继续</button>
         </section>
         <section className="nav_wrapper">
             <div className="title">{this.props.title}</div>
             <div className={"mb_control_wrapper"}>
                  <div className="whole" style={style_whole} ref="whole_nav">{video_items}</div>
           </div>
         </section>
     
         <section className="size_wrapper">
           <span className="size_title">{this.props.size_title}</span>
           <div className="size_items_wrapper">{size_items}</div>
         </section>
         <section className="paper_num_wrapper">
           <span className="paper_num_title">{this.props.paper_num_title}</span>
           <div className="paper_num_items_wrapper">{paper_num_items}</div>
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

export default Zpscc_nav;