import React from 'react';
import {connect} from "react-redux";
import {Link } from 'react-router-dom';
import {getCurrentBeer, getBeerInfo} from "../store/actions/beer";
import './BeerItem.css';

const BeerItem = ({title, URL, image, active, id, setBeer}) => (
	<div className="column">
	
	 <Link to={{pathname: `/${id}`}} onClick={setBeer(id)}>
		<div className="ui raised segment"  >
		
			<h5>{title}</h5>
			<img className="columnImg" src={URL} />
		</div>
      </Link>
	</div>
)



const mapDispatchToProps = dispatch => ({
  setBeer(id) {
    return () => {
      dispatch(getCurrentBeer(id));
      dispatch(getBeerInfo(id));
    };
  },
});

export default connect(null,mapDispatchToProps)(BeerItem);