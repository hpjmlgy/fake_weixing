import React from 'react';
import ReactDOM from 'react-dom'
import Hb from './module/hb/Hb'

ReactDOM.render(
	<Hb hb={[{price:5,date:"有效期至2016.10.03"},{price:5,date:"有效期至2016.10.03"}]} />,
	document.getElementById('hb_wrapper')
);