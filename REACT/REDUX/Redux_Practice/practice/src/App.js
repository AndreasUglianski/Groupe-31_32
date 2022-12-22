import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import PostsPage from './pages/PostsPage';
import UserPage from './pages/UsersPage';

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' elelment={<Layout/>}>
					<Route index element={<MainPage />} />
					<Route path='/users' element={<UserPage />} />
					<Route path='/posts' element={<PostsPage />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
