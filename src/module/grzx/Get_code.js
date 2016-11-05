import React from 'react';
var $ = require('jquery');



var Get_code = React.createClass({
	getInitialState: function() {
		return {
			get_code: 0,
			time_count: "(60s)"
		}
	},
	tick: function() {
		var time_string = this.state.time_count
		var actual_time = time_string.substring(1, time_string.length - 2)
		var time = "(" + (actual_time - 1) + "s)"
		if (actual_time > 0) {
			this.setState({
				time_count: time
			})
		} else {
			this.setState({
				time_count: "(0s)"
			})
			this.setState({
				get_code: 0
			})
			clearInterval(this.interval)
			this.setState({
				time_count: "(60s)"
			})
		}

	},
	handle_checkCode: function(e) {
		if (this.state.get_code == 0) {
			//还未计时
			//
			//改变显示状态
			this.setState({
				get_code: this.state.get_code + 1
			});
			//启动计时器
			this.interval = setInterval(() => this.tick(), 1000);

		} else {
			console.log("hehe");
			//已经计时,不做任何处理
		}
	},
	render: function() {
		var t = this;
		if (this.state.get_code == 0) {

			return (
				<div onTouchTap={t.handle_checkCode} className="get_code_wrapper">
                    <span>获取验证码</span>
                </div>
			)

		} else {

			return (
				<div  className="get_code_wrapper2">
                    <span>获取验证码</span>
                    <span>{this.state.time_count}</span>
                </div>
			)

		};


	}
});

export default Get_code;