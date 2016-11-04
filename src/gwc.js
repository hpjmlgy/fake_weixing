import React from 'react';
import ReactDOM from 'react-dom'
import Gwc from './module/gwc/Gwc'

ReactDOM.render(
	<Gwc orders={[{name:"时光台历",price:"￥25.00",product_type:"25张图/册子"},{name:"时光台历",price:"￥25.00",product_type:"25张图/册子"}]} />,
	document.getElementById('gwc_wrapper')
);

// orders={[{type:0,id:1,name:"时光台历",state:"待支付",price:"￥25.00",product_type:"25张图/册子 X1"},{type:1,id:1,name:"时光台历",state:"待支付",price:"￥25.00",product_type:"25张图/册子 X1"},{type:2,id:1,name:"时光台历",state:"待支付",price:"￥25.00",product_type:"25张图/册子 X1"}]}