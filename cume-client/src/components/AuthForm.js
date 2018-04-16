import React, { Component } from "react";
import PropTypes from "prop-types";

class AuthForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			username: "",
			password: "",
			profileImageUrl: ""
		};
	}
		
		
		handleSubmit = e => {
			e.preventDefault();
			const authType = this.props.signUp ? "signup" : "signin";
			this.props.onAuth(authType, this.state).then(() => {
				this.props.history.push("/");
			})
			.catch(() => {
		        return;
		      });
		};
		
		handleChange = e => {
			this.setState({
				[e.target.name]: e.target.value
			});
		};
		
		
		
		
	render() {
		const {email, username, password, profileImageUrl} = this.state;
		const {heading, buttonText, signUp, errors, history, removeError } = this.props;
		
		history.listen(() => {
		      removeError();
		    });
			
		
		return( 
			<div className="ui center aligned container">
				<form className="ui form" onSubmit={this.handleSubmit}>
				<h2>{heading}</h2>
				{errors.message && (
				<div className="ui error message">
					<div className="header">
					{errors.message}
					</div>
				</div>
					)}
				  <div className="field">
					<label htmlFor="email">Email:</label>
					<input type="text" name="email" placeholder="Email" id="email" onChange={this.handleChange} value={email}/>
					<label htmlFor="password">Password</label>
					<input type="password" name="password" placeholder="Password" id="password" onChange={this.handleChange} value={password} />
				  </div>
				  {signUp && (
					<div className="field">
					<label htmlFor="username">Username</label>
					<input type="text" name="username" placeholder="Username" id="username" onChange={this.handleChange} value={username} />
					<label htmlFor="image-url">Image URL</label>
					<input type="text" name="profileImageUrl" placeholder="profileImageUrl" id="image-url" onChange={this.handleChange}  value={profileImageUrl} />
				  </div>
				  
				  )
				  }
				  <button type="submit" className="ui button">
					  {buttonText}
				  </button>
				  
				 </form>
			</div>
			    
		);
	}
}

AuthForm.propTypes = {
  buttonText: PropTypes.string,
  errors: PropTypes.object,
  heading: PropTypes.string,
  history: PropTypes.object,
  onAuth: PropTypes.func,
  signIn: PropTypes.bool,
  removeError: PropTypes.func
};

export default AuthForm;