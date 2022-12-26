export const getProducts = (category, callback) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
			.then((resp) => resp.json())
			.then((json) => callback(json));
};
