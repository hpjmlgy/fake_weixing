import React from 'react';
var $ = require('jquery');
import * as allModule from './Btbh_middle_module.js'


var Middle_module = React.createClass({

  componentDidMount: function() {

  },
  handleTap: function(e) {

  },
  render: function() {
    var o = this;

    return (
      <section className="Middle_module_wrapper">
           <allModule.Btbh_type1_middle_module  />
             <allModule.Btbh_type2_middle_module  />
             <allModule.Btbh_type3_middle_module  />
              <allModule.Btbh_type4_middle_module  />

      </section>
    )
  }
})

export default Middle_module;

// <allModule.Xccy_type1_middle_module  />
// <allModule.Xccy_type2_middle_module  />
// <allModule.Xccy_type3_middle_module  />
// <allModule.Xccy_type4_middle_module  />
// <allModule.Xccy_type5_middle_module  />