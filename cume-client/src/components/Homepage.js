import React from "react";
import BeerTimeLine from "./BeerTimeLine";
import KidTimeLine from "./KidTimeLine";
import ArticleTimeLine from "./ArticleTimeLine";
import './Homepage.css';

// ---- HomePage ---- //
const Homepage = (beer) => (
    <div>
    <h3 className="ui block header" id="beer">
      A Day Without Laughter Is A Day Wasted
    </h3>
     <div className="column" id="beerMobile">
     <BeerTimeLine/>
     </div>
     
     
      <div className="column" id="kids">
     <KidTimeLine/>
     </div>
     
     <div className="column" id="article">
     <ArticleTimeLine/>
     </div>
    </div>
    
    );

export default Homepage;