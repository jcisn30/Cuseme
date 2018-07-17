import {apiCall} from "../../services/api";
import {addError, removeError} from "./errors";
import {LOAD_ARTICLE, SET_ARTICLE_INFO, SET_COMMENTS,  REMOVE_MESSAGE,  LOAD_LIKES, SET_LIKES} from "../actionTypes";




export function getCurrentArticle(ida) {
  return {
    type: LOAD_ARTICLE,
    ida,
  };
}

export function setArticleInfo(infoa) {
  return {
    type: SET_ARTICLE_INFO,
    infoa,
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



export function getArticleInfo(id) { 
	return dispatch => {
		return apiCall("get", `api/article/${id}`)
		// 	.then(res => res.json())
			.then(infoa => {
        dispatch(setArticleInfo(infoa));
         dispatch(setComments(infoa.message));
        dispatch(setLikes(infoa.likes));
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
  let { currentUser, infoa} = getState();
  const id = currentUser.user.id;
  const id1 = infoa._id;
  return apiCall("post", `/api/article/${id1}/users/${id}/messages`, { text })
    .then(res=> {
       
      
      // dispatch(getCurrentBeer(id1));
      dispatch(getArticleInfo(id1));
      
        
    })
   
		
       .catch(err => {
			dispatch(addError(err.message));
         
          
        });
};


export const like = (likes) => (dispatch, getState) => {
  let { infoa} = getState();
  const id1 = infoa._id;
  let likes = infoa.likes +1;

  
  return apiCall("put", `/api/article/${id1}/`, {likes})
    .then((info)=> {
      
      // dispatch(updatedLikes(info.likes))
      dispatch(getArticleInfo(id1));
      
        
    }) 
        
		
       .catch(err => {
			dispatch(addError(err.message));
         
          
        });
};


export const removeMessage = (message_id, message_user, req) => (dispatch, getState) => {
  let {currentUser, infoa} = getState();
  const id = currentUser.user.id;
  const id1 = infoa._id;
  
 
  if(id === message_user){
    return apiCall("delete", `/api/article/${id1}/users/${id}/messages/${message_id}`)
      .then(res => { 
        dispatch(getCurrentArticle(id1))
      dispatch(getArticleInfo(id1))
      })
  
      .catch(err => {
        addError(err.message);
      });
  } else { 
     document.getElementById('errorname').innerHTML="You must login and be the comment owner to delete!!!"; 
  }
  
};




   