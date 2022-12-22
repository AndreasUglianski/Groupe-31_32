import React from 'react';
import { Link } from 'react-router-dom';
import AddPostsForm from '../../components/AddPostsForm';
import PostsContainer from '../../components/PostsContainer';

export default function PostsPage() {
	return (
		<div>
			<Link to='/'>
				<button>Main</button>
			</Link>

			<AddPostsForm />
			<PostsContainer />
		</div>
	);
}
