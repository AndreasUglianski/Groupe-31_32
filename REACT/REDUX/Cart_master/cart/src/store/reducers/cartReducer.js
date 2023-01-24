const defaultState = [];

const ADD_TO_CART = 'ADD_TO_CART';

export const addToCart = (payload) => ({ type: ADD_TO_CART, payload });

const checkProduct = (state, payload) => {
    const target_product = state.find(el => el.id === payload.id)
    if (target_product) {
        target_product.count++
        return [...state]
    } else {
        return [...state, {...payload, count: 1}]
    }
}

// нужно проверять, есть ли товар в корзине
// если нет - то добавлять в массив новый объект со свойством count: 1
// если да - то увеличивать свойство count на 1


export const cartReducer = (state = defaultState, action) => {
	if (action.type === ADD_TO_CART) {
		return checkProduct(state, action.payload)
	} else {
		return state;
	}
};
