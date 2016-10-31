import React from 'react';
import ReactDOM from 'react-dom'
import Xzcp from './module/xzcp/Xzcp'

ReactDOM.render(
	<Xzcp products={[{id:1,name:"时尚杂志册",desc:"软皮/胶装/印刷",words:"适合加入许多记录生活的照片和文字，讲述宝宝的成长故事、定格家庭生活旅行精彩瞬间",special:"特点： 文艺范十足、轻便易翻阅。"},{id:2,name:"炫彩冲印",words:"适合加入许多记录生活的照片和文字，讲述宝宝的成长故事、定格家庭生活旅行精彩瞬间",special:"特点： 文艺范十足、轻便易翻阅。"}]}/>,
	document.getElementById('xzcp_wrapper')
);