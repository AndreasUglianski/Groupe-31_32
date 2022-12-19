import { createStore, combineReducers } from 'redux'
import { languageCardsReducer } from './reducers/languageCardsReducer';
import { productReducer } from './reducers/productReducer';

const rootReducer = combineReducers({
	products: productReducer,
	languageCards: languageCardsReducer          // products - ключ, придумываем сами
});

export const store = createStore(rootReducer);


// формируем объект store (хранилище), который обеспечивает работу всего redux
