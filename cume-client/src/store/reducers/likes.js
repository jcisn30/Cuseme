import {SET_LIKES} from '../actionTypes';
 


  
export default (state = 0, action) => {

  switch (action.type) {
    case SET_LIKES:
       return action.likes
       
  
      
  // case 'INCREMENT':
  //     return {
  //       likes: state.likes + 1
  // };
  //   case 'DECREMENT':
  //     return Object.assign({}, state, { counter: state.counter - 1 });
    default:
      return state
  }
}


