import React from 'react';
var $ = require('jquery');
import Cropper from 'react-cropper';
import './cropper.css';


var current_clickedImg = []

// var original_width = this.props.original_width
// var original_height = this.props.original_height
//   //变换后尺寸
//   // var target_width = this.props.target_width
// var target_height = this.props.target_height
//   //实际以高变换为标准
// var scale = parseFloat(target_height / original_height).toFixed(5)

// var target_width = (scale * original_width).toFixed(2)

// var template_wrapper_style = {
//   'width': target_width
// }
// var template_style = {
//   'transformOrigin': '0px 0px',
//   'width': this.props.original_width,
//   'height': this.props.original_height,
//   'transform': 'scale(' + scale + ')'
// };

// var cropper_style = {
//   display: 'block',
//   height: 1000,
//   width: 2000,
//   position: 'absolute',
//   top: 100,
//   left: 1500,
//   backgroundColor: "blue"
// }


var Demo = React.createClass({



  _crop: function() {
    // image in dataUrl
    console.log(this.refs.cropper.getCroppedCanvas().toDataURL());
  },
  componentDidMount: function() {

     

  },
  handle_imgTap: function(e) {
    current_clickedImg.pop()
    current_clickedImg.push($(e.target))
    this.props.upload_triger(current_clickedImg)

  },
  render: function() {


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

    var cropper_style = {
      display: 'block',
      height: 1000,
      width: 2000,
      position: 'absolute',
      top: 100,
      left: 1500,
      backgroundColor: "blue",
      overflow: "hidden",
      backgroundSize: 'cover'
    }


    var o = this
    return (
      <section style={template_wrapper_style} className="template_wrapper">

           <Cropper className="template" onTouchTap={o.handle_imgTap} ref='cropper' src='' style={template_style} guides={false} crop={this._crop}  />
     
      </section>

    );
  }
});



export {
  Demo
}

// <CropperJS onTouchTap={o.handle_imgTap} ref='cropper' src='' style={cropper_style} guides={false} crop={this._crop} />
// aspectRatio={16 / 9}
//   <img onTouchTap={o.handle_imgTap} src="" alt=""/>
//   
// img{
//     //整个模板大小:original_width="3638" original_height="2469"
//     display: block;
//     width: 2000px;
//     height: 1000px;
//     position: absolute;
//     top:100px;
//     left:1500px;
//     background-color: blue;
//   }
//   
// <section style={template_wrapper_style} className="template_wrapper">
//         <div style={template_style} className="template">
//           <CropperJS onTouchTap={o.handle_imgTap} ref='cropper' src='' style={cropper_style} guides={false} crop={this._crop} />
//         </div>
//       </section>