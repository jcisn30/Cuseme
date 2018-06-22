import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchBeers} from "../store/actions/beers";
import BeerItem from "../components/BeerItem";






class BeerList extends Component {
	componentDidMount(){
		this.props.fetchBeers();
	
	}
	

	
	render(){
		const {beers} = this.props;
		let beerList = beers.filter(b => b.active).map (b => (
    
    <BeerItem
      key={b._id}
      id={b._id}
      date={b.createdAt}
      username={b.username}
      text={b.text}
      profileImageUrl={b.profileImageUrl}
      title={b.title}
      image={b.image}
      URL={b.URL}
      likes={b.likes}
      caption={b.caption}
      description={b.description}
      create_date={b.create_date}
      active={b.active}
      
    />
    

	));
	
	return beerList;
   
	}
}
	
	
	

	
function mapStateToProps(state, ownProps){
	return{
		beers: state.beers
	};
}




export default connect(mapStateToProps, {fetchBeers})(BeerList);