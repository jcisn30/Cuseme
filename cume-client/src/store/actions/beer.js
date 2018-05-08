import {apiCall} from "../../services/api";
import {addError} from "./errors";
import {LOAD_BEER, SET_BEER_INFO, SET_COMMENTS} from "../actionTypes";




export function getCurrentBeer(id) {
  return {
    type: LOAD_BEER,
    id,
  };
}

export function setBeerInfo(info) {
  return {
    type: SET_BEER_INFO,
    info,
  };
}

export function setComments(message) {
  return {
    type: SET_COMMENTS,
    message,
  };
}


export function getBeerInfo(id) { 
	return dispatch => {
		return apiCall("get", `api/beer/${id}`)
		// 	.then(res => res.json())
			.then(info => {
        dispatch(setBeerInfo(info));
         dispatch(setComments(info.message));
        
			})
			.catch(err => {
			dispatch(addError(err.message));
			
		});
	    
  };
}




export function getComments(message) {
  return dispatch =>
    Promise.all(message.map(message =>
      fetch(message)
        .then(res => res.json())
    ))
    .then(message =>
      dispatch(setComments(message))
    );
    
}

export const postNewMessage = text => (dispatch, getState) => {
  let { currentUser, info} = getState();
  const id = currentUser.user.id;
  const id1 = info._id;
  return apiCall("post", `/api/beer/${id1}/users/${id}/messages`, { text })
    .then(res=> {
       dispatch(getCurrentBeer(id1));
      dispatch(getBeerInfo(id1));
      
      
        
    })
   
		
        .catch(err => addError(err.message));
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



// // CLICK LISTENER
// const userClick = (id) => {
//   return dispatch => {
// 		return apiCall("get", `api/beer/${id}`)
// 		// 	.then(res => res.json())
// 			.then(info => {
//         dispatch(setBeerInfo(info));
//         dispatch(setComments(info.message));
        
// 			})
// 			.catch(err => {
// 			dispatch(addError(err.message));
			
// 		});
	    
//   };
// }
