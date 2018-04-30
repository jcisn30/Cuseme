import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import beers from "./beers";
import id from "./beer";
import info from "./beer";
import comments from "./comments";


const rootReducer = combineReducers({
	currentUser,
	errors, 
	beers,
	id,
	info,
	comments,
});

export default rootReducer;