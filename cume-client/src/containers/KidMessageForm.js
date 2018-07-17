import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewMessage } from "../store/actions/kid";
import Comments from "../components/KidComments";
import PropTypes from "prop-types";
import EmojiPicker from 'emoji-picker-react';
import JSEMOJI from 'emoji-js';
import './MessageForm.css';


 
//emoji set up
let jsemoji = new JSEMOJI();
// set the style to emojione (default - apple)
jsemoji.img_set = 'emojione';
// set the storage location for all emojis
jsemoji.img_sets.emojione.path =   'https://cdn.jsdelivr.net/emojione/assets/3.0/png/32/';

// alert(jsemoji.replace_mode);


//some more settings...
jsemoji.supports_css = false;
jsemoji.allow_native = true;
jsemoji.replace_mode = 'unified';


class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      emojiShown: false
    };
  }
  
   
  
  handleNewMessage = event => {
    event.preventDefault();
    this.props.postNewMessage(this.state.message);
    this.setState({ message: ""});
    
    
  };
  
  
  toogleEmojiState = () => {
    this.setState({
      emojiShown: !this.state.emojiShown
    });
  }
  
  handleEmojiClick = (n, e) => {
    let emoji = jsemoji.replace_colons(`:${e.name}:`);
    this.setState({
      message: this.state.message + emoji
     
    });
  }

  
  
  render() {
   const { errors} = this.props;
		
   
			
    return (
      <div>
      <Comments errors={errors}/>
      <form className="ui form" onSubmit={this.handleNewMessage}>
     	{errors.message && (
				<div className="ui error message">
					<div className="header">
					{errors.message}
					</div>
				</div>
					)}
     <div className="ui fluid action input">
  
        <input
          type="text"
          className="form-control"
          // data-emojiable="true"
          value={this.state.message}
          onChange={e => this.setState({ message: e.target.value })
          
          }
        />
        
         <div className="ui icon button" onClick={this.toogleEmojiState}> <i className="smile outline icon"  ></i></div>
    
        </div>
      {this.state.emojiShown &&  <EmojiPicker onEmojiClick={this.handleEmojiClick}/>}
       
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
