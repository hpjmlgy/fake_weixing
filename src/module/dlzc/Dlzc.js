import React from 'react';
import Top_module from './Top_module'
import Bottom_module from './Bottom_module'

var $ = require('jquery');
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


var Dlzc = React.createClass({
  getInitialState: function() {
    return {
      null
    }
  },
  componentDidMount: function(e) {
    // $('.edit_mobile_wrapper').css("display", "none")
  },

  render: function() {
    var o = this;
    return (
      <section className="dlzc_module_wrapper">
          <Top_module/>
          <Bottom_module/>
      </section>
    )


  }
});

export default Dlzc;