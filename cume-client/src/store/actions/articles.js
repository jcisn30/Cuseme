import {apiCall} from "../../services/api";
import {addError} from "./errors";
import {LOAD_ARTICLES} from "../actionTypes";

export const loadArticles = articles => ({
	type: LOAD_ARTICLES,
	articles
});



export const fetchArticles = () => {
	return dispatch => {
		return apiCall ("get", "api/article")
		.then(res => {
			dispatch(loadArticles(res));
			
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

export const postNewArticle = text => (dispatch) => {
  return apiCall("post", `/api/article`, { text })
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
