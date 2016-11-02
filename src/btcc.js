import React from 'react';
import ReactDOM from 'react-dom'
import Btcc from './module/btcc/Btcc'



ReactDOM.render(
	<Btcc  size_title="选择尺寸" type_title="选择材质"  type_items={[{id:1,name:"拉米娜（磨砂面）"},{id:1,name:"大喊水晶（光亮面）"}]} size_items={[{id:1,name:"8寸X12寸"},{id:1,name:"8寸X12寸"},{id:1,name:"8寸X12寸"},{id:1,name:"8寸X12寸"},{id:1,name:"8寸X12寸"},{id:1,name:"8寸X12寸"}]} title={"摆台版画"} />,
	document.getElementById('btcc_wrapper')
);