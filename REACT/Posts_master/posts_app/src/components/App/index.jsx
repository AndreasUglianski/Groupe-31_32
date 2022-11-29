import PostsContainer from '../PostsContainer';
import { useState } from 'react';
import { posts_data } from '../../data/posts';
import { Context } from '../../context';
import AddPostForm from '../AddPostForm';

function App() {
	const [posts, setPosts] = useState(posts_data);

	const change_like = (id) => {
		//найти карточку по id - метод find()
		const target_card = posts.find((el) => el.id === id);

		// у найденной карточки меняем значение св-ва like на противоположное
		target_card.like = !target_card.like;

		// отследить изменение состояния (setPosts)
		setPosts([...posts]);
	};

	const add_post = (title, text) =>
		setPosts([
			...posts,
			{
				id: Date.now(),
				title,
				text,
				like: false,
				comments: [],
			},
		]);

	return (
		<div>
			<Context.Provider value={{ posts, change_like, add_post }}>
				<AddPostForm />
				<PostsContainer />
			</Context.Provider>
		</div>
	);
}

export default App;
