import React from 'react';
import ReactDOM from 'react-dom'
import Wddd from './module/wddd/Wddd'

ReactDOM.render(
	<Wddd tickets={[{type:0,id:1,name:"时光台历",state:"待支付",price:"￥25.00",product_type:"25张图/册子 X1"},{type:1,id:1,name:"时光台历",state:"待支付",price:"￥25.00",product_type:"25张图/册子 X1"},{type:2,id:1,name:"时光台历",state:"待支付",price:"￥25.00",product_type:"25张图/册子 X1"}]} />,
	document.getElementById('wddd_wrapper')
);