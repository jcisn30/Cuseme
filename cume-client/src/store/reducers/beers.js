import {LOAD_BEERS} from "../actionTypes";

const beer = (state = [], action) => {
	switch (action.type) {
		case LOAD_BEERS:
			return [...action.beers];
	
		default:
	      return state;
	}
}




export default beer;