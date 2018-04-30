import { SET_COMMENTS } from '../actionTypes';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return action.comments.sort((ma, mb) =>
        ma._id - mb._id
      );
    default:
      return state;
  }
};