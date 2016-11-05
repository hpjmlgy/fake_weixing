import React from 'react';
var $ = require('jquery');


//全局变量


var Top_module = React.createClass({

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
        <section className="top_module_wrapper">
             <div className="big_img"></div>
             {desc}
        </section>
      )
    }
  })
  // 

export default Top_module;