import {apiCall} from "../../services/api";
import {addError} from "./errors";
import {LOAD_KIDS} from "../actionTypes";

export const loadKids = kids => ({
	type: LOAD_KIDS,
	kids
});



export const fetchKids = () => {
	return dispatch => {
		return apiCall ("get", "api/kid")
		.then(res => {
			dispatch(loadKids(res));
			
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

export const postNewKid = text => (dispatch) => {
  return apiCall("post", `/api/kid`, { text })
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
