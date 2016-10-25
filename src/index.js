import React from 'react';


import ReactDOM from 'react-dom'
import Slider from './module/Slider'
import Top_ad from './module/Top_ad'
import Top_ad2 from './module/Top_ad2'

ReactDOM.render(
	<Slider data={[{src:"/public/img/test_logo.jpg"},{src:"/public/img/test_logo.jpg"},{src:"/public/img/test_logo.jpg"}]}/>,
	document.getElementById('wrap_slider'),

);
ReactDOM.render(
	<Top_ad desc={"每月免费"} desc1={"冲印30张照片"}/>,
	document.getElementById('wrap_ad1')
);
ReactDOM.render(
	<Top_ad2 desc={"免费领取"} desc1={"30元制作代金卷"}/>,
	document.getElementById('wrap_ad2')
);