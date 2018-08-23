import React from 'react';
import {connect} from "react-redux";
import {Link } from 'react-router-dom';
// import Likes from "../containers/Likes";
import {getCurrentArticle, getArticleInfo} from "../store/actions/article";
// import {getComments} from "../store/actions/comments";
import './ArticleItem.css';


// ---- Individual Main page Article section layout ---- //
const ArticleItem = ({title, URL, image, description, active, ida, setArticle, created_date, message,likes}) => (
	
	<div className="column">
	
		<div className="ui raised segment"  >
		    <h5>{title}</h5>
			<a href={URL} target="_blank"><img className="columnImg" src={image} alt="mainItemPic"/></a>
	    </div>
		
      	

	
	<div className="ui segment" id="articleseg">
	<div className="content">
		<p className="descriptionPara">{description}</p>
		 <Link to={{pathname: `/article${ida}`}} onClick={setArticle(ida)}>
  	<i className="comment outline icon"> Comment</i></Link>
			<span className="right floated">
			<Link to={{pathname: `/article${ida}`}} onClick={setArticle(ida)}>
     <i className="em em-rolling_on_the_floor_laughing"></i> {likes}</Link>
     </span>
     </div>
</div>
</div>
)



const mapDispatchToProps = (dispatch) => ({
  setArticle(ida) {
    return () => {
      dispatch(getCurrentArticle(ida));
      dispatch(getArticleInfo(ida));
      };
    
  },
  
});



export default connect(null,mapDispatchToProps)(ArticleItem);
