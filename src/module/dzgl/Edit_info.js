import React from 'react';
var $ = require('jquery');
import ReactDOM from 'react-dom'



var Edit_info = React.createClass({

  handleTap: function(e) {

  },
  componentDidMount: function() {
    $('.form_wrapper').css("display", "none")
  },
  render: function() {
    var o = this;
    return (
      <section className="form_wrapper">
        <section className="receiver_wrapper">
              <span>收货人</span>
              <input className="input_receiver" type="text"/>
        </section>
        <section className="phone_wrapper">
              <span>手  机</span>
              <input className="input_phone" type="text"/>
        </section>
        <section className="province_wrapper">
              <span>省  份</span>
              <input className="input_province_" type="text"/>
        </section>
        <section className="city_wrapper">
              <span>城  市</span>
              <input className="input_city" type="text"/>
        </section>
        <section className="zone_wrapper">
              <span>地  区</span>
              <input className="input_zone" type="text"/>
        </section>
        <section className="detail_address_wrapper">
              <span>详细地址</span>
              <input className="input_detail_address" type="text"/>
        </section>
        <section className="id_wrapper">
              <span>身份证号</span>
              <input className="input_id" type="text"/>
        </section>
        <section>
          <button className="deliver">提交</button>
       
        </section>
     </section>
    )
  }
});

export default Edit_info;

// <button className="return">返回</button>