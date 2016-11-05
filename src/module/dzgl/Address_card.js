import React from 'react';
var $ = require('jquery');
import ReactDOM from 'react-dom'



var Address_card = React.createClass({


  handleTap: function(e) {
    $(e.target).parent().parent().remove()
      //update remoteDatabase
  },

  render: function() {
    var o = this;

    return (
      <section>
               <section className="address_wrapper">
                   <section className="address_top_wrapper">
                          <span>{this.props.data.name}</span>
                          <span>{this.props.data.phone}</span>
                   </section>
                   <section className="address_bottom_wrapper">
                      <span>{this.props.data.address_info}</span>
                   </section>
               </section>
               <section className="action_wrapper">
                 <button className="set_default"></button>
                 <span>设为默认地址</span>
                 <div className="delete_icon" onTouchTap={o.handleTap}></div>
               </section>
      </section>
    )

  }
});

export default Address_card;