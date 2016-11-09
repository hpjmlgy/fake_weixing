import React from 'react';
import Cropper from 'react-cropper';
import './cropper.css';

var $ = require('jquery');
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

//全局变量
var current_clickedImg = []



var Zpsbj = React.createClass({
    getInitialState: function() {
      return {
        cropper_url: '',
        view_mode: 3
      }
    },
    componentDidMount: function() {

    },
    handleTap: function(e) {

    },
    input_onChange: function(e) {
      var target = e.target
      var files = target.files
      if (files[0] != undefined) {
        var url = URL.createObjectURL(files[0])
        this.setState({
          cropper_url: url
        })
        var current_img = current_clickedImg.pop()
        current_img.attr('src', url)
        current_clickedImg.push(current_img)
      }
    },
    handle_imgTap: function(e) {

      $(this.refs.fileInput).click()
      current_clickedImg.pop()
      current_clickedImg.push($(e.target))
    },
    _crop: function(e) {



    },
    _reset: function(e) {
      this.refs.cropper.reset()
    },
    _save_Modified_Img: function(e) {
      var img_data = this.refs.cropper.getImageData();
      var o = this;
      if (current_clickedImg.length > 0) {
        this.refs.cropper.getCroppedCanvas().toBlob(function(blob) {
          var url = URL.createObjectURL(blob)
          if (o.state.view_mode == 1) {

          } else {

            current_clickedImg.pop().attr('src', url)
            var formData = new FormData();
            //save or upload
          }

        })


      }

    },
    _rotate: function(e) {
      this.refs.cropper.rotate(45)
    },
    _zoom_in: function(e) {
      this.refs.cropper.zoom(0.1)
    },
    _zoom_out: function(e) {
      this.refs.cropper.zoom(-0.1)
    },
    render: function() {
      var o = this;
      // //原始大尺寸
      var original_width = this.props.original_width
      var original_height = this.props.original_height


      //变换后尺寸
      // var target_width = this.props.target_width
      var target_height = this.props.target_height
        //实际以高变换为标准
      var scale = parseFloat(target_height / original_height).toFixed(5)

      var target_width = (scale * original_width).toFixed(2)



      var template_wrapper_style = {
        'width': target_width
      }
      var template_style = {
        'transformOrigin': '0px 0px',
        'width': this.props.original_width,
        'height': this.props.original_height,
        'transform': 'scale(' + scale + ')'
      };
      var img_style = {
        //原始图像在模板中未经缩放的位置、大小信息
        display: 'block',
        height: 1080,
        width: 1920,
        position: 'absolute',
        top: 100,
        left: 1500,
        overflow: "hidden"
      }

      var display_none_style = {
        display: 'none'
      }


      return (
        <section>
             <section style={template_wrapper_style} className="template_wrapper">
                 <div style={template_style} className="template">
                          <div style={img_style}> 
                            <img  onTouchTap={o.handle_imgTap} src="" alt=""/>
                          </div>
                        
                 </div>
             </section>
             
             <input style={display_none_style} type="file" multiple={false} ref="fileInput" onChange={o.input_onChange} />
             
            

             <section className="editor_wrapper">
                   <section style={template_wrapper_style} className="template_wrapper">
                            <div style={template_style} className="template">
                                <Cropper viewMode={this.state.view_mode} dragMode='move' autoCropArea={1} modal={false} guides={false} highlight={false} cropBoxMovable={false} cropBoxResizable={false}toggleDragModeOnDblclick={false} style={img_style}  ref='cropper' src={this.state.cropper_url}  crop={this._crop}  />
                            </div>
                  </section>  
             </section>
             <button onTouchTap={o._reset}>充值 </button>
             <button onTouchTap={o._save_Modified_Img}>保存更改 </button>
             <button onTouchTap={o._rotate}>旋转45度 </button>
             <button onTouchTap={o._zoom_in}>ZoomIn </button>
             <button onTouchTap={o._zoom_out}>ZoomOut </button>
             <img className="test" src="" alt="更改后图片"/>

        </section>
      )
    }
  })
  // 

export default Zpsbj;

// <Middle_module/>
// <Bottom_module desc={[{content:"5-7天制作周期"},{content:"工序复杂好产品值得等待"}]}/>
// <button className="sszz_go_produce">开始制作</button>