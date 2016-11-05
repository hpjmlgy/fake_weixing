import React from 'react';
import ReactDOM from 'react-dom'
import Dzgl from './module/dzgl/Dzgl'

ReactDOM.render(
	<Dzgl data={[{name:"女汉子",phone:"15366985964",address_info:"中国 北京 朝阳区 水晶鞋xXXXXXX"},{name:"女汉子",phone:"15366985964",address_info:"中国 北京 朝阳区 水晶鞋xXXXXXX"}]}/>,
	// <Dzgl data={[]}/>,
	document.getElementById('dzgl_wrapper')
);