import React from "react";
import { Link } from "react-router-dom";
import BeerTimeLine from "./BeerTimeLine";

const Homepage = (beer) => (
    <div>
    <h3 className="ui block header">
      A Day Without Laughter Is A Day Wasted!!
    </h3>
     <div className="column">
     <BeerTimeLine
      
     />
     </div>
    </div>
    
    );

export default Homepage;