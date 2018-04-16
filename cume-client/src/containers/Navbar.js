import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../store/actions/auth";
import Logo from "../images/laughing-horse-clipart-1.jpg";


class Navbar extends Component {
    logout = e => {
        e.preventDefault();
        this.props.logout();
    }
    render(){
        return (
            
            <div className="ui top stackable menu">
                <Link to='/' className="item">
                <img src={Logo} alt="logo"/>
                </Link>
                    <a className="item">Features</a>
                    <a className="item">Testimonials</a>
                    <a className="item">Features</a>
                {this.props.currentUser.isAuthenticated ? (
                     <div className="right menu">
                     <Link to="/UserAside" className="item">{this.props.currentUser.user.username}</Link>
                     <a className='item' onClick={this.logout}>Log out</a>
                     </div>
                ) : (
              <div className="right menu">
                    <Link to="/signup" className="item">Sign Up</Link>
                    <Link to="/signin" className="item">Log In</Link>
              </div>
              )}
            </div>
            
        );
    }
}


function mapStatToProps(state){
	return {
		currentUser: state.currentUser
	};
}

export default connect(mapStatToProps, {logout})(Navbar);