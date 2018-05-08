import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewMessage, getComments } from "../store/actions/beer";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Comments from "../components/Comments";
import DefaultProfileImg from "../images/laughing-horse-clipart-1.jpg";



class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }

  handleNewMessage = event => {
    event.preventDefault();
    this.props.postNewMessage(this.state.message);
    this.setState({ message: ""});
    
    
  };
  
  
  
  

  render() {
    
    return (
      <div>
      <Comments />
      <form className="ui form" onSubmit={this.handleNewMessage}>
     <div class="field">
     <label>Add Comment</label>
  
        <input
          type="text"
          className="form-control"
          value={this.state.message}
          onChange={e => this.setState({ message: e.target.value })}
        />
        
        </div>
        <button type="submit"  class="ui button">
          Add my message!
        </button>
      </form>
    
  



 </div>
)
}
}

function mapStateToProps(state) {
  return {
    message: state.message
  };
}



export default connect(mapStateToProps, { postNewMessage })(MessageForm);
