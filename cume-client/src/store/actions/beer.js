import {apiCall} from "../../services/api";
import {addError} from "./errors";
import {LOAD_BEER, SET_BEER_INFO, SET_COMMENTS} from "../actionTypes";
import normalize from 'json-api-normalizer';



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

export function setComments(comments) {
  return {
    type: SET_COMMENTS,
    comments,
  };
}



export function getBeerInfo(id)  {
	return dispatch => {
		return apiCall ("get", `api/beer/${id}`)
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


export function getComments(messages) {
  return dispatch =>
    Promise.all(messages.map(message =>
      fetch(message)
        .then(res => res.json())
    ))
    .then(comments =>
      dispatch(setComments(comments))
    );
}
