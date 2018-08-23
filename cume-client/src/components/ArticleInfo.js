import React from 'react';
import { connect} from 'react-redux';
import MessageForm from "../containers/ArticleMessageForm";
import './ArticleInfo.css';
// import {removeMessage } from "../store/actions/messages";

import Media from "react-media";

// ---- Article detailed page ---- //
const ArticleInfo = ({infoa, errors}) => 
	 <Media query="(max-width: 480px)">
              {matches =>
            matches ? (
  <div>	
  <div className="ui grid">
  <div className="sixteen wide column">
  <div className="content" id="infoTitle">
    <div className="left floated meta">{infoa.title}</div>
  </div>
  <div className="ui image">
    <img src={infoa.image} alt="ArticlePic"/>

  </div>
     <p id="articleinfop">{infoa.description}</p>
  <MessageForm errors={errors} />
  
    </div>
  </div>
</div>

  ) : (

<div>	
<div className="ui two column centered grid">
  <div className="ui card">
  <div className="content" id="infoTitle">
    <div className="left floated meta">{infoa.title}</div>
  </div>
  <div className="image">
    <img src={infoa.image} alt="ArticlePic"/>
  </div>
 <p id="articleinfop">{infoa.description}</p>
  <MessageForm errors={errors} />
  
</div>
</div>
</div>
)}
</Media>
  
const mapStateToProps = ({infoa}) => ({
  infoa,
 
});


 
export default connect(mapStateToProps)(ArticleInfo);