import React, {Component} from "react";
import {connect} from "react-redux";
import './Footer.css';
import Media from "react-media";
import {activeItem} from "../store/actions/navbar";
// import Logo from "../images/laughing-horse-clipart-1.jpg";
// import $ from 'jquery'


class Footer extends Component {
    
    
//     activeItem = e =>{
    
//     this.props.activeItem();

       
//   }





    
    render(){
        return(
            <Media query="(max-width: 480px)">
              {matches =>
            matches ? (  <div className="ui secondary pointing menu" id="footer"  >
            
                    <a href="/#beerMobile" className="item">Hold My Beer</a>
                    <a href="/#kids" className="item">Kids</a>
                    <a href="/#articles" className="item">Funny Reads</a></div>): (
            <div className="ui center aligned container footer">
  <p> &copy; {new Date().getFullYear()} Copyright CuseMe</p>
</div> 
)}
</Media>
            )
            
    }
    
}

export default connect(null,{activeItem}) (Footer);