import React from 'react';


import ReactDOM from 'react-dom'
import Mbtz from './module/mbtz/Mbtz'


ReactDOM.render(
	<Mbtz title="阳光夏日" type="24寸X12寸 58页"  mb={[{id:1},{id:2},{id:3},{id:4}]}/>,
	document.getElementById('mb_wrapper')
);