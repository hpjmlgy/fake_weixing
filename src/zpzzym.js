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
	<Zpzzym  mb={{original_width:"3638", original_height:"2469",target_height:205,template_name:'1',imgs:[{id:1,dual:[{id:1,img:[{id:'1',top:100,left:300,width:900,height:800},{id:'2',top:1000,left:300,width:900,height:800}]},{id:2,img:[{id:1,top:100,left:300,width:900,height:800},{id:2,top:1000,left:300,width:900,height:800}]}]},{id:2,dual:[{id:3,img:[{id:'1',top:100,left:300,width:900,height:800},{id:'2',top:1000,left:300,width:900,height:800}]},{id:4,img:[{id:1,top:100,left:300,width:900,height:800},{id:2,top:1200,left:300,width:900,height:800}]}]}]}}/>,
	document.getElementById('mb_wrapper')
);

// {template_name:'1',imgs:[{id:1,img:[{top:100,left:300,width:900,height:800},{top:1000,left:300,width:900,height:800}]},{id:2,img:[{top:100,left:300,width:900,height:800},{top:1000,left:300,width:900,height:800}]}]}
// 
// 
// 
// imgs:[{dual:[{id:1,img:[{id:'1',top:100,left:300,width:900,height:800},{id:'2',top:1000,left:300,width:900,height:800}]},{id:2,img:[{id:1,top:100,left:300,width:900,height:800},{id:2,top:1000,left:300,width:900,height:800}]}]}]