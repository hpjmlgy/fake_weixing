import React from 'react';
var $ = require('jquery');


//全局变量


var Type1_middle_module = React.createClass({

  componentDidMount: function() {

  },
  handleTap: function(e) {

  },
  render: function() {
    var o = this;

    return (
      <section className="Type1_middle_module_wrapper">
          <section className="left_wrapper">
                <img src="" alt=""/>
                <span>{this.props.desc}</span>
                <span>{this.props.desc1}</span>
          </section>
          <section className="right_wrapper">
                 <img src="" alt=""/>
                 <img src="" alt=""/>
          </section>
        </section>
    )
  }
})

var Type2_middle_module = React.createClass({

  componentDidMount: function() {

  },
  handleTap: function(e) {

  },
  render: function() {
    var o = this;

    return (
      <section className="Type2_middle_module_wrapper">
          <section className="left_wrapper">
                <img src="" alt=""/>
          </section>
          <section className="right_wrapper">
                <img src="" alt=""/>
                <span>{this.props.desc}</span>
                <span>{this.props.desc1}</span>
          </section>
        </section>
    )
  }
})


var Type3_middle_module = React.createClass({

  componentDidMount: function() {

  },
  handleTap: function(e) {

  },
  render: function() {
    var o = this;

    return (
      <section className="Type3_middle_module_wrapper">
          <section className="left_wrapper">
                <img src="" alt=""/>
                <span>{this.props.desc}</span>
                <span>{this.props.desc1}</span>
          </section>
          <section className="right_wrapper">
                <img src="" alt=""/>
            
          </section>
           <section className="down_left_wrapper">
                <img src="" alt=""/>
               
          </section>
          <section className="down_right_wrapper">
                <img src="" alt=""/>
                 <span>{this.props.desc}</span>
                <span>{this.props.desc1}</span>
            
          </section>
        </section>
    )
  }
})

var Type4_middle_module = React.createClass({

  componentDidMount: function() {

  },
  handleTap: function(e) {

  },
  render: function() {
    var o = this;

    return (
      <section className="Type4_middle_module_wrapper">
          <section className="top_wrapper">
                <img src="" alt=""/>
                <span>{this.props.desc}</span>
          </section>
          <section className="bottom_wrapper">
                <img src="" alt=""/>
          </section>
      
        </section>
    )
  }
})

var Type5_middle_module = React.createClass({

  componentDidMount: function() {

  },
  handleTap: function(e) {

  },
  render: function() {
    var o = this;

    return (
      <section className="Type5_middle_module_wrapper">
          <section className="left_wrapper">
                <img src="" alt=""/>
                <span>{this.props.desc}</span>
          </section>
          <section className="right_wrapper">
                <img src="" alt=""/>
          </section>
      
        </section>
    )
  }
})



export {
  Type1_middle_module,
  Type2_middle_module,
  Type3_middle_module,
  Type4_middle_module,
  Type5_middle_module
};