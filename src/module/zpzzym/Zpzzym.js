import React from 'react';



var $ = require('jquery');
var Swipeable = require('react-swipeable')
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

//全局变量


var Zpzzym = React.createClass({

  componentDidMount: function() {

  },

  getInitialState: function() {
    return {
      mb_current: 1
    };
  },
  handleTap: function(e) {
    e.stopPropagation()
    e.preventDefault()
      // console.log(e.target);
      // $(this.refs.img_uploader).click();
    $('.edit_zone').empty()
    $(e.target).parent().clone().appendTo('.edit_zone')
      // $('#page_nav').tmpl(page_data).appendTo('body');
      // console.log(tmpl);

  },
  handleLeftSwipe: function(e) {
    e.preventDefault();
    var elem = $(e.currentTarget);
    var current_item = elem.attr('data-id');
    var num_item = elem.attr('data-num');
    if (current_item < num_item) {
      var mv_px = parseInt($(this.refs.whole_nav).css('margin-left').slice(0, -2)) - (20 + 205) + "px"
      $(this.refs.whole_nav).css('margin-left', mv_px)
      this.setState({
        mb_current: this.state.mb_current + 1
      });
    }
  },
  handleRightSwipe: function(e) {
    e.preventDefault();
    var elem = $(e.currentTarget);
    var current_item = elem.attr('data-id');
    var num_item = elem.attr('data-num');
    if (current_item > 1) {
      var mv_px = parseInt($(this.refs.whole_nav).css('margin-left').slice(0, -2)) + (20 + 205) + "px"
      $(this.refs.whole_nav).css('margin-left', mv_px)
      this.setState({
        mb_current: this.state.mb_current - 1
      });
    }
  },
  handleImg: function(e) {
    e.preventDefault()
    var target = e.target
      // console.log(target);
    var files = target.files
    var count = this.props.multiple ? files.length : 1
    var i
    for (i = 0; i < count; i++) {
      files[i].thumb = URL.createObjectURL(files[i])
      console.log(files[i]);
    }

  },
  render: function() {
    var o = this;
    var num_items = this.props.mb.length;
    var width_whole = num_items * 205 + (num_items - 1) * 20 + 80;
    var style_whole = {
      width: width_whole + "px"
    };
    var video_items = this.props.mb.map(function(elem) {
      var item_style = null
      var paper_num = "第" + elem.id + "页"
      if (elem.id == 1) {
        item_style = {
          left: 20 + "px"
        }
      } else if (elem.id <= num_items) {
        item_style = {
          left: (40 + (205 + 20) * (elem.id - 1)) + "px"
        }

      }

      return (
        <Swipeable  style={item_style} onSwipedLeft={o.handleLeftSwipe} onSwipedRight={o.handleRightSwipe} delta={80} stopPropagation={true} className="mb_item"  data-id={elem.id} data-num={num_items} ref={"mb_item"+elem.id} >
            <img onTouchTap={o.handleTap} data-id={elem.id} src="" alt="" />
            <span>{paper_num}</span>
        </Swipeable>
      )
    });
    return (
      <div className={"mb_item_wrapper"}>
         <section className="introduce">
              <span className="title">预览</span>
              <button className="change_template">更换模板</button>
         </section>
         <section className="nav_wrapper">
             <div className={"mb_control_wrapper"}>
                  <div className="whole" style={style_whole} ref="whole_nav">{video_items}</div>
           </div>
           <input className="img_uploader" type="file"  accept="image/*" ref="img_uploader" onChange={o.handleImg}/>
         </section>
         <section className="edtior_wrapper">
              <span className="tips">"需要xx张图片！上传后点击图片可编辑"</span>
              <div className="edit_zone"></div>
              <span className="current_num">第xx页</span>
              <div className="count_wrapper">
                    <div className="up"></div>
                    <input type="text" className="buy_count"/>
                    <span>本</span>
                    <div className="down"></div>
              </div>
              <button className="again">再做一本</button>
         </section>
         <section className="deliver_wrapper">
             <div className="price_wrapper">
                <span>产品价格:</span>
                <span className="price" >79元</span>
             </div>
             <button className="save">保存制作</button>
             <button className="deliver">提交订单</button>

         </section>
      </div>
    );
  }


})

export default Zpzzym;