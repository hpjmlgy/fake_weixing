import React from 'react';
var $ = require('jquery');
import * as allModule from './Btbh_middle_module.js'

var queue = []
for (var p in allModule) {
  queue.push(p)
}


var Middle_module = React.createClass({

  componentDidMount: function() {

  },
  handleTap: function(e) {

  },
  render: function() {
    var o = this;

    return (
      <section className="Middle_module_wrapper">
    
             <allModule.Btbh_type2_middle_module  />
             <allModule.Btbh_type3_middle_module  />
               <allModule.Btbh_type4_middle_module  />
            {React.createElement(allModule[queue.pop()])}


      </section>
    )
  }
})

export default Middle_module;

//        <allModule.Btbh_type1_middle_module  />
//            <allModule.Btbh_type5_middle_module  />