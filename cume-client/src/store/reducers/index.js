import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import beers from "./beers";
import id from "./beer";
import info from "./beer";
import messages from "./comments";

import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	currentUser,
	errors, 
	beers,
	id,
	info,
	form: formReducer,
	messages,
	
});

export default rootReducer;