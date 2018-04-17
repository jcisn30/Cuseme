import React, {Component} from 'react';
import { connect } from 'react-redux';
import './BeerInfo.css';


const BeerInfo = ({info}) =>

	
<div className="ui two column centered grid">
  <div className="ui card">
  <div className="content">
    <div className="left floated meta">{info.title}</div>
  </div>
  <div className="image">
    <img src={info.URL}/>
  </div>
  <div className="content">
    <span className="right floated">
      <i className="heart outline like icon"></i>
      17 likes
    </span>
    <i className="comment icon"></i>
    3 comments
  </div>
  <div className="extra content">
    <div className="ui large transparent left icon input">
      <i className="heart outline icon"></i>
      <input type="text" placeholder="Add Comment..."/>
    </div>
  </div>
</div>
</div>

const mapStateToProps = ({info}) => ({
  info,
});

export default connect(mapStateToProps)(BeerInfo);