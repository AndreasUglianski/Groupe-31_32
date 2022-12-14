import { getUsers } from '../../requests/users';
import { getProducts } from '../../requests/products';
import { useState, useEffect } from 'react';
import { Context } from '../../context';
import Nav from '../Nav';
import { Route, Routes } from 'react-router-dom';
import UserPage from '../../pages/UserPage';
import ProductsPage from '../../pages/ProductsPage';

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getUsers(setUsers);
	}, []); // функция вызывается один раз при перезагрузке страницы

	// getUsers(setUsers) - функция вызывается много раз

	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts(setProducts);
	}, []);

	return (
		<div>
			<Context.Provider value={{ users, products }}>
				<Nav />
				<Routes>
					<Route path='/UserPage' element={<UserPage />} />
					<Route path='/UserPage' element={<UserPage />} />
					<Route path='/ProductsPage' element={<ProductsPage />} />
				</Routes>
			</Context.Provider>
		</div>
	);
}

export default App;
