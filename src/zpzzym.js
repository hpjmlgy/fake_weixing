import React from 'react';
import ReactDOM from 'react-dom'
import Zpzzym from './module/zpzzym/Zpzzym'

// import * as allModule from './Btbh_middle_module.js'

// var queue = []
// for (var p in allModule) {
//   queue.push(p)
// }


// ReactDOM.render(
// 	<Zpscc_nav paper_num_title="选择页数" paper_num_items={[{id:1,name:"20P"},{id:1,name:"21P"},{id:1,name:"20P"},{id:1,name:"20P"},{id:1,name:"20P"},{id:1,name:"20P"},{id:1,name:"20P"},{id:1,name:"20P"}]} size_title="选择尺寸" size_items={[{id:1,name:"8寸X12寸"},{id:1,name:"8寸X12寸"},{id:1,name:"8寸X12寸"},{id:1,name:"8寸X12寸"},{id:1,name:"8寸X12寸"},{id:1,name:"8寸X12寸"}]} title={"选择模块"} mb={[{id:1},{id:2},{id:3},{id:4}]}/>,
// 	document.getElementById('mb_wrapper')
// );
ReactDOM.render(
	<Zpzzym  mb={[{id:1},{id:2},{id:3},{id:4}]}/>,
	document.getElementById('mb_wrapper')
);