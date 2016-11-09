import React from 'react';
import ReactDOM from 'react-dom'
var $ = require('jquery');
var Swipeable = require('react-swipeable')
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

//全局变量
var current_left_imgs = []
var current_right_imgs = []
var current_big_page = []

var Zpzzym = React.createClass({

  componentDidMount: function() {

  },

  getInitialState: function() {
    return {
      mb_current: 1
    };
  },
  handleTap: function(e) {

    if ($(e.target).attr('class') == 'left_wrapper' || $(e.target).attr('class') == 'right_wrapper') {
      console.log($(e.target).parent().data('id')); //大页ID

      $('#left_wrapper').empty()
      $('#right_wrapper').empty()
      var scale = $(e.target).parent().data('scale')
        //返回左侧的贴图
      var imgs_in_onePage_left = current_left_imgs[$(e.target).parent().data('id') - 1].img.map(function(elem) {
          var top = elem.top * scale
          var left = elem.left * scale
          var width = elem.width * scale
          var height = elem.height * scale
          var small_Page_ID = current_left_imgs[$(e.target).parent().data('id') - 1].id + "_" + elem.id
          var img_style = {
            position: 'absolute',
            'top': top,
            'left': left,
            'width': width,
            'height': height,
            // 'zIndex': 100
          }
          return (<img style={img_style} className={small_Page_ID}/>)

        })
        //返回右侧贴图
      var imgs_in_onePage_right = current_right_imgs[$(e.target).parent().data('id') - 1].img.map(function(elem) {
        var top = elem.top * scale
        var left = elem.left * scale
        var width = elem.width * scale
        var height = elem.height * scale
        var small_Page_ID = current_right_imgs[$(e.target).parent().data('id') - 1].id + "_" + elem.id
        var img_style = {
          position: 'absolute',
          'top': top,
          'left': left,
          'width': width,
          'height': height
        }
        return (<img style={img_style} src='' className={small_Page_ID}/>)
          // /public/img/test_logo.jpg
      })

      var Left = React.createClass({
        render: function() {
          return (
            <div>{imgs_in_onePage_left}</div>
          )
        }
      })
      var Right = React.createClass({
        render: function() {
          return (
            <div>{imgs_in_onePage_right}</div>
          )
        }
      })
      ReactDOM.render(
        <Left/>,
        document.getElementById('left_wrapper')
      );
      ReactDOM.render(
        <Right/>,
        document.getElementById('right_wrapper')
      );

    }

    // $('#page_nav').tmpl(page_data).appendTo('body');
    // console.log(tmpl);

  },
  handleLeftSwipe: function(e) {
    e.preventDefault();
    var elem = $(e.currentTarget);
    var current_item = elem.attr('data-id');
    var num_item = elem.attr('data-num');
    if (current_item < num_item) {
      var mv_px = parseInt($(this.refs.whole_nav).css('margin-left').slice(0, -2)) - (40 + 410) + "px"
      $(this.refs.whole_nav).css('margin-left', mv_px)
      this.setState({
        mb_current: this.state.mb_current + 1
      });
    }
  },
  handleRightSwipe: function(e) {
    e.preventDefault();
    var elem = $(e.currentTarget);
    var current_item = elem.attr('data-id'); //大页编码
    var num_item = elem.attr('data-num'); //大页数量
    if (current_item > 1) {
      var mv_px = parseInt($(this.refs.whole_nav).css('margin-left').slice(0, -2)) + (40 + 410) + "px"
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
        // console.log(files[i]);
    }

  },
  render: function() {
    var o = this;
    var target_height = this.props.mb.target_height;

    var scale = parseFloat(target_height / this.props.mb.original_height).toFixed(5)

    var num_items = this.props.mb.imgs.length;
    var width_whole = num_items * 410 + (num_items - 1) * 40 + 80;
    var style_whole = {
      width: width_whole + "px"
    };
    var video_items = this.props.mb.imgs.map(function(elem) {
      var item_style = null
        // var paper_num = "第" + elem.id + "页"
      if (elem.id == 1) {
        item_style = {
          left: 40 + "px"
        }
      } else if (elem.id <= num_items) {
        item_style = {
          left: (40 + (410 + 40) * (elem.id - 1)) + "px"
        }
      }
      //大页处理完毕,id为410宽的大页
      var Page_ID = elem.id
        //处理每页的img

      //左侧页面元素
      var left_Page = elem.dual[0]

      //右侧页面元素
      var right_Page = elem.dual[1]
        //左侧页面当前页数
      var left_Page_ID = '第' + elem.dual[0].id + '页'
        //右侧页面当前页数
      var right_Page_ID = '第' + elem.dual[1].id + '页'
        // console.log(left_Page);
        // 
        //返回左侧的贴图
      var imgs_in_onePage_left = elem.dual[0].img.map(function(elem) {
          var top = elem.top * scale
          var left = elem.left * scale
          var width = elem.width * scale
          var height = elem.height * scale
          var small_Page_ID = left_Page.id + "_" + elem.id
          var img_style = {
            position: 'absolute',
            'top': top,
            'left': left,
            'width': width,
            'height': height,
            // 'zIndex': 100
          }
          return (<img style={img_style} className={small_Page_ID}/>)

        })
        //返回右侧贴图
      var imgs_in_onePage_right = elem.dual[1].img.map(function(elem) {
        var top = elem.top * scale
        var left = elem.left * scale
        var width = elem.width * scale
        var height = elem.height * scale
        var small_Page_ID = right_Page.id + "_" + elem.id
        var img_style = {
          position: 'absolute',
          'top': top,
          'left': left,
          'width': width,
          'height': height
        }
        return (<img style={img_style}  className={small_Page_ID}/>)
          // /public/img/test_logo.jpg
      })
      current_left_imgs.push(elem.dual[0])
      current_right_imgs.push(elem.dual[1])
      current_big_page.push(Page_ID)


      return (
        <Swipeable data-scale={scale}  onTouchTap={o.handleTap}  style={item_style} onSwipedLeft={o.handleLeftSwipe} onSwipedRight={o.handleRightSwipe} delta={80} stopPropagation={true} className="mb_item"  data-id={elem.id} data-num={num_items} ref={"mb_item"+elem.id} >
           <div className="left_wrapper">
           {imgs_in_onePage_left}
            <span>{left_Page_ID}</span>
           </div>
           <div className="right_wrapper">
           {imgs_in_onePage_right}
           <span>{right_Page_ID}</span>
           </div>  
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
        <div className="edit_zone">
               <div className="left_wrapper" id="left_wrapper">
               <span></span>
               </div>
               <div className="right_wrapper" id="right_wrapper">
               <span></span>
               </div>
        </div>
        <div className="count_wrapper">
              <div className="up"></div>
              <input type="text" className="buy_count"/>
              <span>本</span>
              <div className="down"></div>
        </div>
        <button className="again">再做一本</button>
     </section>

   
      </div>
    );
  }


})

export default Zpzzym;



// <section className="edtior_wrapper">
//         <span className="tips">"需要xx张图片！上传后点击图片可编辑"</span>
//         <div className="edit_zone"></div>
//         <span className="current_num">第xx页</span>
//         <div className="count_wrapper">
//               <div className="up"></div>
//               <input type="text" className="buy_count"/>
//               <span>本</span>
//               <div className="down"></div>
//         </div>
//         <button className="again">再做一本</button>
//    </section>

//    <section className="deliver_wrapper">
//        <div className="price_wrapper">
//           <span>产品价格:</span>
//           <span className="price" >79元</span>
//        </div>
//        <button className="save">保存制作</button>
//        <button className="deliver">提交订单</button>
//    </section>