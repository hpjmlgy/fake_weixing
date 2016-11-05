import React from 'react';
var $ = require('jquery');
import * as allModule from './Type_middle_module.js'

// require("babel-core").transform("code", options);
//全局变量

// var x = function() {
//   return (<Type1_middle_module desc={"A3/24页： 39元"} desc1={"A3/24页： 39元"}/>)
// }

// var queue = []
// queue.push(x)
// var test = queue.map(function(elem) {
//   return (elem());
// })

var Middle_module = React.createClass({

  componentDidMount: function() {

  },
  handleTap: function(e) {

  },
  render: function() {
    var o = this;

    return (
      <section className="Middle_module_wrapper">
          <allModule.Type1_middle_module desc={"A3/24页： 39元"} desc1={"A3/24页： 39元"}/>
          <allModule.Type2_middle_module desc={"A3/24页： 39元"} desc1={"A3/24页： 39元"}/>
          <allModule.Type3_middle_module desc={"A3/24页： 39元"} desc1={"A3/24页： 39元"}/>  
        </section>
    )
  }
})

export default Middle_module;
//