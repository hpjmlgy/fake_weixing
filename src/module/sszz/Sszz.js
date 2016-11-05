import React from 'react';
import Top_module from './Top_module'
import Middle_module from './Middle_module'
var $ = require('jquery');
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

//全局变量


var Sszz = React.createClass({

    componentDidMount: function() {

    },
    handleTap: function(e) {

    },
    render: function() {
      var o = this;
      return (
        <section>
          <Top_module desc={[{content:"简述宝宝的成张故事、定格家庭生活旅行精彩瞬间"},{content:"简述生活旅行精彩瞬间"},{content:"简述宝宝的成张故事、定格家庭生活旅行精彩瞬间"},{content:"简述宝宝的成张故事、定格家庭生活旅行精彩瞬间"}]}/>       
          <Middle_module/>
        </section>

      )
    }
  })
  // 

export default Sszz;