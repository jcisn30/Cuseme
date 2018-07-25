import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewMessage } from "../store/actions/beer";
import { postNewIMessage } from "../store/actions/beer";
import Comments from "../components/BeerComments";
import PropTypes from "prop-types";
import EmojiPicker from 'emoji-picker-react';
import JSEMOJI from 'emoji-js';
import GiphySelect from 'react-giphy-select';
import 'react-giphy-select/lib/styles.css';

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
    emojiShown: false,
    gifShown: false
    };
    
   
  }
  
 



    
 
   handleNewMessage = event => {
    
  event.preventDefault();
    this.props.postNewMessage(this.state.message);
    this.setState({ message: ""});

};



 handleNewIMessage = event => {
    
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


toogleGifState = () => {
    this.setState({
      gifShown: !this.state.gifShown
    });
  }
 

 handleGifClick = (results) => {
  // console.log(results.images.original.url)
    this.setState({
      message: results.images.original.url
     
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
          // type="input"
          placeholder="add comment"
          className="form-control"
          // data-emojiable="true"
          // data-emoji-picker="true"
          value={ this.state.message}
         
          onChange={e => this.setState({ message: e.target.value })}/>
      
            <div className="ui icon button" onClick={this.toogleEmojiState}> <i className="smile outline icon"  ></i></div>
          <div className="ui icon button" onClick={this.toogleGifState}> <i className="video icon"  ></i></div>
          </div>
         {this.state.emojiShown &&  <EmojiPicker onEmojiClick={this.handleEmojiClick}/>}
      <div>
      {this.state.gifShown &&  <GiphySelect onEntrySelect={this.handleGifClick}  />}

    </div>
      </form>
   


 </div>
)
}
}





     
function mapStateToProps(state) {
  return {
    message: state.message,
    
  };
}

MessageForm.propTypes = {
 loginError: PropTypes.func,
  removeError: PropTypes.func
}

export default connect(mapStateToProps, { postNewMessage, postNewIMessage })(MessageForm);
