import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import beers from "./beers";
import id from "./beer";
import info from "./beer";


const rootReducer = combineReducers({
	currentUser,
	errors, 
	beers,
	id,
	info
});

export default rootReducer;