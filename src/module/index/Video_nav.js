import React from 'react';


var Video_nav = React.createClass({
  render: function() {
    var video_items = this.props.video.map(function(elem) {
      return (
        <div></div>
      )
    })
    return (
      <div className={"video_item_wrapper"}>
         <p>{this.props.title}</p>
         {video_items}
      </div>
    )
  }
});

export default Video_nav;