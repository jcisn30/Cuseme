import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import beers from "./beers";
import id from "./beer";
import info from "./beer";
import messages from "./comments";
import likes from "./likes";
import kids from "./kids";
import idk from "./kid";
import infok from "./kid";
import articles from "./articles";
import ida from "./article";
import infoa from "./article";

// import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	currentUser,
	errors, 
	beers,
	id,
	info,
	messages,
	likes,
	idk,
	infok,
	kids, 
	articles,
	ida,
	infoa
	
	
});

export default rootReducer;