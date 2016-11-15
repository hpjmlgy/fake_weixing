import React from 'react';
import ReactDOM from 'react-dom'
import Cropper from 'react-cropper';
import '../zpzzym/cropper.css';

var $ = require('jquery');
var Swipeable = require('react-swipeable')
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var urls = []
var urls_data = [] //自行存储相关数据
var count = 0
var current_img = []
var zoom_in_array = []
var zoom_out_array = []

function draw_processor(target, in_array, out_array) {
  target.css('width', (0.5 + in_array.length * 0.1 - out_array.length * 0.1) * 100 + '%');

}

var Xccyzz = React.createClass({

  componentDidMount: function() {


  },

  getInitialState: function() {
    return {
      null
    };
  },
  handle_imgTap_edit: function(e) {
    //如果没有src触发选择图片
    // console.log($(e.target).attr('src'));
    if ($(e.target).attr('src') == '' || $(e.target).attr('src') == undefined) {
      $(this.refs.img_uploader).click()
      current_clickedImg.pop()
      current_clickedImg.push($(e.target))
    } else {
      ///触发编辑页面弹出
      current_clickedImg.pop()
      current_clickedImg.push($(e.target))

      $('.mb_item_wrapper').css('display', 'none')
      $('.mbbj_wrapper').css('display', 'block')

      var ow = $(e.target).data('ow')
      var oh = $(e.target).data('oh')
      var actual_width = $(e.target).data('width')
      var actual_height = $(e.target).data('height')
      var src = $(e.target).attr('src')



      var template_width = 670;
      var template_height = 500;
      var scale_x = parseFloat(template_width / ow).toFixed(5)
      var scale_y = parseFloat(template_height / oh).toFixed(5)
      var template = $('.template')
      $('.core_bj_wrapper').css('height', actual_height * scale_y)
      $('.core_bj_wrapper').css('width', actual_width * scale_x)

      template.css('height', actual_height)
      template.css('width', actual_width)
      template.css('transform-origin', '0px 0px')
      template.css('transform', 'scaleX(' + scale_x + ')' + 'scaleY(' + scale_y + ')')
      template.css('margin', '0 auto')

      this.refs.cropper.replace(src)
      this.setState({
        cropper_height: actual_height,
        cropper_width: actual_width,
      }, () => {

      })



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
      var current = current_img.pop()
      var changed_index = current.parent().parent().parent().attr('id');
      urls[changed_index] = url
      current.attr('src', url);
      current_img.push(current)
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
    var current = current_img.pop()
    var changed_index = current.parent().parent().parent().attr('id');
    urls[changed_index] = ""
    current.attr('src', '/public/img/1.jpg');
    // current_img.push(current)
  },
  deliver: function(e) {
    //var formData = new FormData();
    //save or upload urls
    var newUrls = urls.filter(function(url) {
      if (url != '' && url != undefined) {
        return true
      } else {
        return false
      }

    });
    console.log(urls);
    console.log(newUrls);

  },
  save: function(e) {
    var img_data = this.refs.cropper.getImageData();
    var o = this;
    if (current_img.length > 0) {
      this.refs.cropper.getCroppedCanvas().toBlob(function(blob) {
        var url = URL.createObjectURL(blob)
        o.refs.cropper.replace(url)


        var current = current_img.pop()
        var changed_index = current.parent().parent().parent().attr('id')
        urls[changed_index] = url
        current.attr('src', url);

        $('.cargo_wrapper').css('display', 'flex')
        $('.mbbj_wrapper').css('display', 'none')
        $('.deliver_wrapper').css('display', 'flex')


      })


    } else {

      $('.cargo_wrapper').css('display', 'flex')
      $('.mbbj_wrapper').css('display', 'none')
      $('.deliver_wrapper').css('display', 'flex')

    }
  },
  uploader_click: function(e) {
    this.refs.img_uploader.click()
  },
  single_uploader_click: function(e) {
    this.refs.single_img_uploader.click()
  },
  draw_imgs: function(urls) {
    var o = this
    var img_item = urls.map(function(url, index) {
      $('#cargo_wrapper').append("<div class=\"render_wrapper\" id=\"" + index + "\"></div>")
      var image = new Image()
      image.src = url
      image.onload = function() {
        if (image.naturalWidth >= 0.9 * o.props.demand_width && image.naturalHeight >= 0.9 * o.props.demand_height) {
          //pass
          var scale_x = parseFloat(320 / o.props.demand_width).toFixed(2)
          var scale_y = parseFloat(220 / o.props.demand_height).toFixed(2)
          var img_style = {
            width: o.props.demand_width,
            height: o.props.demand_height,
            transformOrigin: '0px 0px',
            transform: 'scaleX(' + scale_x + ')' + 'scaleY(' + scale_y + ')'
          }
          var Item = React.createClass({
            render: function() {
              return (
                <div className="item_wrapper">
                      <div className="top">
                        <div>6寸</div>
                        <button>调整尺寸</button>
                      </div>
                      <div className="middle">
                        <img style={img_style} data-ow={image.naturalWidth} data-oh={image.naturalHeight} onTouchTap={o.edit_img} className='item' src={url} alt=""/>
                      </div>
                      <div className="bottom">
                        <div>印一张</div>
                        <button onTouchTap={o.delete_item}></button>
                        <button></button>
                        <button ></button>
                      </div>
                  </div>
              )
            }
          })
          ReactDOM.render(
            <Item/>,
            document.getElementById(index)
          );

        }
        count++
        if (count == urls.length) {
          $('#cargo_wrapper').append("<div  id=\"" + "adder_wrapper" + "\"></div>")
          var Adder = React.createClass({
            render: function() {
              return (<div onTouchTap={o.single_uploader_click} id="adder"></div>)
            }
          })
          ReactDOM.render(
            <Adder/>,
            document.getElementById("adder_wrapper")
          );

        } else {

        };

      }


    })
  },
  img_load: function(e) {
    var target = e.target
    var files = target.files
    var o = this
    for (var i = 0; i < files.length; i++) {
      if (files[i] != undefined) {
        var url = URL.createObjectURL(files[i])
        urls.push(url)
      }
    };
    this.draw_imgs(urls)
    $('.no_cargo_wrapepr').css('display', 'none')
    $('.cargo_wrapper').css('display', 'flex')
      // $('.deliver_wrapper').css('display', 'none')
  },
  single_img_load: function(e) {
    var target = e.target
    var files = target.files
    var o = this
    var url = URL.createObjectURL(files[0])
    var image = new Image()
    image.src = url
    image.onload = function() {
      if (image.naturalWidth >= 0.9 * o.props.demand_width && image.naturalHeight >= 0.9 * o.props.demand_height) {
        //pass
        urls.push(url)
        var current_index = urls.length - 1
        var scale_x = parseFloat(320 / o.props.demand_width).toFixed(2)
        var scale_y = parseFloat(220 / o.props.demand_height).toFixed(2)
        var img_style = {
          width: o.props.demand_width,
          height: o.props.demand_height,
          transformOrigin: '0px 0px',
          transform: 'scaleX(' + scale_x + ')' + 'scaleY(' + scale_y + ')'
        }
        var Item = React.createClass({
            render: function() {
              return (
                <div className="item_wrapper">
                      <div className="top">
                        <div>6寸</div>
                        <button>调整尺寸</button>
                      </div>
                      <div className="middle">
                        <img style={img_style} data-ow={image.naturalWidth} data-oh={image.naturalHeight} onTouchTap={o.edit_img} className='item' src={url} alt=""/>
                      </div>
                      <div className="bottom">
                        <div>印一张</div>
                        <button onTouchTap={o.delete_item}></button>
                        <button></button>
                        <button></button>
                      </div>
                  </div>
              )
            }
          })
          //处理adder_wrapper
          //
        $('#adder_wrapper').remove()
        $('#cargo_wrapper').append("<div class=\"render_wrapper\" id=\"" + current_index + "\"></div>")
        ReactDOM.render(
          <Item/>,
          document.getElementById(current_index)
        );
        //重绘adder
        $('#cargo_wrapper').append("<div  id=\"" + "adder_wrapper" + "\"></div>")
        var Adder = React.createClass({
          render: function() {
            return (<div onTouchTap={o.single_uploader_click} id="adder"></div>)
          }
        })
        ReactDOM.render(
          <Adder/>,
          document.getElementById("adder_wrapper")
        );



      } else {

      }
    }
  },
  delete_item: function(e) {
    var target_wrapper = $(e.target).parent().parent().parent()
    var current_delete_index = target_wrapper.attr('id')
    urls[current_delete_index] = ''
    target_wrapper.remove()
  },
  edit_img: function(e) {
    ///触发编辑页面弹出
    current_img.pop()
    current_img.push($(e.target))

    $('.cargo_wrapper').css('display', 'none')
    $('.mbbj_wrapper').css('display', 'block')
    $('.deliver_wrapper').css('display', 'none')


    var ow = $(e.target).data('ow')
    var oh = $(e.target).data('oh')
    var src = $(e.target).attr('src')
    var actual_width = this.props.demand_width
    var actual_height = this.props.demand_height


    var template_width = 510;
    var template_height = 380;
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

    this.refs.cropper.replace(src)
    this.setState({
      cropper_height: actual_height * scale_actual_y,
      cropper_width: actual_width * scale_actual_x,
    }, () => {

    })
  },
  horizon: function(e) {

    var current = current_img.pop()
    current_img.push(current)


    var ow = $(current).data('ow')
    var oh = $(current).data('oh')
    var src = $(current).attr('src')
    var actual_width = this.props.demand_width
    var actual_height = this.props.demand_height


    var template_width = 510;
    var template_height = 380;

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

    this.setState({
      cropper_height: actual_height * scale_actual_y,
      cropper_width: actual_width * scale_actual_x,
    }, () => {
      this.refs.cropper.replace(current.attr('src'))
    })

  },
  vertical: function(e) {

    var current = current_img.pop()
    current_img.push(current)


    var ow = $(current).data('ow')
    var oh = $(current).data('oh')
    var src = $(current).attr('src')
    var actual_width = this.props.demand_width
    var actual_height = this.props.demand_height


    var template_width = 510;
    var template_height = 380;

    var scale_actual_x = parseFloat(template_width / actual_width).toFixed(5)
    var scale_actual_y = parseFloat(template_height / actual_height).toFixed(5)
    var template = $('.template')
    $('.core_bj_wrapper').css('width', actual_height * scale_actual_y)
    $('.core_bj_wrapper').css('height', actual_width * scale_actual_x)

    template.css('width', actual_height * scale_actual_y)
    template.css('height', actual_width * scale_actual_x)
    template.css('transform-origin', '0px 0px')
      // template.css('transform', 'scaleX(' + scale_x + ')' + 'scaleY(' + scale_y + ')')
    template.css('margin', '0 auto')

    this.setState({
      cropper_height: actual_width * scale_actual_x,
      cropper_width: actual_height * scale_actual_y,
    }, () => {
      this.refs.cropper.replace(current.attr('src'))
    })



  },
  render: function() {
    var o = this;
    var cropper_style = {
      //原始图像在模板中未经缩放的位置、大小信息
      display: 'block',
      height: this.state.cropper_height,
      width: this.state.cropper_width,
      // height: '100%',
      // width: '100%',
      position: 'relative',
      margin: '0 auto',
      overflow: "hidden"
    }
    return (

      <section>
        <section className="top_wrapper">
            <div className="info_wrapper">
                <span className="title">免费冲印张数剩余：</span>
                <span className="free_info">1寸15张 6寸20张</span>
            </div>
        </section>
        <section className="middle_wrapper">
               <section className="no_cargo_wrapepr">
                  <div className="uploader" onTouchTap={o.uploader_click} >
                      <input  className="img_uploader" multiple="multiple" type="file"  accept="image/*" ref="img_uploader" onChange={o.img_load}/>
                      <input  className="img_uploader" type="file"  accept="image/*" ref="single_img_uploader" onChange={o.single_img_load}/>
                  </div>
                  <span className="desc">赶快上传照片，开始冲印吧！支持批量上传哦！</span>
               </section>
               <section className="cargo_wrapper" id="cargo_wrapper"></section>


         <section className="mbbj_wrapper">
          <section className="mbbj_top_wrapper"><span className="mb_name"> </span></section>
             <section className="core_bj_wrapper">
               <div className="template" id="template">
            <Cropper style={cropper_style} className="cropper" viewMode={3} dragMode='move' autoCropArea={1} modal={false} guides={false} highlight={false} cropBoxMovable={false} cropBoxResizable={false} toggleDragModeOnDblclick={false} zoomOnTouch={false} zoomOnWheel={false} ref='cropper' src={''}  crop={this._crop}  />
              <input className="img_changer" type="file"  accept="image/*" ref="img_changer" onChange={o.handle_change}/>
        
              </div>
             </section>
             <section className="mid_controller_wrapper">
                    <button onTouchTap={o.zoom_out} className='zoom_out'>-</button>
                    <div className="processor"><span></span></div>
                    <button onTouchTap={o.zoom_in} className='zoom_in'>+</button>
             </section>
             <section className="bottom_controller_wrapper">
                <button  onTouchTap={o.save}>保存</button>
                <button  onTouchTap={o.rotate}>旋转</button>
                <button  onTouchTap={o.change_img}>换图</button>
                <button onTouchTap={o.delete_img}>删除</button>      
             </section>
              <div className="hs_controller_wrapper">
                   <span>横竖版调整</span>
                   <div onTouchTap={o.horizon} className="horizon"></div>
                   <div onTouchTap={o.vertical} className="vertical"></div>
              </div>
           </section>


        </section>
        <section className="deliver_wrapper">
          <div className="price_wrapper">
              <span>产品价格:</span>
              <span className="price" >79元</span>
          </div>
          <button className="save">保存制作</button>
          <button onTouchTap={o.deliver} className="deliver">提交订单</button>
        </section>

     </section>

    )
  }
})

export default Xccyzz;



// var img_item = urls.map(function(elem) {
//    return (
//      <div className="item_wrapper">
//          <div className="top">
//            <div>6寸</div>
//            <button>调整尺寸</button>
//          </div>
//          <div className="middle">
//            <img className='item' src={elem} alt=""/>
//          </div>
//          <div className="bottom">
//            <div>印一张</div>
//            <button></button>
//            <button></button>
//            <button></button>
//          </div>
//      </div>
//    )
//  })
// var Adder = React.createClass({
//   render: function() {
//     return (<section id="adder"></section>)
//   }
// })
// var Item = React.createClass({
//   render: function() {
//     return (<section>{img_item}{Adder}</section>)
//   }
// })
//  ReactDOM.render(
//    <Item/>,
//    document.getElementById('cargo_wrapper')
//  );