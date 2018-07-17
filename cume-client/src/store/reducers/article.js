import {LOAD_ARTICLE, SET_ARTICLE_INFO} from "../actionTypes";

const initialState =[];
 

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLE:
      return action.ida;
        
      
    case SET_ARTICLE_INFO:
      return action.infoa;
      
     
    
   
    default:
      return state;
  }
};



