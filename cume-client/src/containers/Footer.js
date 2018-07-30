import React, {Component} from "react";
import './Footer.css';
import Media from "react-media";
// import Logo from "../images/laughing-horse-clipart-1.jpg";
import $ from 'jquery'


class Footer extends Component {
    
    
     menuClick = () => {
     
      $('.ui .item').on('click', function() {
   $('.ui .item').removeClass('active');
   $(this).addClass('active');
})
}






    
    render(){
        return(
            <Media query="(max-width: 480px)">
              {matches =>
            matches ? (  <div className="ui secondary pointing menu" id="footer" onClick={this.menuClick} >
            
                    <a className="item" >Hold My Beer</a>
                    <a className="item">Kids</a>
                    <a className="item">Funny Reads</a></div>): (
            <div className="ui center aligned container footer">
  <p> &copy; {new Date().getFullYear()} Copyright CuseMe</p>
</div> 
)}
</Media>
            )
            
    }
    
}

export default Footer;