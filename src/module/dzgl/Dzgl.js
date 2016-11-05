import React from 'react';
import Address_card from './Address_card'
import Edit_info from './Edit_info'
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
      //空地址时，显示编辑界面
      switch ($('.form_wrapper').css("display")) {
        case "none":
          $('.form_wrapper').css("display", "block")
          break
        case "block":
          $('.form_wrapper').css("display", "none")
          break
      }

    } else {


      switch ($('.form_wrapper').css("display")) {
        case "none":
          $('.address_wrapper').css('display', 'none')
          $('.action_wrapper').css('display', 'none')
          $('.form_wrapper').css("display", "block")
          break
        case "block":
          $('.form_wrapper').css("display", "none")
          $('.address_wrapper').css('display', 'block')
          $('.action_wrapper').css('display', 'block')
          break
      }

    }

  },
  update_address: function(e) {
    //提交地址数据时更新DOM逻辑
    var section_string = "<section " + "class=123" + "></section>"
    var form = $('.form_wrapper')
    if (this.props.data.length == 0) {

      $('.form_wrapper').remove()
      $('#empty_address_section').append(section_string)
      var target_container = $('.123')[$('.123').length - 1]
      var address_card = <Address_card data={{name:"女汉子",phone:"15366985964",address_info:"中国 北京 朝阳区 水晶鞋xXXXXXX"}}/>
      ReactDOM.render(
        address_card,
        target_container
      );

      $('#empty_address_section').append(form)
        //update remote database
    } else {
      $('.form_wrapper').remove()
      $('#full_address_section').append(section_string)
      var target_container = $('.123')[$('.123').length - 1]
      var address_card = <Address_card data={{name:"女汉子",phone:"15366985964",address_info:"中国 北京 朝阳区 水晶鞋xXXXXXX"}}/>
      ReactDOM.render(
        address_card,
        target_container
      );
      $('#full_address_section').append(form)
        //update remote database

    }

  },
  render: function() {
    var o = this;
    var dz_num = this.props.data.length;
    var input_info_module_style = {
      display: "none"
    };
    if (dz_num == 0) {
      //返回空界面
      return (
        <section id="empty_address_section">
           <section className="add_address_wrapper">
              <span className="title">添加收获地址</span>
              <button className="add_address" onTouchTap={o.add_address} ></button>
           </section>
           <Edit_info/>
         
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
           <Edit_info/>
        </section>

      )
    }



  }
});

export default Dzgl;