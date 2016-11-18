import React from 'react';
var $ = require('jquery');
import * as allModule from './Ykjz_middle_module.js'


var Middle_module = React.createClass({

  componentDidMount: function() {

  },
  handleTap: function(e) {

  },
  render: function() {
    var o = this;

    return (
      <section className="Middle_module_wrapper">
          <allModule.Ykjz_type1_middle_module  />
          <allModule.Ykjz_type2_middle_module  />
          <allModule.Ykjz_type3_middle_module  />
          <allModule.Ykjz_type4_middle_module  />
          <allModule.Ykjz_type5_middle_module  />
      </section>
    )
  }
})

export default Middle_module;
//