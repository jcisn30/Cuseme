import React from 'react';
import { connect} from 'react-redux';
import MessageForm from "../containers/KidMessageForm";
import './KidInfo.css';
// import {removeMessage } from "../store/actions/messages";
import Media from "react-media";

// ---- Kid detailed page ---- //
const KidInfo = ({infok, errors}) => 
<Media query="(max-width: 480px)">
              {matches =>
            matches ? (
              
                <div>	
  <div className="ui grid">
  <div className="sixteen wide column">
  <div className="content" id="infoTitle">
    <div className="left floated meta">{infok.title}</div>
  </div>
  <div className="ui image">
    <img src={infok.URL} alt="kidPic"/>
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
    <div className="left floated meta">{infok.title}</div>
  </div>
  <div className="image">
    <img src={infok.URL} alt="kidPic"/>
  </div>
 
  <MessageForm errors={errors} />
  
</div>
</div>
</div>
)}
</Media>
  


const mapStateToProps = ({infok}) => ({
  infok,
 
});


 
            
            

export default connect(mapStateToProps)(KidInfo);