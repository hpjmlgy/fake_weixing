import React from 'react';
import Address_card from './Address_card'
import ReactDOM from 'react-dom'
var $ = require('jquery');
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


var Dzgl = React.createClass({
  getInitialState: function() {
    return {
      null
    }
  },
  add_address: function(e) {
    if (this.props.data.length == 0) {

    } else {
      $('.address_wrapper').css('display', 'none')
      $('.action_wrapper').css('display', 'none')

    }

  },
  update_address: function(e) {

    var section_string = "<section " + "class=123" + "></section>"
    if (this.props.data.length == 0) {
      console.log("1");
      $('#empty_address_section').append(section_string)
      var target_container = $('.123')[$('.123').length - 1]
      var xx = <Address_card data={{name:"女汉子",phone:"15366985964",address_info:"中国 北京 朝阳区 水晶鞋xXXXXXX"}}/>
      ReactDOM.render(
        xx,
        target_container
      );
      //update remote database
    } else {
      $('#full_address_section').append(section_string)
      var target_container = $('.123')[$('.123').length - 1]
      var xx = <Address_card data={{name:"女汉子",phone:"15366985964",address_info:"中国 北京 朝阳区 水晶鞋xXXXXXX"}}/>
      ReactDOM.render(
        xx,
        target_container
      );
      //update remote database

    }

  },
  render: function() {
    var o = this;
    var dz_num = this.props.data.length;
    if (dz_num == 0) {
      //返回空界面
      return (
        <section id="empty_address_section">
           <section className="add_address_wrapper">
              <span className="title">添加收获地址</span>
              <button className="add_address" onTouchTap={o.add_address} ></button>
           </section>
        </section>
      )

    } else {

      var address = this.props.data.map(function(elem) {
        return (

          <Address_card data={{name:elem.name,phone:elem.phone,address_info:elem.address_info}}/>

        )

      })
      return (
        <section id="full_address_section">
           <section className="add_address_wrapper">
              <span className="title">添加收获地址</span>
              <button className="add_address" onTouchTap={o.add_address} ></button>
           </section>
           {address}
        </section>

      )
    }



  }
});

export default Dzgl;