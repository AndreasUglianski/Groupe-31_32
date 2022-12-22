import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import CategoriesPage from './pages/CategoriesPage';

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<MainPage />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='/categories' element={<CategoriesPage />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
