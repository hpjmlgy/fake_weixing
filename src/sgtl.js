import React from 'react';
import ReactDOM from 'react-dom'
import Sgtl from './module/sgtl/Sgtl'

ReactDOM.render(
	<Sgtl title="产品规格" size_items={[{id:1,name:"8寸横版"},{id:1,name:"8寸竖版"},{id:1,name:"8寸竖版"},{id:1,name:"8寸竖版"}]} type_items={[{id:1,name:"书籍胶装"},{id:1,name:"完全平摊"},{id:1,name:"完全平摊"}]}/>,
	document.getElementById('sgtl_wrapper')
);