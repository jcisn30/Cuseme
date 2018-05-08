import { SET_COMMENTS, GET_COMMENTS } from '../actionTypes';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return action.message;
    case GET_COMMENTS:
      return [...state.messages]
      
    default:
      return state;
  }
};

