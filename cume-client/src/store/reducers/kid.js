import {LOAD_KID, SET_KID_INFO} from "../actionTypes";

const initialState =[];
 

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_KID:
      return action.idk;
        
      
    case SET_KID_INFO:
      return action.infok;
      
     
    
   
    default:
      return state;
  }
};



