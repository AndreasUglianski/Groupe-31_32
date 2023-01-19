import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import CategoriesPage from './pages/CategoriesPage';
import CartPage from './pages/CartPage';
import ProductsPage from './pages/ProductsPage';

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<CategoriesPage />} />
					<Route path='cart' element={<CartPage />} />
					<Route path=':category' element={<ProductsPage />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
