import React, {Component} from 'react';
import { connect} from 'react-redux';
import {Link } from 'react-router-dom';
import Moment from "react-moment";
import MessageForm from "../containers/MessageForm";

import {getCurrentBeer, getBeerInfo} from "../store/actions/beer";
import './BeerInfo.css';
import DefaultProfileImg from "../images/laughing-horse-clipart-1.jpg";
// import {removeMessage } from "../store/actions/messages";





const BeerInfo = ({info}) => 


<div>	
<div className="ui two column centered grid">
  <div className="ui card">
  <div className="content" id="infoTitle">
    <div className="left floated meta">{info.title}</div>
  </div>
  <div className="image">
    <img src={info.URL}/>
  </div>
 
  <MessageForm />
  
    
</div>
</div>


                   
                        
 

</div>

  

 


const mapStateToProps = ({info}) => ({
  info,
  
});


 
            
            

export default connect(mapStateToProps)(BeerInfo);