import React, { Component } from "react";
import { connect } from "react-redux";
import {getCurrentBeer, getBeerInfo} from "../store/actions/beer";
 import DefaultProfileImg from "../images/laughing-horse-clipart-1.jpg";
 import {removeMessage } from "../store/actions/messages";
 import MessageItem from "../components/MessageItem";

class Comments extends Component {
  componentDidMount() {
   
  //   // this.props.dispatch(getCurrentBeer());
    // this.props.getBeerInfo();
    
  // }
  
  // componentDidUpdate() {
   
  }
 


 
            
            


 

  render() {
      
      const {info} = this.props;
     
   	let commentList = info.message.map (m => (
    
    <MessageItem
      id={m._id}
      text={m.text}
     
      
    />
    

	));
	
	return commentList;
   
	}
}

 function mapStateToProps({info}){
  return{
  info
  }
};


  

export default connect(mapStateToProps)(Comments);;
  