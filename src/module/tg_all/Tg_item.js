import React from 'react';
var $ = require('jquery');
// import Cropper from 'react-cropper';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var Tg_item = React.createClass({

  getInitialState: function() {
    return null;
  },
  componentDidMount: function() {

  },
  handleChange: function(e) {

  },
  render: function() {
    var o = this;
    var tg_items = this.props.items.map(function(elem) {
      return (

        <div>
         <section className="item_top_wrapper">
              <div className="icon"></div>
              <div className="info_wrapper">
                 <p>投稿人:{elem.name}</p>
                 <p>票  数：{elem.score}票</p>
              </div>         
         </section>
         <section className="item_middle_wrapper">
              <img className="photo" src="" alt=""/>
              <p className="desc">{elem.desc}</p>
         </section>
         <section className="item_bottom_wrapper">
            <button className="admire">{elem.admire}</button>
            <button className="invite_friend">邀请好友投票</button>
         </section>
        </div>
      )

    });

    return (
      <div>
    {
      tg_items
    }
      </div>
    )
  }



})


export default Tg_item;