import React from 'react';


var Product = React.createClass({
    render: function() {

        var product_litems = this.props.data.litems.map(function(index, elem) {
            return (
                <div className="litem">
                    <p>时尚杂志册</p>
                    <a>35元起订</a>
                    <img src="/public/img/1.jpg"/>
                </div>
            )
        });

        var product_ritems = this.props.data.ritems.map(function(index, elem) {
            return (
                <div  className="ritem"  >
                   <p>炫彩冲印</p>
                   <p>13种尺寸任选  真彩还原  健康环保</p>
                   <p>传统冲印工艺  进口相纸  长久保存</p>
                   <p style={"color:red;font-size: 18px;"}>0.3元起/张</p>
                   <img src="/public/img/2.jpg"/>
                </div>
            )
        })



        return ({
            <div className="product_container">
                {product_litems}
                {product_ritems}
            </div>
        })
    }
});

export default Product;