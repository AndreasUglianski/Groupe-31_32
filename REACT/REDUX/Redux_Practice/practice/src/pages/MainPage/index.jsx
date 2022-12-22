import React from 'react';
import { Link } from 'react-router-dom';

export default function MainPage() {
	return (
		<div>
			<Link to='/users'>
				<button>Users</button>
			</Link>

			<Link to='/posts'>
				<button>Posts</button>
			</Link>
		</div>
	);
}
