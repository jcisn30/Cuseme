import React from 'react';
import { connect} from 'react-redux';
import MessageForm from "../containers/ArticleMessageForm";
import './ArticleInfo.css';
// import {removeMessage } from "../store/actions/messages";





const ArticleInfo = ({infoa, errors}) => 
	

<div>	
<div className="ui two column centered grid">
  <div className="ui card">
  <div className="content" id="infoTitle">
    <div className="left floated meta">{infoa.title}</div>
  </div>
  <div className="image">
    <img src={infoa.URL} alt="ArticlePic"/>
  </div>
 
  <MessageForm errors={errors} />
  
  
    
</div>
</div>


                   
                        
 

</div>

  

 


const mapStateToProps = ({infoa}) => ({
  infoa,
 
});


 
            
            

export default connect(mapStateToProps)(ArticleInfo);