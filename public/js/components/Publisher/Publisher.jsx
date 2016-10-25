import React from 'react';
import style from './Publisher.css';
import $ from 'jquery'


var Publisher = React.createClass({
    render: function () {

        var adGrids = this.props.data.map(function (elem) {
            var divstyle = {
                backgroundImage: 'url(' + elem.src + ')'
            };
            return (
                <div id={elem.id} key={elem.id} style={divstyle}></div>
            )
        });
        return (
            <div>{adGrids}</div>
        )
    }
});

export default Publisher;