import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../store/actions/auth";
import {activeItem} from "../store/actions/navbar";
import Logo from "../images/laughing-horse-clipart-1.jpg";
// import $ from 'jquery'
import './Navbar.css';
import Media from "react-media";


     

class Navbar extends Component {
    
    
    logout = e => {
        e.preventDefault();
        this.props.logout();
    }
    
  activeItem = e =>{
    
    this.props.activeItem();

       
  }
    
    render(){
       
        return (
             <Media query="(max-width: 480px)">
              {matches =>
            matches ? (
                 <div className="ui fixed secondary pointing menu mobile" onFocus={this.activeItem}>
                 <a href='/' className="active item">
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
            
            <div className="ui fixed secondary pointing menu" onFocus= {this.activeItem} >
                 <a href='/' className="active item"  >
                <img src={Logo} alt="logo"/>
                </a>
                    <a href="/#beer" className="item"  >Hold My Beer</a>
                    <a href="/#kids" className="item">Kids</a>
                    <a href="/#articles" className="item"  >Funny Reads</a>
                    
                   
                    
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


function mapStateToProps(state){
	return {
		currentUser: state.currentUser
	};
}

export default connect(mapStateToProps, {activeItem, logout}) (Navbar);