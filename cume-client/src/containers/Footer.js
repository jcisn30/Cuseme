import React, {Component} from "react";
import './Footer.css';


class Footer extends Component {
    render(){
        return(
            <div className="ui center aligned container footer">
  <p> &copy; {new Date().getFullYear()} Copyright: CuseMe</p>
</div>
            )
    }
}

export default Footer;