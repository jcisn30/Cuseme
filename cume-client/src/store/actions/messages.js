import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_MESSAGES, REMOVE_MESSAGE } from "../actionTypes";
import {getCurrentBeer, getBeerInfo} from "./beer";

export const loadMessages = messages => ({
  type: LOAD_MESSAGES,
  messages
});

export const remove = id => ({
  type: REMOVE_MESSAGE,
  id
});

export const removeMessage = (user_id, message_id, beer_id) => {
  return dispatch => {
    return apiCall("delete", `/api/beer/${beer_id}/users/${user_id}/messages/${message_id}`)
      .then(() => dispatch(remove(message_id)))
      .catch(err => {
        addError(err.message);
      });
  };
};

// export const fetchMessages = (getState) => {
//   let { currentUser, info } = getState();
//   const id = currentUser.user.id;
//   const id1 = info._id;
//   return dispatch => {
//     return apiCall("GET", '/api/beer/${id1}/users/${id}/message')
//       .then(res => {
//         dispatch(loadMessages(res));
//       })
//       .catch(err => {
//         dispatch(addError(err.message));
//       });
//   };
// };

// export const postNewMessage = text => (dispatch, getState) => {
//   let { currentUser, info } = getState();
//   const id = currentUser.user.id;
//   const id1 = info._id;
//   return apiCall("post", `/api/beer/${id1}/users/${id}/messages`, { text })
//     .then(res => {
      
  
//     })
//     .catch(err => addError(err.message));
// };
