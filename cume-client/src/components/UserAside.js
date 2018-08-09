import React, {Component} from "react";

import DefaultProfileImg from "../images/laughing-horse-clipart-1.jpg";


// ---- User profile page ---- ///
class UserAside extends Component {
    render(){
        return (
          <div className="ui center aligned container">
          <div className="card">
          <div className="image">
          <img src={this.props.currentUser.user.profileImageUrl || DefaultProfileImg} alt="userPic"/>
          </div>
          <div className="content">
          <div className="header">{this.props.currentUser.user.username}</div>
          </div>
          <div className="extra content">
          <span className="right floated">
            Joined in 2014
          </span>
          <span>
          <i className="user icon"></i>
          151 Friends
          </span>
    </div>
  </div>
</div>
  );
    }
}
  

export default UserAside;
