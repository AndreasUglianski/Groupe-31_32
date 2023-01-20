import { createStore, combineReducers, applyMiddleware} from 'redux'
import { categoriesReducer } from './reducers/categories'
import thunk from 'redux-thunk'
import { productsReducer } from './reducers/products'
import { productReducer } from './reducers/product_item'

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    product_item: productReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
