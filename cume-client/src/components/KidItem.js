import React from 'react';
import {connect} from "react-redux";
import {Link } from 'react-router-dom';
// import Likes from "../containers/Likes";
import {getCurrentKid, getKidInfo} from "../store/actions/kid";
// import {getComments} from "../store/actions/comments";
import './KidItem.css';

// ---- Individual Main page Kid section layout ---- //
const KidItem = ({title, URL, image, active, idk, setKid, created_date, message,likes, description}) => (
	
	<div className="column">
	    <Link to={{pathname: `/kid${idk}`}} onClick={setKid(idk)}>
		<div className="ui raised segment"  >
		    <h5>{title}</h5>
			<img className="columnImg ui image rounded" src={URL} alt="mainItemPic" />
		</div>
		</Link>
      	
	
	<div className="ui segment">
	<div className="content">
	<p className="descriptionPara">{description}</p>
		 <Link to={{pathname: `/kid${idk}`}} onClick={setKid(idk)}>
  	<i className="comment outline icon"> Comment</i></Link>
			<span className="right floated">
			<Link to={{pathname: `/kid${idk}`}} onClick={setKid(idk)}>
     <i className="em em-rolling_on_the_floor_laughing"></i> {likes}</Link>
     </span>
     </div>
</div>
</div>
)



const mapDispatchToProps = (dispatch) => ({
  setKid(idk) {
    return () => {
     dispatch(getCurrentKid(idk));
     dispatch(getKidInfo(idk));
    };
    
  },
  
});



export default connect(null,mapDispatchToProps)(KidItem);
