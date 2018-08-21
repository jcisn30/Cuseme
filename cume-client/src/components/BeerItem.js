
import React from 'react';
import {connect} from "react-redux";
import {Link } from 'react-router-dom';
// import Likes from "../containers/Likes";
import {getCurrentBeer, getBeerInfo} from "../store/actions/beer";
// import {getComments} from "../store/actions/comments";
import './BeerItem.css';


// ---- Individual Main page Beer section layout ---- //
const BeerItem = ({title, URL, image, active, id, description, setBeer, created_date, message,likes}) => (
	
	<div className="column">
		<Link to={{pathname: `/beer${id}`}} onClick={setBeer(id)}>
			<div className="ui raised segment"  >
			<h5>{title}</h5>
			<img className="columnImg ui image rounded" src={URL} alt="mainItemPic" />
			</div>
		</Link>
      	
	
	<div className="ui segment">
	<div className="content">
	<p className="descriptionPara">{description}</p>
		 <Link to={{pathname: `/beer${id}`}} onClick={setBeer(id)}>
  	<i className="comment outline icon"> Comment</i></Link>
			<span className="right floated">
			<Link to={{pathname: `/beer${id}`}} onClick={setBeer(id)}>
     <i className="em em-rolling_on_the_floor_laughing"></i> {likes}</Link>
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
