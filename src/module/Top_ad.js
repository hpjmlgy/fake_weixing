import React from 'react';


var Top_ad = React.createClass({
  render: function() {
    return (
      <div className={"ad_container"}>
    <div className={"content_wrapper"}>
        <div>
            <p>{this.props.desc}</p>
            <div className={"divider"}></div>
            <p>{this.props.desc1}</p>
        </div>
    </div>
    <a href="#"></a>
    </div>
    )
  }
});

export default Top_ad;