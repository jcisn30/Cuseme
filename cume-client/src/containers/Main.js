import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import UserAside from "../components/UserAside";
import BeerInfo from "../components/BeerInfo";
import KidInfo from "../components/KidInfo";
import ArticleInfo from "../components/ArticleInfo";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";




const Main = props => {
    // {props.children}
    const { authUser, errors, removeError, currentUser } = props;

    return (
        <div className="main">
          <Switch>
            <Route exact path="/" render={props => <Homepage {...props}   />}  />
            <Route exact path="/signin" render={props => {
                return (
                    <AuthForm removeError={removeError} errors={errors} onAuth={authUser} buttonText="Log In" heading="Welcome Back" {...props} />
                );
            }}
            />
            <Route exact path="/signup" render={props => {
                return (
                    <AuthForm removeError={removeError} errors={errors} onAuth={authUser} signUp buttonText="Sign Me Up!" heading="Join CuseMe Today" {...props} />
                );
            }}
            />
            <Route exact path="/useraside" render={props => {
                return (
                    <UserAside onAuth={authUser} currentUser={currentUser} {...props} />
                );
            }}
            />
            <Route exact path="/beer:id" render={props => {
                return (
                    
                     <BeerInfo removeError={removeError} errors={errors} {...props} />
                );
            }}
            />
            
            <Route exact path="/kid:id" render={props => {
                return (
                    
                     <KidInfo removeError={removeError} errors={errors} {...props} />
                );
            }}
            />
            
            
            <Route exact path="/article:id" render={props => {
                return (
                    
                     <ArticleInfo removeError={removeError} errors={errors} {...props} />
                );
            }}
            />
            
            
          </Switch>
        </div>
        );
    };

function mapStateToProps(state){
    return{
        currentUser: state.currentUser,
        errors: state.errors
        
    
    };
        
        
}


export default withRouter(connect(mapStateToProps,{authUser,removeError})(Main));