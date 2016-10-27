import React from 'react';


var Nav_mid = React.createClass({
  render: function() {
    var nav_items = this.props.data.map(function(elem) {
      return (
        <a>
            <div>
               <p>{elem.chn}</p>
               <p>{elem.eng}</p>
            </div>
        </a>
      )
    })
    return (
      <div className={"nav_item_wrapper"}>
         {nav_items}
      </div>
    )
  }
});

export default Nav_mid;