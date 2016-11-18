import React from 'react';
import ReactDOM from 'react-dom'
import Cropper from 'react-cropper';

import './cropper.css';

var $ = require('jquery');
var Swipeable = require('react-swipeable')
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

//全局变量
var current_left_imgs = []
var current_right_imgs = []
var current_left_imgs_origin = []
var current_right_imgs_origin = []
  // var current_big_page = []
var current_clickedImg = []

var edit_zone_scalex = parseFloat((335 / 205).toFixed(5));
var edit_zone_scaley = parseFloat((290 / 205).toFixed(5));
var cropper = null

var zoom_in_array = []
var zoom_out_array = []

function draw(height, width, url) {
  var url = url
  var cropper_style = {
    //原始图像在模板中未经缩放的位置、大小信息
    display: 'block',
    height: height,
    width: width,
    position: 'relative',
    margin: '0 auto',
    overflow: "hidden"
  }
  ReactDOM.render(
    <Cropper  ref='cropper' style={cropper_style}   className="cropper" viewMode={3} dragMode='move' autoCropArea={1} modal={false} guides={false} highlight={false} cropBoxMovable={false} cropBoxResizable={false}toggleDragModeOnDblclick={false} src={url}   />,
    document.getElementById('template')
  )
}

function draw_processor(target, in_array, out_array) {
  target.css('width', (0.5 + in_array.length * 0.1 - out_array.length * 0.1) * 100 + '%');

}

function img_processor(url, o) {
  var image = new Image()
  image.src = url
  var pass = false
  if (image.naturalWidth >= 0.9 * o.props.mb.demand_width && image.naturalHeight >= 0.9 * o.props.mb.demand_height) {
    pass = true
  }
  return pass
}

var Zpzzym = React.createClass({

  componentDidMount: function() {

    // $('.mb_item_wrapper').css('display', 'none')
    $('.mbbj_wrapper').css('display', 'none')

    this.setState({
      reminder: "需要" + this.props.mb.num_imgs_needed + "张图片！上传后点击图片可编辑"
    })

  },

  getInitialState: function() {
    return {
      null
    };
  },
  handleTap: function(e) {
    var o = this
      // console.log(o);
    if ($(e.target).attr('class') == 'left_wrapper' || $(e.target).attr('class') == 'right_wrapper') {
      // console.log($(e.target).parent().data('id')); //大页ID

      $('#left_wrapper').empty()
      $('#right_wrapper').empty()
      var scale = $(e.target).parent().data('scale')
      var ow = $(e.target).parent().data('ow')
      var oh = $(e.target).parent().data('oh')

      var PAGE_ID = $(e.target).parent().data('id')
        //返回左侧的贴图
        //
        //
        //当前的实际相册页码
      var Page_LEFT_ID = current_left_imgs[$(e.target).parent().data('id') - 1].id
        //当前实际相册页码中的需要上传的图片
      var imgs_in_onePage_left = current_left_imgs[$(e.target).parent().data('id') - 1].img.map(function(elem) {

          // var top = elem.top * scale * edit_zone_scaley
          // var left = elem.left * scale * edit_zone_scalex
          // var width = elem.width * scale * edit_zone_scalex
          // var height = elem.height * scale * edit_zone_scaley
          var top = elem.top * scale * edit_zone_scaley
          var left = elem.left * scale * edit_zone_scalex
          var width = elem.width
          var height = elem.height
          var small_Page_ID = current_left_imgs[$(e.target).parent().data('id') - 1].id + "_" + elem.id
          var img_style = {
            position: 'absolute',
            'top': top,
            'left': left,
            'width': width,
            'height': height,
            'transformOrigin': '0px 0px',
            'transform': 'scaleX(' + scale * edit_zone_scalex + ')' + 'scaleY(' + scale * edit_zone_scaley + ')'
              // 'zIndex': 100
          }
          if (elem.src != '' || elem.src != undefined) {
            return (<img src={elem.src} data-page={PAGE_ID} data-ow={ow} data-oh={oh}    data-top={elem.top} data-left={elem.left} data-width={elem.width} data-height={elem.height} onTouchTap={o.handle_imgTap_edit}   style={img_style} className={small_Page_ID}/>)

          } else {
            return (<img data-page={PAGE_ID} data-ow={ow} data-oh={oh}    data-top={elem.top} data-left={elem.left} data-width={elem.width} data-height={elem.height} onTouchTap={o.handle_imgTap_edit}   style={img_style} className={small_Page_ID}/>)

          }

        })
        //返回右侧贴图

      var Page_RIGHT_ID = current_right_imgs[$(e.target).parent().data('id') - 1].id

      var imgs_in_onePage_right = current_right_imgs[$(e.target).parent().data('id') - 1].img.map(function(elem) {
        var top = elem.top * scale * edit_zone_scaley
        var left = elem.left * scale * edit_zone_scalex
        var width = elem.width
        var height = elem.height
        var small_Page_ID = current_right_imgs[$(e.target).parent().data('id') - 1].id + "_" + elem.id
        var img_style = {
          position: 'absolute',
          'top': top,
          'left': left,
          'width': width,
          'height': height,
          'transformOrigin': '0px 0px',
          'transform': 'scaleX(' + scale * edit_zone_scalex + ')' + 'scaleY(' + scale * edit_zone_scaley + ')'
        }
        if (elem.src != '' || elem.src != undefined) {
          return (<img src={elem.src} data-page={PAGE_ID} data-ow={ow} data-oh={oh}    data-top={elem.top} data-left={elem.left} data-width={elem.width} data-height={elem.height} onTouchTap={o.handle_imgTap_edit}   style={img_style} className={small_Page_ID}/>)

        } else {
          return (<img data-page={PAGE_ID} data-ow={ow} data-oh={oh}    data-top={elem.top} data-left={elem.left} data-width={elem.width} data-height={elem.height} onTouchTap={o.handle_imgTap_edit}   style={img_style} className={small_Page_ID}/>)

        } // /public/img/test_logo.jpg
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
      $('.left_span').html("第" + Page_LEFT_ID + "页")
      $('.right_span').html("第" + Page_RIGHT_ID + "页")

    }
  },
  handleLeftSwipe: function(e) {
    e.preventDefault();
    var elem = $(e.currentTarget);
    var current_item = elem.attr('data-id');
    var num_item = elem.attr('data-num');
    if (current_item < num_item) {
      var mv_px = parseInt($(this.refs.whole_nav).css('margin-left').slice(0, -2)) - (40 + 410) + "px"
      $(this.refs.whole_nav).css('margin-left', mv_px)
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

    }
  },
  handleImg: function(e) {
    var target = e.target
    var files = target.files

    if (files[0] != undefined) {
      var url = URL.createObjectURL(files[0])
      var o = this
      var image = new Image()
      image.src = url
      image.onload = function() {
        if (image.naturalWidth >= 0.9 * o.props.mb.demand_width && image.naturalHeight >= 0.9 * o.props.mb.demand_height) {
          //pass
          if (o.state.reminder == "图片尺寸过小") {
            o.setState({
              reminder: "需要" + o.props.mb.num_imgs_needed + "张图片！上传后点击图片可编辑"
            })
          }
          var current_img = current_clickedImg.pop()


          //大页号
          //
          var PAGE_ID = current_img.data('page')
          var current_img_className = current_img.attr('class')

          var class_string = '.' + current_img_className

          //实际页面号与页面内img编号

          var id_array = current_img_className.split('_')
            //实际页面号
          var ACTUAL_PAGE_ID = id_array[0]
            //页面内img编号
          var IMG_ID = id_array[1]
            //更新current_left_imgs或current_right_imgs内的图片信息
            //
          if (ACTUAL_PAGE_ID % 2 == 0) {
            //偶数为右侧页面
            current_right_imgs[(ACTUAL_PAGE_ID / 2) - 1].img[IMG_ID - 1].src = url
            current_right_imgs_origin[(ACTUAL_PAGE_ID / 2) - 1].img[IMG_ID - 1].src = url
          } else {
            //奇数左侧页面
            current_left_imgs[((parseInt(ACTUAL_PAGE_ID) + 1) / 2) - 1].img[IMG_ID - 1].src = url
            current_left_imgs_origin[((parseInt(ACTUAL_PAGE_ID) + 1) / 2) - 1].img[IMG_ID - 1].src = url
              // console.log(current_left_imgs);
          }
          for (var i = 0; i < $(class_string).length; i++) {
            $($(class_string)[i]).attr('src', url)
          };
          current_clickedImg.push(current_img)
          $('.progress>span').css('width', (parseInt(PAGE_ID) / o.props.mb.imgs.length) * 100 + '%')
        } else {
          o.setState({
            reminder: '图片尺寸过小'
          })
        }
        console.log("新图片=====" + url);
        console.log("current_left_imgs=====" + current_left_imgs[0].img[0].src);
        console.log("current_left_imgs_origin=====" + current_left_imgs_origin[0].img[0].src);
      }

    }

  },
  handle_imgTap_edit: function(e) {
    //如果没有src触发选择图片
    // console.log($(e.target).attr('src'));
    if ($(e.target).attr('src') == '' || $(e.target).attr('src') == undefined) {
      current_clickedImg.pop()
      current_clickedImg.push($(e.target))
      $(this.refs.img_uploader).click()


    } else {
      ///触发编辑页面弹出
      ///

      current_clickedImg.pop()
      current_clickedImg.push($(e.target))

      $('.mb_item_wrapper').css('display', 'none')
      $('.mbbj_wrapper').css('display', 'block')

      var ow = $(e.target).data('ow')
      var oh = $(e.target).data('oh')
      var actual_width = $(e.target).data('width')
      var actual_height = $(e.target).data('height')
        // 寻找原始src
      var current_img = current_clickedImg.pop()
      current_clickedImg.push(current_img)

      //大页号
      //
      var PAGE_ID = current_img.data('page')
      var current_img_className = current_img.attr('class')

      var class_string = '.' + current_img_className

      //实际页面号与页面内img编号

      var id_array = current_img_className.split('_')
        //实际页面号
      var ACTUAL_PAGE_ID = id_array[0]
        //页面内img编号
      var IMG_ID = id_array[1]
        //更新current_left_imgs或current_right_imgs内的图片信息
      var src = ''
      if (ACTUAL_PAGE_ID % 2 == 0) {
        //偶数为右侧页面

        src = current_right_imgs_origin[(ACTUAL_PAGE_ID / 2) - 1].img[IMG_ID - 1].src
      } else {
        //奇数左侧页面
        src = current_left_imgs_origin[((parseInt(ACTUAL_PAGE_ID) + 1) / 2) - 1].img[IMG_ID - 1].src
      }
      console.log("编辑前");
      console.log("current_left_imgs=====" + current_left_imgs[0].img[0].src);
      console.log("current_left_imgs_origin=====" + current_left_imgs_origin[0].img[0].src);
      console.log("读取的src===" + src);

      var template_width = 670;
      var template_height = 500;
      var scale_x = parseFloat(template_width / ow).toFixed(5)
      var scale_y = parseFloat(template_height / oh).toFixed(5)
      var scale_actual_x = parseFloat(template_width / actual_width).toFixed(5)
      var scale_actual_y = parseFloat(template_height / actual_height).toFixed(5)
      var template = $('.template')
      $('.core_bj_wrapper').css('height', actual_height * scale_actual_y)
      $('.core_bj_wrapper').css('width', actual_width * scale_actual_x)

      template.css('height', actual_height * scale_actual_y)
      template.css('width', actual_width * scale_actual_x)
      template.css('transform-origin', '0px 0px')
        // template.css('transform', 'scaleX(' + scale_x + ')' + 'scaleY(' + scale_y + ')')
      template.css('margin', '0 auto')



      // this.setState({
      //   cropper_height: actual_height * scale_actual_y,
      //   cropper_width: actual_width * scale_actual_x,
      // }, () => {

      // })

      this.refs.cropper.replace(src)



    }


  },
  zoom_out: function(e) {
    if (zoom_out_array.length < 5) {
      if (zoom_in_array.length > 0) {
        zoom_in_array.pop()
        this.refs.cropper.zoom(-0.1)
      } else {
        zoom_out_array.push(1)
        this.refs.cropper.zoom(-0.1)
      }
    }
    draw_processor($('.processor>span'), zoom_in_array, zoom_out_array)
  },
  zoom_in: function(e) {
    if (zoom_in_array.length < 5) {
      if (zoom_out_array.length > 0) {
        zoom_out_array.pop()
        this.refs.cropper.zoom(0.1)
      } else {
        zoom_in_array.push(1)
        this.refs.cropper.zoom(0.1)
      }
    }
    draw_processor($('.processor>span'), zoom_in_array, zoom_out_array)
  },
  rotate: function(e) {
    this.refs.cropper.rotate(15)
  },
  handle_change: function(e) {
    var target = e.target
    var files = target.files
    if (files[0] != undefined) {
      var url = URL.createObjectURL(files[0])
      this.refs.cropper.replace(url)
      var current_img = current_clickedImg.pop()
      var current_img_className = current_img.attr('class')
      current_img_className = '.' + current_img_className



      for (var i = 0; i < $(current_img_className).length; i++) {
        $($(current_img_className)[i]).attr('src', url)
      };
      current_clickedImg.push(current_img)
    }
  },
  change_img: function(e) {
    // body...
    $(this.refs.img_changer).click()
      // this.refs.
  },
  delete_img: function(e) {
    //返回默认图片
    this.refs.cropper.replace("/public/img/1.jpg")
    var temp_save = current_clickedImg.pop()
    $(temp_save).src = ''
    current_clickedImg.push(temp_save)
  },
  save: function(e) {
    // var img_data = this.refs.cropper.getImageData();
    var o = this;

    if (current_clickedImg.length > 0) {
      console.log("保存前：");
      console.log("current_left_imgs=====" + current_left_imgs[0].img[0].src);
      console.log("current_left_imgs_origin=====" + current_left_imgs_origin[0].img[0].src);
      this.refs.cropper.getCroppedCanvas().toBlob(function(blob) {
        var url = URL.createObjectURL(blob)
        console.log("新生成的url:" + url);
        var current_img_className = current_clickedImg.pop().attr('class')
        var class_string = "." + current_img_className
        var id_array = current_img_className.split('_')
          //实际页面号
        var ACTUAL_PAGE_ID = id_array[0]
          //页面内img编号
        var IMG_ID = id_array[1]
          //更新current_left_imgs或current_right_imgs内的图片信息


        if (ACTUAL_PAGE_ID % 2 == 0) {
          //偶数为右侧页面
          current_right_imgs[(ACTUAL_PAGE_ID / 2) - 1].img[IMG_ID - 1].src = url
        } else {
          //奇数左侧页面
          current_left_imgs[((parseInt(ACTUAL_PAGE_ID) + 1) / 2) - 1].img[IMG_ID - 1].src = url
        }

        console.log("保存后：");
        console.log("current_left_imgs=====" + current_left_imgs[0].img[0].src);
        console.log("current_left_imgs_origin=====" + current_left_imgs_origin[0].img[0].src);
        //

        for (var i = 0; i < $(class_string).length; i++) {
          $($(class_string)[i]).attr('src', url);
        };

        $('.mb_item_wrapper').css('display', 'block')
        $('.mbbj_wrapper').css('display', 'none')

      })


    }
  },
  handle_buy_count: function(e) {
    // body...
  },
  render: function() {
    var o = this;

    var target_height = this.props.mb.target_height;
    var scale = parseFloat(target_height / this.props.mb.original_height).toFixed(5)
    var num_items = this.props.mb.imgs.length;
    var width_whole = num_items * 410 + (num_items - 1) * 40 + 80;
    var width_whole_mbbj = num_items * 670 + (num_items - 1) * 20 + 40;
    var style_whole = {
      width: width_whole + "px"
    };
    var style_whole_mbbj = {
      width: width_whole_mbbj + "px"
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
          return (<img  key={small_Page_ID} style={img_style} data-page={Page_ID} className={small_Page_ID}/>)

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
        return (<img key={small_Page_ID} style={img_style} data-page={Page_ID}  className={small_Page_ID}/>)
          // /public/img/test_logo.jpg
      })

      current_left_imgs.push(elem.dual[0])


      current_right_imgs.push(elem.dual[1])

      // current_big_page.push(Page_ID)



      return (
        <Swipeable data-ow={o.props.mb.original_width} data-oh={o.props.mb.original_height} data-scale={scale}  onTouchTap={o.handleTap}  style={item_style} onSwipedLeft={o.handleLeftSwipe} onSwipedRight={o.handleRightSwipe} delta={80} stopPropagation={true} className="mb_item" key={elem.id} data-id={elem.id} data-num={num_items} ref={"mb_item"+elem.id} >
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

    $.extend(true, current_left_imgs_origin, current_left_imgs);
    $.extend(true, current_right_imgs_origin, current_right_imgs);


    var cropper_style = {
      //原始图像在模板中未经缩放的位置、大小信息
      display: 'block',
      height: 500,
      width: 670,
      // height: '100%',
      // width: '100%',
      position: 'relative',
      margin: '0 auto',
      overflow: "hidden"
    }

    return (
      <div className="all_wrapper">
      <div className={"mb_item_wrapper"}>
         <section className="introduce">
              <span className="title">预览</span>
              <button className="change_template">更换模板</button>
         </section>
         <section className="progress"><span></span></section>
         <section className="nav_wrapper">
          <div className={"mb_control_wrapper"}>
                  <div className="whole" style={style_whole} ref="whole_nav">{video_items}</div>
                   <input className="img_uploader" type="file"  accept="image/*" ref="img_uploader" onChange={o.handleImg}/>
           </div>
         </section>

     <section className="edtior_wrapper">
        <span className="tips">{this.state.reminder}</span>
        <div className="edit_zone">
               <div className="left_wrapper" id="left_wrapper">
               
               </div>
               
               <div className="right_wrapper" id="right_wrapper">
               
               </div>
               <span className='left_span'></span>
               <span className='right_span'></span>
        </div>
        <div className="count_wrapper">
              <div className="up"></div>
              <input type="text" onChange={o.handle_buy_count} className="buy_count" value={1}/>
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
    
       
    <section className="mbbj_wrapper">
        <section className="mbbj_top_wrapper"><span className="mb_name">{this.props.mb.template_name}</span></section>
           <section className="core_bj_wrapper">
             <div className="template" id="template">
          <Cropper style={cropper_style} className="cropper" viewMode={3} dragMode='move' autoCropArea={1} modal={false} guides={false} highlight={false} cropBoxMovable={false} cropBoxResizable={false} toggleDragModeOnDblclick={false} zoomOnTouch={false} zoomOnWheel={false} ref='cropper' src={''}   />
            <input className="img_changer" type="file"  accept="image/*" ref="img_changer" onChange={o.handle_change}/>

            </div>
           </section>
           <section className="mid_controller_wrapper">
                  <button onTouchTap={o.zoom_out} className='zoom_out'>-</button>
                  <div className="processor"><span></span></div>
                  <button onTouchTap={o.zoom_in} className='zoom_in'>+</button>
           </section>
           <section className="bottom_controoler_wrapper">
              <button  onTouchTap={o.save}>保存</button>
              <button  onTouchTap={o.rotate}>旋转</button>
              <button  onTouchTap={o.change_img}>换图</button>
              <button onTouchTap={o.delete_img}>删除</button>
           </section>

     </section>
    


      </div>
    );

  }


})

export default Zpzzym;



// <section className="mbbj_wrapper">
//         <section className="mbbj_top_wrapper"><span className="mb_name">{this.props.mb.template_name}</span></section>
//            <section className="core_bj_wrapper">
//              <div className="template" id="template">
//           <Cropper style={cropper_style} className="cropper" viewMode={3} dragMode='move' autoCropArea={1} modal={false} guides={false} highlight={false} cropBoxMovable={false} cropBoxResizable={false} toggleDragModeOnDblclick={false} zoomOnTouch={false} zoomOnWheel={false} ref='cropper' src={''}   />
//             <input className="img_changer" type="file"  accept="image/*" ref="img_changer" onChange={o.handle_change}/>

//             </div>
//            </section>
//            <section className="mid_controller_wrapper">
//                   <button onTouchTap={o.zoom_out} className='zoom_out'>-</button>
//                   <div className="processor"><span></span></div>
//                   <button onTouchTap={o.zoom_in} className='zoom_in'>+</button>
//            </section>
//            <section className="bottom_controoler_wrapper">
//               <button  onTouchTap={o.save}>保存</button>
//               <button  onTouchTap={o.rotate}>旋转</button>
//               <button  onTouchTap={o.change_img}>换图</button>
//               <button onTouchTap={o.delete_img}>删除</button>
//            </section>

//      </section>