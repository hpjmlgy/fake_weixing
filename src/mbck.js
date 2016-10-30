import React from 'react';


import ReactDOM from 'react-dom'
import Mb_nav from './module/mbck/Mb_nav'


ReactDOM.render(
	<Mb_nav title={"《阳光假日》"} mb={[{id:1},{id:2},{id:3},{id:4}]} desc={"硬壳精装8X12寸30页"}/>,
	document.getElementById('mb_wrapper')
);