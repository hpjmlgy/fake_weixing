import React from 'react';


var Middle_story = React.createClass({
  render: function() {

    return (
      <div>
        <div className={"story_pic"}></div>
        <div className={"story_name"}>
             <p>{this.props.story.title}</p>
             <a href={this.props.story.url}>{this.props.story.desc}</a>
        </div>
        <div className="activity">
              <head>{this.props.act.title}</head>
               <p>{this.props.act.level1}</p>
               <p>{this.props.act.level2}</p>
               <p>{this.props.act.level3}</p>
               <p>{this.props.act.level4}</p>
        </div>
      </div>

    )
  }
});

export default Middle_story