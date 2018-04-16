import {apiCall} from "../../services/api";
import {addError} from "./errors";
import {LOAD_BEER, SET_BEER_INFO} from "../actionTypes";


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


export function getBeerInfo(id) {
	return dispatch => {
		return apiCall("get", `api/beer/${id}`)
		// 	.then(res => res.json())
			.then(info => {
        dispatch(setBeerInfo(info));
			})
			.catch(err => {
			dispatch(addError(err.message));
		});
	}
};




