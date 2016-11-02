import React from 'react';
var $ = require('jquery');
// var Swipeable = require('react-swipeable')
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

//全局变量

var Wlxq = React.createClass({

  componentDidMount: function() {

  },
  handleTap: function(e) {

  },
  render: function() {
    var o = this;

    var wl_info_items = this.props.wl_items.map(function(elem) {
      return (
      <div className="elem_wrapper">
              <div className="info">{elem.info}</div>
              <div className="time">{elem.time}</div>
        </div>

      )
    })



    return (
      <div className={"wlxq_module_wrapper"}>
         <section className="Info_wrapper">
            <img src="" alt=""/>
            <div className="info_detail_wrapper">
                 <span>物流状态：制作中</span>
                 <span>快递公司：中通快递</span>
                 <span>快递单号：1234567892316</span>
                 <span>官方电话：010-95512123</span>                      
            </div>
               
         </section>
         <section className="wl_detail_wrapper">
              <span className="wl_title">本数据由中通提供</span>
              <div  className="wl_items_wrapper">{wl_info_items}</div>
         </section>
      </div>
    );
  }


})


export default Wlxq;