import React from 'react';
var $ = require('jquery');
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


var Gywm = React.createClass({
  getInitialState: function() {
    return {
      null
    }
  },
  render: function() {
    var o = this;

    return (
      <section>
              <img className="logo" src="" alt=""/>
              <span className="introduce">关于我们文字介绍</span>
      </section>
    )


  }
});

export default Gywm;