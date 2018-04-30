import {apiCall} from "../../services/api";
import {addError} from "./errors";
import {LOAD_BEERS} from "../actionTypes";

export const loadBeers = beers => ({
	type: LOAD_BEERS,
	beers
});



export const fetchBeers = () => {
	return dispatch => {
		return apiCall ("get", "api/beer")
		.then(res => {
			dispatch(loadBeers(res));
			})
			.catch(err => {
			dispatch(addError(err.message));
		});
	};
};




// export const fetchBeer = (beer_id) => {
//   return dispatch => {
//     return apiCall("get", `/api/beer/${beer_id}`)
//       .then(() => dispatch(loadBeer(beer_id)))
//       .catch(err => {
//         addError(err.message);
//       });
//   };
// };

export const postNewBeer = text => (dispatch) => {
  return apiCall("post", `/api/beer`, { text })
    .then(res => {})
    .catch(err => addError(err.message));
};


// export const fetchBeer = (id) => {
//   return dispatch => {
//     return apiCall("get", `/api/beer/${id}`)
//   	.then(res => {
// 			dispatch(loadBeer(res));
// 			})
      
//       .catch(err => {
//         addError(err.message);
//       });
//   };
// };
