import {LOAD_KIDS} from "../actionTypes";

const kid = (state = [], action) => {
	switch (action.type) {
		case LOAD_KIDS:
			return [...action.kids];
	
		default:
	      return state;
	}
}




export default kid;