import React from 'react';


var Product = React.createClass({
    render: function() {

        var litem_num = Object.keys(this.props.litems).length;
        var product_litems = this.props.litems.map(function(elem) {

            var top_offset = (elem.id - 1) * 370;
            var style = {
                top: top_offset + 'px'
            };
            return (
                <div className="litem"  style={style}>
                    <p>时尚杂志册</p>
                    <a id={'litem'+elem.id}>35元起订</a>
                    <img src="/public/img/1.jpg"/>
                </div>
            )



        });

        var product_ritems = this.props.ritems.map(function(elem) {

            var top_offset = (elem.id - 1) * 500;

            return (
                <div  className="ritem"  style={{top:top_offset+'px'}} >
                   <p>炫彩冲印</p>
                   <p>13种尺寸任选  真彩还原  健康环保</p>
                   <p>传统冲印工艺  进口相纸  长久保存</p>
                   <p>0.3</p>
                   <p>元起/张</p>
                   <img src="/public/img/2.jpg"/>
                </div>
            )
        })



        return (
            <div className="product_container">
                {product_litems}
                {product_ritems}
            </div>
        )
    }
});

export default Product;