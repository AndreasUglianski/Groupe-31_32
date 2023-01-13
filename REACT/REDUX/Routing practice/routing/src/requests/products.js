export const getProducts = (callback, category) => {
	fetch(`https://dummyjson.com/products/category/${category}`)
		.then((resp) => resp.json())
		.then((json) => callback(json.products));
};
