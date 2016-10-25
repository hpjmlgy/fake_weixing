import React from 'react';


var Slider = React.createClass({
    render: function() {

        var sliderPhotos = this.props.data.map(function(elem) {
            return (
                <li><img src={elem.src}/></li>
            )
        });
        return (
            <div id="slider">
             <ul>{sliderPhotos}</ul>
             </div>
        )
    }
});

export default Slider;