import React from 'react';


var Top_ad3 = React.createClass({
  render: function() {
    return (
      <div className={"mid_container"}>
        <div className={"mid_content_wrapper"}>
            <div>
              <p>{this.props.desc}</p>
              <p>{this.props.desc1}</p>
            </div>
        </div>
    </div>
    )
  }
});

export default Top_ad3;