import React from 'react';
var $ = require('jquery');
// import Cropper from 'react-cropper';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var Xzcp = React.createClass({
  getInitialState: function() {
    return null;
  },
  componentDidMount: function() {

  },
  handleChange: function(e) {

  },
  render: function() {
    var o = this;
    var products = this.props.products.map(function(elem) {
      return (
        <div className="item_wrapper">
         <section className="item_top_wrapper">
              <div></div>
              <div className="name"><span>{elem.name}</span></div>
              <div className="desc">{elem.desc}</div>
              <div></div>       
         </section>
         <section className="item_middle_wrapper">
 
         </section>
         <section className="item_bottom_wrapper">

         </section>
        </div>
      )
    });

    return (
      <div className="items_all_wrapper">
      {products}
      </div>
    )
  }



})


export default Xzcp;