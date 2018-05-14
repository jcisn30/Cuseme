import React from 'react';
import { connect} from 'react-redux';
import MessageForm from "../containers/MessageForm";
import './BeerInfo.css';
// import {removeMessage } from "../store/actions/messages";





const BeerInfo = ({info, errors}) => 
	

<div>	
<div className="ui two column centered grid">
  <div className="ui card">
  <div className="content" id="infoTitle">
    <div className="left floated meta">{info.title}</div>
  </div>
  <div className="image">
    <img src={info.URL} alt="beerPic"/>
  </div>
 
  <MessageForm errors={errors} />
  
  
    
</div>
</div>


                   
                        
 

</div>

  

 


const mapStateToProps = ({info}) => ({
  info,
  
});


 
            
            

export default connect(mapStateToProps)(BeerInfo);