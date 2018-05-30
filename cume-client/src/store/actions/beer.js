import {apiCall} from "../../services/api";
import {addError, removeError} from "./errors";
import {LOAD_BEER, SET_BEER_INFO, SET_COMMENTS,  REMOVE_MESSAGE} from "../actionTypes";




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




export const remove = id => ({
  type: REMOVE_MESSAGE,
  id
});

export function getBeerInfo(id) { 
	return dispatch => {
		return apiCall("get", `api/beer/${id}`)
		// 	.then(res => res.json())
			.then(info => {
        dispatch(setBeerInfo(info));
         dispatch(setComments(info.message));
        dispatch(removeError());
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

export const postNewMessage = (text) => (dispatch, getState) => {
  let { currentUser, info} = getState();
  const id = currentUser.user.id;
  const id1 = info._id;
  return apiCall("post", `/api/beer/${id1}/users/${id}/messages`, { text })
    .then(res=> {
       dispatch(getCurrentBeer(id1));
      dispatch(getBeerInfo(id1));
       
      
        
    })
   
		
       .catch(err => {
			dispatch(addError(err.message));
         
          
        });
};





export const removeMessage = (message_id, message_user, req) => (dispatch, getState) => {
  let {currentUser, info} = getState();
  const id = currentUser.user.id;
  const id1 = info._id;
  
 
  if(id === message_user){
    return apiCall("delete", `/api/beer/${id1}/users/${id}/messages/${message_id}`)
      .then(res => { 
        dispatch(getCurrentBeer(id1))
      dispatch(getBeerInfo(id1))
      })
  
      .catch(err => {
        addError(err.message);
      });
  } else { 
     document.getElementById('errorname').innerHTML="You must login and be the comment owner to delete!!!"; 
  }
  
};
