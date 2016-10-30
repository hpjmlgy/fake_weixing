import React from 'react';
var $ = require('jquery');
var Swipeable = require('react-swipeable')


var Mb_nav = React.createClass({
  getInitialState: function() {
    return {
      mb_current: 1
    };
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
         <div className="progress"><p>{this.state.mb_current}</p><p>/{num_items}</p></div>
         <p className="title">{this.props.title}</p>
         <div className={"mb_control_wrapper"}>
             <div className="whole" style={style_whole} ref="whole_nav">{video_items}</div>
         </div>
         <p className="desc">{this.props.desc}</p>
         <button className="start_build"><p>开始</p><p>制作</p></button>
      </div>
    );
  }


})


export default Mb_nav;