import React from 'react';
import { connect } from 'react-redux';
import Likes from "../containers/KidLikes";
import './Likes.css';


// ---- Kid likes counter ---- //
const likes =  ({ likes, infok}) =>
 
   <span className="right floated">
     <span className="likesSpan"> <Likes   />   {infok.likes}</span>
    </span> 
    
    const mapStateToProps = ( {likes, infok } ) => ({
  likes,
  infok
  
});


export default connect(mapStateToProps) (likes);