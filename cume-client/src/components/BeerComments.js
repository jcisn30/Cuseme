import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { removeMessage } from "../store/actions/beer";
import Likes from "./BeerLikes";
import DefaultProfileImg from "../images/laughing-horse-clipart-1.jpg";
import './Comments.css';


  
 
  

   const Comments =  ({ messages, removeMessage, messages_id}) =>
   
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
           
        return <div className="comments" key={message._id}    ><span id="errorname"></span><p className="commentPara"><img className="profileImg ui avatar image" src={message.userProfileImg || DefaultProfileImg} alt="profileImage" /> <a className="userName">{message.username}</a> <Moment fromNow className="commentTime date">{message.createdAt}</Moment></p>
         <p className="commentText">{message.text}</p><a className="delete reply"  onClick={removeMessage.bind(this, message._id, message.user)}>Delete</a> 
			
	   </div>
	   
           
          
      })}
   
   
      </div>
            	
 
      
    

    </div>
  </div>
  
</div>

</div>



const mapStateToProps = ( {messages } ) => ({
  messages,
  
  	
});

export default connect(mapStateToProps, {removeMessage}) (Comments);