import React from 'react';
import { connect} from 'react-redux';
import MessageForm from "../containers/KidMessageForm";
import './KidInfo.css';
// import {removeMessage } from "../store/actions/messages";


// ---- Kid detailed page ---- //
const KidInfo = ({infok, errors}) => 
	

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

  


const mapStateToProps = ({infok}) => ({
  infok,
 
});


 
            
            

export default connect(mapStateToProps)(KidInfo);