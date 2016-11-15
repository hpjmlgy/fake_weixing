import React from 'react';
import ReactDOM from 'react-dom'
import Zpzzym from './module/zpzzym/Zpzzym'

ReactDOM.render(
	<Zpzzym  mb={{demand_width:'1920',demand_height:'1080', num_imgs_needed:'10', original_width:"3638", original_height:"2469",target_height:205,target_height_mbbj_x:335,target_height_mbbj_y:290,template_name:'宝贝成长日记 模板',imgs:[{id:1,dual:[{id:1,img:[{id:'1',top:100,left:300,width:900,height:800},{id:'2',top:1000,left:300,width:900,height:800}]},{id:2,img:[{id:1,top:100,left:300,width:900,height:800},{id:2,top:1000,left:300,width:900,height:800}]}]},{id:2,dual:[{id:3,img:[{id:'1',top:100,left:300,width:900,height:800},{id:'2',top:1000,left:300,width:900,height:800}]},{id:4,img:[{id:1,top:100,left:300,width:900,height:800},{id:2,top:1200,left:300,width:900,height:800}]}]}]}}/>,
	document.getElementById('mb_wrapper')
);