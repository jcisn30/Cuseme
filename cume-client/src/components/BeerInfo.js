import React from 'react';
import { connect} from 'react-redux';
import MessageForm from "../containers/BeerMessageForm";
import './BeerInfo.css';
// import {removeMessage } from "../store/actions/messages";
import Media from "react-media";





const BeerInfo = ({info, errors}) => 
	 <Media query="(max-width: 480px)">
              {matches =>
            matches ? (
  
  <div>	
<div className="ui grid">
  <div className="sixteen wide column">
  <div className="content" id="infoTitle">
    <div className="left floated meta">{info.title}</div>
  </div>
  <div className="ui image">
    <img src={info.URL} alt="beerPic"/>
  </div>
 
  <MessageForm errors={errors} />
  
  
    
</div>
</div>


                   
                        
 

</div>

  ) : (
    
     <div>	
<div className="ui two column centered grid">
  <div className="ui card">
  <div className="content" id="infoTitle">
    <div className="left floated meta">{info.title}</div>
  </div>
  <div className="ui image">
    <img src={info.URL} alt="beerPic"/>
  </div>
 
  <MessageForm errors={errors} />
  
  
    
</div>
</div>


                   
                        
 

</div>
)}
</Media>

  

 


const mapStateToProps = ({info}) => ({
  info,
 
});


 
            
            

export default connect(mapStateToProps)(BeerInfo);