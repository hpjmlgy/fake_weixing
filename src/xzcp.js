import React from 'react';
import ReactDOM from 'react-dom'
import Xzcp from './module/xzcp/Xzcp'

ReactDOM.render(
	<Xzcp products={[{id:1,name:"时尚杂志册",desc:"软皮/胶装/印刷"}]}/>,
	document.getElementById('xzcp_wrapper')
);