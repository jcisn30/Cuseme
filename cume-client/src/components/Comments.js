import React from 'react';
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import DefaultProfileImg from "../images/laughing-horse-clipart-1.jpg";

const Comments = ({ comments }) =>
  <div className="ui feed">
<div className="event">
    <div className="label">
      <img src={DefaultProfileImg} alt="" />
    </div>
    <div className="content">
      <div className="summary">
         <Link to="/">@&nbsp;</Link>
        <div className="date">
           <Moment className="text-muted" format="Do MMM YYYY">
		{this.date}
	   </Moment>
	    </div>
      </div>
    <div className="extra text">
      {comments.map(comment => {
        // const dateArray = comment.user.split('-');

        return <li>{comment.text}</li>;
      })}
   
   
      </div>
<div className="extra images">
        <a><img src="/images/wireframe/image.png"/></a>
        <a><img src="/images/wireframe/image.png"/></a>
      </div>
 <div className="meta">
        <a className="like">
          <i className="like icon"></i> 41 Likes
        </a>
      </div>
    </div>
  </div>
</div>


const mapStateToProps = ( {comments} ) => ({
  comments,
});

export default connect(mapStateToProps)(Comments);