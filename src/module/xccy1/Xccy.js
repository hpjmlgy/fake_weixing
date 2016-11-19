import React from 'react';
import Top_module from './Top_module'
import Middle_module from './Middle_module'
import Bottom_module from '../sszz/Bottom_module'
var $ = require('jquery');
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

//全局变量


var Xccy = React.createClass({

  componentDidMount: function() {

  },
  handleTap: function(e) {

  },
  render: function() {
    var o = this;
    return (
      <section>
          <Top_module/>
          <Middle_module/>
          <Bottom_module desc={[{content:"5-7天制作周期"},{content:"工序复杂好产品值得等待"}]}/>
           <button className="sszz_go_produce">开始制作</button>
        </section>

    )
  }
})


export default Xccy;