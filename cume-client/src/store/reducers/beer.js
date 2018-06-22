import {LOAD_BEER, SET_BEER_INFO} from "../actionTypes";

const initialState =[];
 

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BEER:
      return action.id;
        
      
    case SET_BEER_INFO:
      return action.info;
      
     
    
   
    default:
      return state;
  }
};



