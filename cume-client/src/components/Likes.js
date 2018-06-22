import React from 'react';
import { connect } from 'react-redux';
import Likes from "../containers/Likes";
import './Likes.css';

 const likes =  ({ likes, info}) =>
 
   <span className="right floated">
     <Likes   /> {info.likes}
    </span> 
    
    const mapStateToProps = ( {likes, info } ) => ({
  likes,
  info
  
});


export default connect(mapStateToProps) (likes);