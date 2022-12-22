import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from '../Post';
import { deletePost } from '../../store/reducers/postReducer'; 

export default function PostsContainer() {
	const dispatch = useDispatch();

	const posts = useSelector((state) => state.posts);

	const delete_post = (id) => dispatch(deletePost(id));

	return (
		<div>
			{posts.map((el) => (
				<Post key={el.id} {...el} delete_post={delete_post} />
			))}
		</div>
	);
}
