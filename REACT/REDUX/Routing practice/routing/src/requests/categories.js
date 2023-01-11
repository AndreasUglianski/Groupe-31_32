export const getCategories = (callback) => {
    fetch('https://dummyjson.com/products/categories')
			.then((resp) => resp.json())
			.then((json) => callback(json));
}