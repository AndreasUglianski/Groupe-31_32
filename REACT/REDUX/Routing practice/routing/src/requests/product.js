export const getProduct = (callback, id) => {
	fetch(`https://dummyjson.com/products/${id}`)
		.then((resp) => resp.json())
		.then((json) => callback(json));
};
