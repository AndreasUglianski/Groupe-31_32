import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { categoriesReducer } from './reducers/categories';
import { allProductsReducer } from './reducers/products';
import { randomPromotionsReducer } from './reducers/random_promotion';

const rootReducer = combineReducers({
	categories: categoriesReducer,
	all_products: allProductsReducer,
	randomPromotions: randomPromotionsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
