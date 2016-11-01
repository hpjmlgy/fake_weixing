import React from 'react';
import ReactDOM from 'react-dom'
import Xccc from './module/xccc/Xccc'
// import Xzcp from './module/xzcp/Xzcp'


ReactDOM.render(
	<Xccc size_rec_items={[{id:1,name:"20P"},{id:1,name:"21P"},{id:1,name:"20P"}]} size_tra_items={[{id:1,name:"20P"},{id:1,name:"20P"},{id:1,name:"20P"},{id:1,name:"20P"},{id:1,name:"20P"},{id:1,name:"20P"}]} size_big_items={[{id:1,name:"8寸X12寸"},{id:1,name:"8寸X12寸"},{id:1,name:"8寸X12寸"},{id:1,name:"8寸X12寸"},{id:1,name:"8寸X12寸"},{id:1,name:"8寸X12寸"}]} title={"选择尺寸"} />,
	document.getElementById('xc_wrapper')
);