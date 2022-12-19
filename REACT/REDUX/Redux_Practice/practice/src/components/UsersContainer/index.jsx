import React from 'react';
import { useSelector } from 'react-redux';
import User from '../User';

export default function UsersContainer() {
	const state = useSelector((state) => state.users);

	return (
		<div>
			{state.map((el) => (
				<User key={el.id} {...el} />
			))}
		</div>
	);
}
