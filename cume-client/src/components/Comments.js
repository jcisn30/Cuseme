import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { removeMessage } from "../store/actions/beer";
import Likes from "./Likes";
import DefaultProfileImg from "../images/laughing-horse-clipart-1.jpg";
import './Comments.css';


  
 
  

   const Comments =  ({ messages, removeMessage, messages_id, info}) =>
   
   <div className="content" id="infoMess">
    <Likes /> 
    <i className="comment icon"></i>
    {messages.length} Comments
  
  <div className="ui feed">
<div className="event">
   
    <div className="content" id="comment">
      <div className="summary">
         <Link to="/"><p></p></Link>
         
       
      </div>

    <div className="extra text">
      {messages.map((message, i) => {
        // const dateArray = comment.user.split('-');
           
        return <div className="comments" key={message._id}    ><span id="errorname"></span><p className="commentPara"><img className="profileImg" src={message.userProfileImg || DefaultProfileImg} alt="profileImage" /> <span className="userName">{message.username}</span> <span> </span> {message.text}</p>
        <Moment fromNow className="commentTime">{message.createdAt}</Moment> <a className="delete"  onClick={removeMessage.bind(this, message._id, message.user)}>Delete</a> 
			
	   </div>
	   
           
          
      })}
   
   
      </div>
            	
 
      
    

    </div>
  </div>
  
</div>

</div>



const mapStateToProps = ( {messages, info } ) => ({
  messages,
  info
  	
});

export default connect(mapStateToProps, {removeMessage}) (Comments);