import React from 'react';
import ReactDOM from 'react-dom'
import Wlxq from './module/wlxq/Wlxq'



ReactDOM.render(
	<Wlxq wl_items={[{id:1,info:"[宁波]XXX部已出发",time:"2016.10.5  04:03:12"},{id:1,info:"[宁波]XXX部已出发",time:"2016.10.5  04:03:12"},{id:1,info:"[宁波]XXX部已出发",time:"2016.10.5  04:03:12"}]} />,
	document.getElementById('wlxq_wrapper')
);