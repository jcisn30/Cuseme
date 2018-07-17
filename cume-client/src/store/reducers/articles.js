import {LOAD_ARTICLES} from "../actionTypes";

const article = (state = [], action) => {
	switch (action.type) {
		case LOAD_ARTICLES:
			return [...action.articles];
	
		default:
	      return state;
	}
}




export default article;