import { getProducts } from '../../requests/products';
import { useState, useEffect } from 'react';

function App() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts(setProducts);
	}, []);
	console.log(products);
	return <div>jk</div>;
}

export default App;
