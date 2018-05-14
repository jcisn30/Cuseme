import rootReducer from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { save, load } from "redux-localstorage-simple";
// import { reducer as formReducer } from 'redux-form';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   storage,
// }


// const persistedReducer = persistReducer(persistConfig, rootReducer)



export function configureStore() {
    
    const store = createStore(
        //  persistedReducer,
        rootReducer,
        load(),
        compose (
            applyMiddleware(thunk, save()  ), 
            window.devToolsExtension ? window.devToolsExtension() : f => f,
            
            ),
             );
    
    //   let persistor = persistStore(store)
        
        return store;
        
}