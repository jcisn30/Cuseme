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
     <div className="column">
     <BeerTimeLine/>
     </div>
     
      <div className="column">
     <KidTimeLine/>
     </div>
     <ArticleTimeLine/>
    </div>
    
    );

export default Homepage;