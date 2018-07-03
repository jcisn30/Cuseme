import {apiCall} from "../../services/api";
import {addError, removeError} from "./errors";
import {LOAD_KID, SET_KID_INFO, SET_COMMENTS,  REMOVE_MESSAGE,  LOAD_LIKES, SET_LIKES} from "../actionTypes";




export function getCurrentKid(idk) {
  return {
    type: LOAD_KID,
    idk,
  };
}

export function setKidInfo(infok) {
  return {
    type: SET_KID_INFO,
    infok,
  };
}

export function setComments(message) {
  return {
    type: SET_COMMENTS,
    message,
  };
}

export function setLikes (likes) {
  
  
  return {
    
    type: SET_LIKES,
    likes
  };
}



export function updatedLikes(likes) {
  return {
    type: LOAD_LIKES,
    likes
  };
}


export const remove = id => ({
  type: REMOVE_MESSAGE,
  id
});

export function getKidInfo(id) { 
	return dispatch => {
		return apiCall("get", `api/kid/${id}`)
		// 	.then(res => res.json())
			.then(infok => {
        dispatch(setKidInfo(infok));
         dispatch(setComments(infok.message));
        dispatch(setLikes(infok.likes));
        dispatch(removeError());
      window.location.reload()
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


export function getLikes(likes) {
  return dispatch =>
  Promise.all(likes =>
      fetch(likes)
        .then(res => res.json())
       )
    
    .then(like =>
    
      dispatch(setLikes(likes))
      
    );
    
}

export const postNewMessage = (text) => (dispatch, getState) => {
  let { currentUser, infok} = getState();
  const id = currentUser.user.id;
  const id1 = infok._id;
  return apiCall("post", `/api/kid/${id1}/users/${id}/messages`, { text })
    .then(res=> {
       
      
      // dispatch(getCurrentBeer(id1));
      dispatch(getKidInfo(id1));
      
        
    })
   
		
       .catch(err => {
			dispatch(addError(err.message));
         
          
        });
};


export const like = (likes) => (dispatch, getState) => {
  let { infok} = getState();
  const id1 = infok._id;
  let likes = infok.likes +1;

  
  return apiCall("put", `/api/kid/${id1}/`, {likes})
    .then((info)=> {
      
      // dispatch(updatedLikes(info.likes))
      dispatch(getKidInfo(id1));
      
        
    }) 
        
		
       .catch(err => {
			dispatch(addError(err.message));
         
          
        });
};


export const removeMessage = (message_id, message_user, req) => (dispatch, getState) => {
  let {currentUser, infok} = getState();
  const id = currentUser.user.id;
  const id1 = infok._id;
  
 
  if(id === message_user){
    return apiCall("delete", `/api/kid/${id1}/users/${id}/messages/${message_id}`)
      .then(res => { 
        dispatch(getCurrentKid(id1))
      dispatch(getKidInfo(id1))
      })
  
      .catch(err => {
        addError(err.message);
      });
  } else { 
     document.getElementById('errorname').innerHTML="You must login and be the comment owner to delete!!!"; 
  }
  
};




   