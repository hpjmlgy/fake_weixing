import React from 'react';
var Swipeable = require('react-swipeable')


var Video_nav = React.createClass({
  handleLeftSwipe: function(e) {
    e.preventDefault();
    var elem = $(e.currentTarget);
    var current_item = elem.attr('data-id');
    var num_item = elem.attr('data-num');
    if (current_item < num_item) {
      var mv_px = parseInt($(this.refs.whole_nav).css('margin-left').slice(0, -2)) - 600 + "px"
      $(this.refs.whole_nav).css('margin-left', mv_px)

    }

  },
  handleRightSwipe: function(e) {
    e.preventDefault();
    var elem = $(e.currentTarget);
    var current_item = elem.attr('data-id');
    var num_item = elem.attr('data-num');
    if (current_item > 1) {
      var mv_px = parseInt($(this.refs.whole_nav).css('margin-left').slice(0, -2)) + 600 + "px"
      $(this.refs.whole_nav).css('margin-left', mv_px)

    }
  },
  render: function() {
    var o = this
    var num_items = this.props.video.length;
    var width_whole = num_items * 560 + (num_items - 1) * 40 + 60 * 2;

    var style_whole = {
      width: width_whole + "px"
    };

    var video_items = this.props.video.map(function(elem) {
      var item_style = null
      if (elem.id == 1) {
        item_style = {
          left: 60 + "px"
        }
      } else if (elem.id < num_items) {
        item_style = {
          left: (60 + (560 + 40) * (elem.id - 1)) + "px"
        }

      } else if (elem.id == num_items) {
        item_style = {
          right: 60 + "px"
        }
      }

      return (
        <Swipeable  style={item_style} onSwipedLeft={o.handleLeftSwipe} onSwipedRight={o.handleRightSwipe} delta={80} stopPropagation={true} className="mb_item"  data-id={elem.id} data-num={num_items} ref={"mb_item"+elem.id} >
        <img src="" alt=""/>
        </Swipeable>
      )
    });

    return (
      <div className={"video_item_wrapper"}>
         <p>{this.props.title}</p>
         <div className={"video_control_wrapper"}>
         <div className="whole" style={style_whole} ref="whole_nav">{video_items}</div>
         </div>
      </div>
    )
  }
});

export default Video_nav;