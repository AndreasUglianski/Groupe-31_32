import { createStore, combineReducers } from 'redux';
import { userReducer } from './reducers/userReducer';
import { postReducer } from './reducers/postReducer';

const rootReducer = combineReducers({
	users: userReducer,
	posts: postReducer
	
});

export const store = createStore(rootReducer);