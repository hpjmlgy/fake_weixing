import React from 'react';
import ReactDOM from 'react-dom'
import Tg_item from './module/tg_all/Tg_item'

ReactDOM.render(
	<Tg_item items={[{id:"1",name:"袁甜甜",score:"345",desc:"一张照片记载一个故事;",admire:"投票"},{id:"2",name:"袁甜甜",score:"345",desc:"一张照片记载一个故事;",admire:"投票"},{id:"3",name:"袁甜甜",score:"345",desc:"一张照片记载一个故事;",admire:"投票"}]} />,
	document.getElementById('tg_all_wrapper')
);