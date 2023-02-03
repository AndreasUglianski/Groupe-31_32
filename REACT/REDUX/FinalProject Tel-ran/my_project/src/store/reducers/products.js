const defaultState = []

const ALL_PRODUCTS = 'ALL_PRODUCTS';

export const allProducts = (payload) => ({ type: ALL_PRODUCTS, payload });

export const allProductsReducer = (state = defaultState, action) => {
	if (action.type === ALL_PRODUCTS) {
		return action.payload;
	} else {
		return state;
	}
};