import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../store/actions/auth";
import Logo from "../images/laughing-horse-clipart-1.jpg";
import $ from 'jquery'
import './Navbar.css';
import Media from "react-media";


     

class Navbar extends Component {
    logout = e => {
        e.preventDefault();
        this.props.logout();
    }
    
   menuClick = () => {
     
      $('.ui .item').on('click', function() {
   $('.ui .item').removeClass('active');
   $(this).addClass('active');
})
}
       
   
    
    render(){
       
        return (
             <Media query="(max-width: 480px)">
              {matches =>
            matches ? (
                 <div className="ui fixed secondary pointing menu mobile">
                 <a href='/' className="item logo">
                <img src={Logo} alt="logo"/>
                </a>
                 
                    
                   
                    
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
            ) : (
            
            <div className="ui fixed secondary pointing menu" onClick={this.menuClick} >
                 <a href='/' className="item active logo">
                <img src={Logo} alt="logo"/>
                </a>
                    <a href="#beer" className="item" >Hold My Beer</a>
                    <a href="#kids" className="item">Kids</a>
                    <a href="#articles" className="item">Funny Reads</a>
                    
                   
                    
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
             )
          }
        </Media>
            
            
             
            
            
        );
    }
}


function mapStatToProps(state){
	return {
		currentUser: state.currentUser
	};
}

export default connect(mapStatToProps, {logout})(Navbar);