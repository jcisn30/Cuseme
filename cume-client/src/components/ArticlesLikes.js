import React from 'react';
import { connect } from 'react-redux';
import Likes from "../containers/ArticleLikes";
import './Likes.css';


// ---- Article likes counter ---- //
const likes =  ({ likes, infoa}) =>
 
 <span className="right floated">
      <span className="likesSpan"> <Likes   />   {infoa.likes}</span>
    </span> 
    
  const mapStateToProps = ( {likes, infoa } ) => ({
  likes,
  infoa
  
});


export default connect(mapStateToProps) (likes);