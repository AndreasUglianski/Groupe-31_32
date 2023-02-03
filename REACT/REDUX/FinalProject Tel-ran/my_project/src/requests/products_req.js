

import { allProducts } from "../store/reducers/products";

export const all_Products = (dispatch) => {
	fetch('http://localhost:3333/products/all')
		.then((resp) => resp.json())
		.then((json) => dispatch(allProducts(json)));
};