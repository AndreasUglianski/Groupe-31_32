import React from 'react';
import { Link } from 'react-router-dom';
import UsersContainer from '../../components/UsersContainer';

export default function UsersPage() {
	return (
		<div>
			<Link to='/'>
				<button>Main page</button>
			</Link>
			<UsersContainer />
		</div>
	);
}
