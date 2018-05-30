import { SET_COMMENTS, REMOVE_MESSAGE } from '../actionTypes';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return action.message;
       case REMOVE_MESSAGE:
      return state.filter(messages => messages._id !== action.id);
   
      
    default:
      return state;
  }
};

