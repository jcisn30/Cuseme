import React from 'react';
import {connect} from "react-redux";
import {Link } from 'react-router-dom';
import Likes from "./Likes";
import {getCurrentBeer, getBeerInfo} from "../store/actions/beer";
// import {getComments} from "../store/actions/comments";
import './BeerItem.css';



const BeerItem = ({title, URL, image, active, id, setBeer, created_date, message, likes}) => (
	
	<div className="column">
	
	 <Link to={{pathname: `/${id}`}} onClick={setBeer(id)}>
		<div className="ui raised segment"  >
		
			<h5>{title}</h5>
			<img className="columnImg" src={URL} alt="mainItemPic" />
				
				
	
	
	
	
	
		
		
		</div>
		
      </Link>
      	
	
	
		
     
	
	<div className="ui segment">
	<div className="content">
		 <Link to={{pathname: `/${id}`}} onClick={setBeer(id)}>
  	<i className="comment outline icon"> Comment</i></Link>
			<span className="right floated">
     <Likes />
     </span>
     </div>
</div>
</div>
)



const mapDispatchToProps = (dispatch) => ({
  setBeer(id) {
    return () => {
      dispatch(getCurrentBeer(id));
      dispatch(getBeerInfo(id));
      
       
    };
  },
});



export default connect(null,mapDispatchToProps)(BeerItem);