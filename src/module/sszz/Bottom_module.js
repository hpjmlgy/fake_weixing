import React from 'react';
var $ = require('jquery');


//全局变量


var Bottom_module = React.createClass({

    componentDidMount: function() {

    },
    handleTap: function(e) {

    },
    render: function() {
      var o = this;
    var desc = this.props.desc.map(function(elem) {
        return (
          <span>{elem.content}</span>
        )
      })
      return (
        <section className="bottom_module_wrapper">
          <section className="middle_module">
                <div className="icon_img"></div>
             {desc}      
          </section>
           
        </section>
      )
    }
  })
  // 

export default Bottom_module;