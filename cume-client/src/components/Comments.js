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
         <Link to="/"></Link>
       <div className="date">
        <Moment className="text-muted" format="Do MMM YYYY">
		{messages.date}
	   </Moment>
	    </div>
      </div>
    <div className="extra text">
      {messages.map(message => {
        // const dateArray = comment.user.split('-');

        return <p> {message.text} </p>
         
          
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