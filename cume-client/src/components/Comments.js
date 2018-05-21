import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import Likes from "./Likes";
import DefaultProfileImg from "../images/laughing-horse-clipart-1.jpg";
import './Comments.css';


  
 
  

   const Comments =  ({ messages}) =>
   
   <div className="content" id="infoMess">
    <span className="right floated">
     <Likes />
    </span>
    <i className="comment icon"></i>
    {messages.length} Comments
  
  <div className="ui feed">
<div className="event">
   
    <div className="content" id="comment">
      <div className="summary">
         <Link to="/"><p></p></Link>
         
       
      </div>
    <div className="extra text">
      {messages.map(message => {
        // const dateArray = comment.user.split('-');

        return <div className="comments"><p className="commentPara"><img className="profileImg" src={message.userProfileImg || DefaultProfileImg} alt="profileImage" /><span className="userName">{message.username}</span> <span> </span> {message.text}</p>
        <Moment fromNow className="commentTime">{message.createdAt}</Moment></div>
	   
	   
           
          
      })}
   
   
      </div>

 
      
    

    </div>
  </div>
  
</div>

</div>


const mapStateToProps = ( {messages} ) => ({
  messages
});

export default connect(mapStateToProps) (Comments);