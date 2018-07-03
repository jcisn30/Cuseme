import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchKids} from "../store/actions/kids";
import KidItem from "../components/KidItem";






class KidList extends Component {
	componentDidMount(){
		this.props.fetchKids();
	
	}
	

	
	render(){
		const {kids} = this.props;
		let kidList = kids.filter(k => k.active).map (k => (
    
    <KidItem
      key={k._id}
      idk={k._id}
      date={k.createdAt}
      username={k.username}
      text={k.text}
      profileImageUrl={k.profileImageUrl}
      title={k.title}
      image={k.image}
      URL={k.URL}
      likes={k.likes}
      caption={k.caption}
      description={k.description}
      create_date={k.create_date}
      active={k.active}
      
    />
    

	));
	
	return kidList;
   
	}
}
	
	
	

	
function mapStateToProps(state, ownProps){
	return{
		kids: state.kids
	};
}




export default connect(mapStateToProps, {fetchKids})(KidList);