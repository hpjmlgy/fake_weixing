import React from 'react';
import ReactDOM from 'react-dom'
import Yhj from './module/yhj/Yhj'

ReactDOM.render(
	<Yhj coupon={[{name:"炫彩冲印",condition:"满100可使用",price:30,date:"2016.10.03"},{name:"炫彩冲印",condition:"满100可使用",price:30,date:"2016.10.03"}]}/>,
	document.getElementById('yhj_wrapper')
);