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

      return (
        <section className="top_module_wrapper">
             <div className="big_img"></div>
             <section className="desc_wrapper">
                 <span>我们可以满足</span><span>任意尺寸</span><span>我们可以满足</span>
             </section>  
        </section>
      )
    }
  })
  // 

export default Top_module;