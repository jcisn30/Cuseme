import React, { Component } from "react";
import { connect } from "react-redux";
import { like } from "../store/actions/article";


// ---- Article likes counter --- //
class Likes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: null
    }
  
    
  }
  

  
  updateLikes = likes => {
    likes.preventDefault();
    this.props.like(this.state.likes);
    this.setState({likes: ""});

   
  
    

    // if(!this.state.updated) {
      this.setState((likes, props) => {
        return {
          likes: this.state.likes + 1,
           
          // updated: true
        } 
      });

    // } else {

    //   this.setState((prevState, props) => {
    //     return {
    //       likes: prevState.likes,
    //       updated: false
    //     };
    //   });

    
  
  }

  render() {
//   const { errors} = this.props;
	

    return(
      
      <div className="likes">
      <i className="em em-rolling_on_the_floor_laughing faa-shake animated-hover" onClick={this.updateLikes}></i>
        
      </div>
    );
  }
}
			
    
function mapStateToProps(state) {
  return {
    likes: state.likes
  };
}




export default connect(mapStateToProps, { like })(Likes);