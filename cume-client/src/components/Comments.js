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
    <div className="label">
      <img src={DefaultProfileImg} alt="" />
    </div>
    <div className="content" id="comment">
      <div className="summary">
         <Link to="/"><p></p></Link>
         
       
      </div>
    <div className="extra text">
      {messages.map(message => {
        // const dateArray = comment.user.split('-');

        return <div>{message.username}
        <p>{message.text}</p>
        <p><Moment toNow className="text-muted" format="Do MMM YYYY">
		{message.createdAt}
	   </Moment></p></div>
	   
	   
           
          
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