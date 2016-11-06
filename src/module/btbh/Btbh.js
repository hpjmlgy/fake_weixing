import React from 'react';
import Top_module from '../sszz/Top_module'
import Middle_module from './Middle_module'
import Bottom_module from '../sszz/Bottom_module'
var $ = require('jquery');
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

//全局变量


var Btbh = React.createClass({

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
          <Bottom_module desc={[{content:"5-7天制作周期"},{content:"工序复杂好产品值得等待"}]}/>
           <button className="sszz_go_produce">开始制作</button>
        </section>

      )
    }
  })
  // 

export default Btbh;

// <Middle_module/>
// <Bottom_module desc={[{content:"5-7天制作周期"},{content:"工序复杂好产品值得等待"}]}/>
// <button className="sszz_go_produce">开始制作</button>