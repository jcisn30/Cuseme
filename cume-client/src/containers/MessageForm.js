import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewMessage } from "../store/actions/beer";
import Comments from "../components/Comments";
import PropTypes from "prop-types";



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
   const { errors} = this.props;
		
   
			
    return (
      <div>
      <Comments />
      <form className="ui form" onSubmit={this.handleNewMessage}>
     	{errors.message && (
				<div className="ui error message">
					<div className="header">
					{errors.message}
					</div>
				</div>
					)}
     <div className="field">
  
        <input
          type="text"
          className="form-control"
          value={this.state.message}
          onChange={e => this.setState({ message: e.target.value })
          }
        />
        	
        </div>
        
        <button type="submit"  className="ui button">
          Add Commnet
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

MessageForm.propTypes = {
 loginError: PropTypes.func,
  removeError: PropTypes.func
}

export default connect(mapStateToProps, { postNewMessage })(MessageForm);
