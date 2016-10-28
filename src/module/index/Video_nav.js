import React from 'react';


var Video_nav = React.createClass({
  render: function() {
    var num_items = this.props.video.length;
    var video_items = this.props.video.map(function(elem) {
      return (
        <div className="video_item" data-id={elem.id} data-num={num_items}></div>
      )
    })
    return (
      <div className={"video_item_wrapper"}>
         <p>{this.props.title}</p>
         <div className={"video_control_wrapper"}>
             <div className="whole">{video_items}</div>
         </div>
      </div>
    )
  }
});

export default Video_nav;