import React from 'react';


import ReactDOM from 'react-dom'
import Slider from './module/index/Slider'
import Top_ad from './module/index/Top_ad'
import Top_ad2 from './module/index/Top_ad2'
import Product from './module/index/Product'
import Top_ad3 from './module/index/Top_ad3'
import Nav_mid from './module/index/Nav_mid'
import Video_nav from './module/index/Video_nav'

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
ReactDOM.render(
	<Product  litems={[{id:"1"},{id:"2"},{id:"3"},{id:"4"}]} ritems={[{id:"1"},{id:"2"},{id:"3"}]} />,
	document.getElementById('wrap_cargo')
); //
ReactDOM.render(
	<Top_ad3 desc={"精美照片书模板"} desc1={"完美合成 快速成书"}/>,
	document.getElementById('wrap_ad3')
);
ReactDOM.render(
	<Nav_mid data={[{chn:"家有宝贝",eng:"My Angle"},{chn:"永恒的爱",eng:"Forever Lover"},{chn:"i拍旅行",eng:"On the Road"},{chn:"青春最美",eng:"On the Road"}]}/>,
	document.getElementById('nav_wrapper')
);
ReactDOM.render(
	<Video_nav title={"记录宝宝成长的点点滴滴"} video={[{},{},{}]}/>,
	document.getElementById('video_wrapper')
);