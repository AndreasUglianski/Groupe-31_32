import { getProducts } from '../../requests/products';
import { getUsers } from '../../requests/users';
import { useState, useEffect } from 'react';
import { Context } from '../../context';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/MainPage';
import ProductsPage from '../../pages/ProductsPage';
import UsersPage from '../../pages/UsersPage';
import ToDoPage from '../../pages/ToDoPage';
import { getToDos } from '../../requests/todos';

function App() {
	const [products, setProducts] = useState([]);
	const [users, setUsers] = useState([]);
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		getProducts(setProducts);
		getUsers(setUsers);
		getToDos(setTodos);
	}, []);

	
	const createNewProduct = (product) =>
		setProducts((prev) => [...prev, product]);   /// prev -previos предидущее состояние !!
	const createNewUser = (users) => setUsers((prev) => [...prev, users]);
	const createNewToDo = (todo) => setTodos((prev) => [...prev, todo]);

	return (
		<div>
			<Context.Provider
				value={{
					products,
					users,
					createNewProduct,
					createNewUser,
					todos,
					createNewToDo,
				}}
			>
				<Routes>
					<Route path='/' element={<MainPage />} />
					<Route path='/products' element={<ProductsPage />} />
					<Route path='/users' element={<UsersPage />} />
					<Route path='/todos' element={<ToDoPage />} />
				</Routes>
			</Context.Provider>
		</div>
	);
}

export default App;
