import React from 'react';
import { connect } from 'react-redux';
import Likes from "../containers/KidLikes";
import './Likes.css';

 const likes =  ({ likes, infok}) =>
 
   <span className="right floated">
     <Likes   /> {infok.likes}
    </span> 
    
    const mapStateToProps = ( {likes, infok } ) => ({
  likes,
  infok
  
});


export default connect(mapStateToProps) (likes);