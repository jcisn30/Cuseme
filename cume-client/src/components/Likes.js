import React from 'react';
import './Likes.css';

class Likes extends React.Component {

  constructor(props){

    super(props);
    this.state = {
      likes: 0,
      updated: false
    };

  }

  updateLikes = () => {

    if(!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + 1,
          updated: true
        };
      });

    } else {

      this.setState((prevState, props) => {
        return {
          likes: prevState.likes - 1,
          updated: false
        };
      });

    }
  }

  render(){

    return(
      <div className="likes">
       <i class="thumbs up outline icon" onClick={this.updateLikes}> Likes {this.state.likes}</i>
        
      </div>
    );
  }
}

export default Likes;

