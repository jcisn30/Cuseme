import React from 'react';
import { connect } from 'react-redux';
import Likes from "../containers/BeerLikes";
import './Likes.css';


// ---- Beer likes counter ---- //
const likes =  ({ likes, info}) =>
 
 <span className="right floated">
    <span className="likesSpan"> <Likes   />   {info.likes}</span>
    </span> 
    
  const mapStateToProps = ( {likes, info } ) => ({
  likes,
  info
  
});


export default connect(mapStateToProps) (likes);